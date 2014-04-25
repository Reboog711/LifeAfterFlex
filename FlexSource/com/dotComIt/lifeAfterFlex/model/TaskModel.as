package com.dotComIt.lifeAfterFlex.model
{
	import com.dotComIt.lifeAfterFlex.vos.TaskFilterVO;
	
	import mx.collections.ArrayCollection;

	[Bindable]
	public class TaskModel
	{
		public function TaskModel()
		{
		}
		public static var tasks :ArrayCollection = new ArrayCollection();
		public static var taskFilter :TaskFilterVO;
		
		public static var taskCategories :ArrayCollection = new ArrayCollection();
		
	}
}