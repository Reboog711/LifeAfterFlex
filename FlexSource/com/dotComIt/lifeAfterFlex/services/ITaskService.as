package com.dotComIt.lifeAfterFlex.services
{
	import com.dotComIt.lifeAfterFlex.vos.TaskFilterVO;
	
	import flash.events.IEventDispatcher;
	
	import mx.collections.ArrayCollection;
	
	public interface ITaskService extends IEventDispatcher
	{
		function getFilteredTasks(filter:TaskFilterVO):void;		

		function getTaskCategories():void;		

		function updateTask(task:Object, userID:int):void;

		function scheduleTask(task:Object):void;
		
		function scheduleTaskList(tasks:ArrayCollection, dateScheduled:Date):void;
		
		function completeTask(task:Object):void;
	}
}