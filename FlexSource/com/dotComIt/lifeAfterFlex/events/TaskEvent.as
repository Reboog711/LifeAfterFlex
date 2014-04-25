package com.dotComIt.lifeAfterFlex.events
{
	import com.dotComIt.lifeAfterFlex.vos.TaskFilterVO;
	
	import flash.events.Event;
	
	import mx.collections.ArrayCollection;
	
	public class TaskEvent extends Event
	{
		public function TaskEvent(type:String, bubbles:Boolean=false, cancelable:Boolean=false)
		{
			super(type, bubbles, cancelable);
		}
		public static const GET_FILTERED_TASKS_SUCCESS :String = "getFilteredTasksSuccess";
		public static const GET_FILTERED_TASKS_FAIL :String = "getFilteredTasksFail";

		public static const GET_TASK_CATEGORIES_SUCCESS :String = "getTaskCategoriesSuccess";
		public static const GET_TASK_CATEGORIES_FAIL :String = "getTaskCategoriesFail";
		
		public static const REQUEST_TASK_FILTER :String = "requestTaskFilter";		
		
		public static const REQUEST_TASK_NEW :String = "requestTaskNew";
		
		public static const REQUEST_TASK_EDIT :String = "requestTaskEdit";

		public static const CREATE_TASK_SUCCESS :String = "createTaskSuccess";
		public static const UPDATE_TASK_SUCCESS :String = "updateTaskSuccess";
		public static const UPDATE_TASK_FAIL :String = "updateTaskFail";

		public static const SCHEDULED_TASK_UNSCHEDULE_REQUEST :String = "scheduledTaskUnscheduleRequest";		
		
		public static const SCHEDULE_SINGLE_TASK_SUCCESS :String = "scheduleSingleTaskSuccess";
		public static const SCHEDULE_SINGLE_TASK_FAIL :String = "scheduleSingleTaskFail";
		
		public static const SCHEDULE_TASK_LIST_SUCCESS :String = "scheduleTaskListSuccess";
		public static const SCHEDULE_TASK_LIST_FAIL :String = "scheduleTaskListFail"; 
		
		public static const COMPLETE_TASK_REQUEST :String = "completeTaskRequest";		

		public static const COMPLETE_TASK_SUCCESS :String = "completeTaskSuccess";
		public static const COMPLETE_TASK_FAIL :String = "completeTaskFail";

		// Added for the bonus article 
		public static const ADD_TASK_TO_SCHEDULER :String = "addTaskToScheduler";		
		
		public var collection :ArrayCollection;
		public var message :String;
		public var filter :TaskFilterVO;
		
		public var task :Object;
	}
}