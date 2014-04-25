// borrowed and modified from 
// http://blogs.adobe.com/aharui/2011/03/spark-checkbox-datagrid-with-drag-and-drop-support.html
package com.dotComIt.lifeAfterFlex.views.draggableDataGrid
{
	import flash.display.DisplayObject;
	import flash.geom.Point;
	
	import mx.core.DragSource;
	import mx.core.IFactory;
	import mx.core.IFlexDisplayObject;
	import mx.events.DragEvent;
	import mx.events.FlexEvent;
	import mx.managers.DragManager;
	
	import spark.components.DataGrid;
	import spark.components.Group;
	import spark.components.gridClasses.CellPosition;
	import spark.components.gridClasses.IGridItemRenderer;
	import spark.events.GridEvent;
	
	public class DraggableDataGrid extends DataGrid
	{
		public function DraggableDataGrid()
		{
			super();
			this.addEventListener(FlexEvent.INITIALIZE, onInit);
			this.addEventListener(GridEvent.GRID_MOUSE_DOWN,startDragDrop);
		}
		
		protected function onInit(event:FlexEvent):void
		{
			this.grid.addEventListener(DragEvent.DRAG_ENTER, rowDragEnterHandler);
		}		
		
		protected var dropIndex:int;
		protected var dropIndicator:DisplayObject;

		
		protected function rowDragEnterHandler(event:DragEvent):void
		{
			if (event.dragSource.hasFormat("itemsByIndex"))
			{
				this.grid.addEventListener(DragEvent.DRAG_OVER, rowDragOverHandler);
				this.grid.addEventListener(DragEvent.DRAG_EXIT, rowDragExitHandler);
				this.grid.addEventListener(DragEvent.DRAG_DROP, rowDragDropHandler);
			}
			showRowDropFeedback(event);
			DragManager.acceptDragDrop(this.grid);
		}
		
		protected function showRowDropFeedback(event:DragEvent):void
		{
			var pt:Point = new Point(event.stageX, event.stageY);
			pt = this.grid.globalToLocal(pt);
			var pos:CellPosition = this.grid.getCellAt(pt.x, pt.y);
			// JH if no pos is defined not dragging over current list so just return
			if(!pos){
				return;
			}
			var newDropIndex:int = pos.rowIndex;
			if (newDropIndex != -1)
			{
				var renderer:IGridItemRenderer = this.grid.getItemRendererAt(pos.rowIndex, pos.columnIndex);
				if (!dropIndicator)
				{
					dropIndicator = new RowDropIndicator();
					this.grid.overlay.addDisplayObject(dropIndicator);
				}
				if (pt.y < renderer.y + renderer.height / 2)
					dropIndicator.y = renderer.y - dropIndicator.height / 2; 
				else
				{
					dropIndicator.y = renderer.y + renderer.height - dropIndicator.height / 2;
					newDropIndex++;
				}
				dropIndex = newDropIndex;
			}
			else
			{
				cleanUpRowDropIndicator();
			}
		}
		
		protected function cleanUpRowDropIndicator():void
		{
			if (dropIndicator)
			{
				dropIndex == -1;
				this.grid.overlay.removeDisplayObject(dropIndicator);
				dropIndicator = null;
			}
		}

		protected function rowDragOverHandler(event:DragEvent):void
		{
			showRowDropFeedback(event);
			DragManager.acceptDragDrop(this.grid);
		}
		
		protected function rowDragExitHandler(event:DragEvent):void
		{
//			this.grid.removeEventListener(DragEvent.DRAG_OVER, columnDragOverHandler);
//			this.grid.removeEventListener(DragEvent.DRAG_EXIT, columnDragExitHandler);
//			this.grid.removeEventListener(DragEvent.DRAG_DROP, columnDragDropHandler);
			cleanUpRowDropIndicator();
		}
		
		protected function rowDragDropHandler(event:DragEvent):void
		{
//			this.grid.removeEventListener(DragEvent.DRAG_OVER, columnDragOverHandler);
//			this.grid.removeEventListener(DragEvent.DRAG_EXIT, columnDragExitHandler);
//			this.grid.removeEventListener(DragEvent.DRAG_DROP, columnDragDropHandler);
			dropRow(event);
		}

		protected function dropRow(event:DragEvent):void
		{
			var data:Vector.<Object> = event.dragSource.dataForFormat("itemsByIndex") as Vector.<Object>;
			var count:int = data.length;
			var i:int;
			
			if (event.dragInitiator == this)
			{
				for (i = 0; i < count; i++)
				{
					var index:int = this.dataProvider.getItemIndex(data[i]);
					this.dataProvider.removeItemAt(index);
					if (index < dropIndex)
						dropIndex--;
				}
			}
			for (i = 0; i < count; i++)
			{
				this.dataProvider.addItemAt(data[i], dropIndex++);
			}
			cleanUpRowDropIndicator();
		}

		protected function startDragDrop(event:GridEvent):void
		{
			// JH added to not allow dragging on first column
			// trigger off renderIsEditable
			if(event.column.rendererIsEditable == true){
				return;
			}
			if (DragManager.isDragging)
				return;
			
			if (event.rowIndex == -1) // dragging headers
				// no dragging of headers
				return;
			else
				startRowDragDrop(event);
		}

		protected function startRowDragDrop(event:GridEvent):void
		{
			var newIndex:int = IGridItemRenderer(event.itemRenderer).rowIndex;
			
			var ds:DragSource = new DragSource();
			ds.addHandler(copySelectedItemsForDragDrop, "itemsByIndex");
			
			// Calculate the index of the focus item within the vector
			// of ordered items returned for the "itemsByIndex" format.
			var caretIndex:int = 0;
			var draggedIndices:Vector.<int> = this.selectedIndices;
			var count:int = draggedIndices.length;
			for (var i:int = 0; i < count; i++)
			{
				if (newIndex > draggedIndices[i])
					caretIndex++;
			}
			ds.addData(caretIndex, "caretIndex");
			
			var proxy:Group = new Group();
			proxy.styleName = this;
			proxy.width = this.grid.width;
			DragManager.doDrag(this, ds, event, proxy as IFlexDisplayObject, 0, -this.columnHeaderGroup.height);
			
			const visibleColumnIndices:Vector.<int> = this.grid.getVisibleColumnIndices();
			count = visibleColumnIndices.length;
			for (i = 0; i < count; i++)
			{
				var currentRenderer:IGridItemRenderer = this.grid.getItemRendererAt(newIndex, visibleColumnIndices[i]);
				var factory:IFactory = this.columns.getItemAt(i).itemRenderer;
				if (!factory)
					factory = this.itemRenderer;
				var renderer:IGridItemRenderer = IGridItemRenderer(factory.newInstance());
				renderer.visible = true;
				renderer.column = currentRenderer.column;
				renderer.rowIndex = currentRenderer.rowIndex;
				renderer.label = currentRenderer.label;
				renderer.x = currentRenderer.x;
				renderer.y = currentRenderer.y;
				renderer.width = currentRenderer.width;
				renderer.height = currentRenderer.height;
				renderer.prepare(false);
				proxy.addElement(renderer);
				renderer.owner = this;
			}
			proxy.height = renderer.height;
			
			this.addEventListener(DragEvent.DRAG_COMPLETE, rowDragCompleteHandler);				
		}
		
		protected function rowDragCompleteHandler(event:DragEvent):void
		{
			// Remove the dragged items only if they were drag moved to
			// a different list. If the items were drag moved to this
			// list, the reordering was already handles in the 
			// DragEvent.DRAG_DROP listener.
			if (event.action != DragManager.MOVE || 
				event.relatedObject == this)
				return;
			
			// Clear the selection, but remember which items were moved
			var movedIndices:Vector.<int> = this.selectedIndices;
			this.selectedIndices = new Vector.<int>();
			
			// Remove the moved items
			movedIndices.sort(compareValues);
			var count:int = movedIndices.length;
			for (var i:int = count - 1; i >= 0; i--)
			{
				this.dataProvider.removeItemAt(movedIndices[i]);
			}                
		}
		
		/**
		 *  @private
		 *  Used to sort the selected indices during drag and drop operations.
		 */
		private function compareValues(a:int, b:int):int
		{
			return a - b;
		} 

		protected function copySelectedItemsForDragDrop():Vector.<Object>
		{
			// Copy the vector so that we don't modify the original
			// since selectedIndices returns a reference.
			var draggedIndices:Vector.<int> = this.selectedIndices.slice(0, this.selectedIndices.length);
			var result:Vector.<Object> = new Vector.<Object>(draggedIndices.length);
			
			// Sort in the order of the data source
			draggedIndices.sort(compareValues);
			
			// Copy the items
			var count:int = draggedIndices.length;
			for (var i:int = 0; i < count; i++)
				result[i] = this.dataProvider.getItemAt(draggedIndices[i]);  
			return result;
		}
		
	}
}