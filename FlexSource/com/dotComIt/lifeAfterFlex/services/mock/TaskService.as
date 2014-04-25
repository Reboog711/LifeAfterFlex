package com.dotComIt.lifeAfterFlex.services.mock
{
	import com.dotComIt.lifeAfterFlex.events.TaskEvent;
	import com.dotComIt.lifeAfterFlex.services.ITaskService;
	import com.dotComIt.lifeAfterFlex.utils.GlobalFunctions;
	import com.dotComIt.lifeAfterFlex.vos.TaskFilterVO;
	
	import flash.events.EventDispatcher;
	import flash.events.IEventDispatcher;
	
	import mx.collections.ArrayCollection;
	import mx.formatters.DateFormatter;
	
	[Event(name="getFilteredTasksSuccess", type="com.dotComIt.lifeAfterFlex.events.TaskEvent")]
	[Event(name="getFilteredTasksFail", type="com.dotComIt.lifeAfterFlex.events.TaskEvent")]
	
	
	[Event(name="getTaskCategoriesSuccess", type="com.dotComIt.lifeAfterFlex.events.TaskEvent")]
	[Event(name="getTaskCategoriesFail", type="com.dotComIt.lifeAfterFlex.events.TaskEvent")]
	
	
	[Event(name="createTaskSuccess", type="com.dotComIt.lifeAfterFlex.events.TaskEvent")]
	[Event(name="updateTaskSuccess", type="com.dotComIt.lifeAfterFlex.events.TaskEvent")]
	[Event(name="updateTaskFail", type="com.dotComIt.lifeAfterFlex.events.TaskEvent")]
	
	[Event(name="scheduleSingleTaskSuccess", type="com.dotComIt.lifeAfterFlex.events.TaskEvent")]
	[Event(name="scheduleSingleTaskFail", type="com.dotComIt.lifeAfterFlex.events.TaskEvent")]
	
	
	[Event(name="scheduleTaskListSuccess", type="com.dotComIt.lifeAfterFlex.events.TaskEvent")]
	[Event(name="scheduleTaskListFail", type="com.dotComIt.lifeAfterFlex.events.TaskEvent")]
	
	
	[Event(name="completeTaskSuccess", type="com.dotComIt.lifeAfterFlex.events.TaskEvent")]
	[Event(name="completeTaskFail", type="com.dotComIt.lifeAfterFlex.events.TaskEvent")]
	
	public class TaskService extends EventDispatcher implements ITaskService
	{
		public function TaskService(target:IEventDispatcher=null)
		{
			super(target);
		}
		
		
		protected var taskArray :Array = [
			{taskCategoryID:2,taskCategory:"Personal",description:"Get Milk",dateScheduled:"03/29/2013",dateCompleted:"",taskID:1,dateCreated:"3/27/2013",completed:0,userID:1},
			{taskCategoryID:1,taskCategory:"Business",description:"Finish Chapter 2",dateScheduled:"03/29/2013",dateCompleted:"",taskID:2,dateCreated:"3/28/2013",completed:0,userID:1},
			{taskCategoryID:1,taskCategory:"Business",description:"Plan Chapter 5",dateScheduled:"03/20/2013",dateCompleted:"",taskID:5,dateCreated:"3/28/2013",completed:0,userID:1},
			{taskCategoryID:1,taskCategory:"Business",description:"Write Code for Chapter 3",dateScheduled:"03/29/2013",dateCompleted:"",taskID:3,dateCreated:"3/29/2013",completed:0,userID:1},
			{taskCategoryID:1,taskCategory:"Business",description:"Write Chapter 4",dateScheduled:"03/20/2013",dateCompleted:"",taskID:4,dateCreated:"3/30/2013",completed:1,userID:1},
			{taskCategoryID:1,taskCategory:"Business",description:"Learn JQuery",dateScheduled:"",dateCompleted:"",taskID:6,dateCreated:"3/31/2013",completed:0,userID:1},
			{taskCategoryID:1,taskCategory:"Business",description:"created by Test Harness",dateScheduled:"11/24/2013",dateCompleted:"",taskID:7,dateCreated:"05/09/2013",completed:0,userID:1},
			{taskCategoryID:2,taskCategory:"Personal",description:"This is a test task",dateScheduled:"02/14/2014",dateCompleted:"",taskID:8,dateCreated:"05/09/2013" ,completed:0,userID:1},
			{taskCategoryID:2,taskCategory:"Personal",description:"This is a test task",dateScheduled:"11/24/2013",dateCompleted:"",taskID:9,dateCreated:"05/09/2013",completed:0,userID:1},
			{taskCategoryID:2,taskCategory:"Personal",description:"This is a test task",dateScheduled:"11/21/2013",dateCompleted:"",taskID:10,dateCreated:"05/09/2013",completed:0,userID:1},
			{taskCategoryID:2,taskCategory:"Personal",description:"Test Task",dateScheduled:"11/24/2013",dateCompleted:"",taskID:11,dateCreated:"05/09/2013",completed:1,userID:1},
			{taskCategoryID:2,taskCategory:"Personal",description:"Task Task 2",dateScheduled:"11/22/2013",dateCompleted:"",taskID:12,dateCreated:"05/09/2013",completed:0,userID:1},
			{taskCategoryID:1,taskCategory:"Business",description:"created by Test Harness",dateScheduled:"11/22/2013",dateCompleted:"",taskID:13,dateCreated:"05/09/2013",completed:0,userID:1},
			{taskCategoryID:2,taskCategory:"Personal",description:"New Task for Jeff",dateScheduled:"11/22/2013",dateCompleted:"",taskID:14,dateCreated:"05/09/2013",completed:0,userID:2},
			{taskCategoryID:2,taskCategory:"Personal",description:"New Task for Jeff 2",dateScheduled:"11/22/2013",dateCompleted:"",taskID:15,dateCreated:"05/27/2013",completed:0,userID:2},
			{taskCategoryID:1,taskCategory:"Business",description:"Some Text",dateScheduled:"",dateCompleted:"",taskID:16,dateCreated:"11/13/2013",completed:0,userID:1},
			{taskCategoryID:"",taskCategory:"",description:"testoring",dateScheduled:"",dateCompleted:"",taskID:17,dateCreated:"11/16/2013",completed:1,userID:1},
			{taskCategoryID:1,taskCategory:"Business",description:"Testoring",dateScheduled:"",dateCompleted:"",taskID:18,dateCreated:"11/16/2013",completed:0,userID:1},
			{taskCategoryID:2,taskCategory:"Personal",description:"Testoring 3",dateScheduled:"",dateCompleted:"",taskID:19,dateCreated:"11/16/2013",completed:0,userID:1},
			{taskCategoryID:1,taskCategory:"Business",description:"Testoring 2",dateScheduled:"",dateCompleted:"",taskID:20,dateCreated:"11/16/2013",completed:0,userID:1},
			{taskCategoryID:2,taskCategory:"Personal",description:"Testoring 4",dateScheduled:"",dateCompleted:"",taskID:21,dateCreated:"11/16/2013",completed:0,userID:1},
			{taskCategoryID:1,taskCategory:"Business",description:"created by Test Harness",dateScheduled:"",dateCompleted:"",taskID:22,dateCreated:"12/05/2013",completed:0,userID:1},
			{taskCategoryID:1,taskCategory:"Business",description:"created by Test Harness",dateScheduled:"",dateCompleted:"",taskID:23,dateCreated:"12/05/2013",completed:0,userID:1},
			{taskCategoryID:1,taskCategory:"Business",description:"created by Test Harness",dateScheduled:"",dateCompleted:"",taskID:24,dateCreated:"12/05/2013",completed:0,userID:1},
			{taskCategoryID:2,taskCategory:"Personal",description:"This is a test task",dateScheduled:"",dateCompleted:"",taskID:25,dateCreated:"12/05/2013",completed:0,userID:1},
			{taskCategoryID:1,taskCategory:"Business",description:"created by Test Harness",dateScheduled:"",dateCompleted:"",taskID:26,dateCreated:"12/05/2013",completed:1,userID:1},
			{taskCategoryID:1,taskCategory:"Business",description:"created by Test Harness",dateScheduled:"",dateCompleted:"",taskID:27,dateCreated:"12/05/2013",completed:0,userID:1},
			{taskCategoryID:2,taskCategory:"Personal",description:"This is a test task",dateScheduled:"",dateCompleted:"",taskID:28,dateCreated:"12/05/2013",completed:0,userID:1},
			{taskCategoryID:1,taskCategory:"Business",description:"New Task 2",dateScheduled:"",dateCompleted:"",taskID:29,dateCreated:"12/07/2013",completed:1,userID:0},
			{taskCategoryID:"",taskCategory:"",description:"test",dateScheduled:"",dateCompleted:"",taskID:30,dateCreated:"12/12/2013",completed:1,userID:1},
			{taskCategoryID:"",taskCategory:"",description:"New Task 2 2014 Edit",dateScheduled:"",dateCompleted:"",taskID:31,dateCreated:"2/11/2014",completed:0,userID:1}
		];
		
		
		protected function filterFunction(task:Object,taskFilter:TaskFilterVO):Boolean{
			if(!isNaN(taskFilter.completed)){
				if(taskFilter.completed != task.completed){
					return false;
				}
			}
			
			if(taskFilter.taskCategoryID){
				if(taskFilter.taskCategoryID != task.taskCategoryID){
					return false;
				}
			}


			var createdDate :Date = DateFormatter.parseDateString(task.dateCreated);
			if(taskFilter.startDate){
				if(taskFilter.startDate > createdDate){
					return false;
				}
			}
			
			if(taskFilter.endDate){
				if(taskFilter.endDate < createdDate){
					return false;
				}
			}
			
			var scheduledDate :Date = DateFormatter.parseDateString(task.dateScheduled);

			if(taskFilter.scheduledStartDate){
				// if the scheduled date is null; then it can't be included so return false
				if(!scheduledDate){
					return false;
				}
				if(taskFilter.scheduledStartDate > scheduledDate){
					return false;
				}
			}

			if(taskFilter.scheduledEndDate){
				if(!scheduledDate){
					return false;
				}
				if(taskFilter.scheduledEndDate < scheduledDate){
					return false;
				}
			}

			if(taskFilter.scheduledEqualDate){
				if(!scheduledDate){
					return false;
				}
				if((taskFilter.scheduledEqualDate.getDate() != scheduledDate.getDate()) || 
					(taskFilter.scheduledEqualDate.getMonth() != scheduledDate.getMonth()) || 
					(taskFilter.scheduledEqualDate.getFullYear() != scheduledDate.getFullYear())){
					return false;
				}
			}

		
			return true;
		}

		
		// did not use the ArrayCollection filter functionality b/c we wanted to keep the collections separate for scheduler list and task grid
		public function getFilteredTasks(filter:TaskFilterVO):void{
			var filteredTasksArray :ArrayCollection = new ArrayCollection();;
			for each(var task:Object in this.taskArray){
				if(filterFunction(task,filter)){
					filteredTasksArray.addItem(task);	
				}
			}
			var resultEvent :TaskEvent = new TaskEvent(TaskEvent.GET_FILTERED_TASKS_SUCCESS);
			resultEvent.collection = filteredTasksArray;
			this.dispatchEvent(resultEvent);
		}
		
		public function getTaskCategories():void{
			var categoryCollection :ArrayCollection = new ArrayCollection();
			var newObject :Object = new Object();
			newObject.taskCategoryID = 0;
			newObject.taskCategory = "All Categories";
			categoryCollection.addItem(newObject);
			newObject = new Object();
			newObject.taskCategoryID = 1;
			newObject.taskCategory = "Business";
			categoryCollection.addItem(newObject);
			newObject = new Object();
			newObject.taskCategoryID = 2;
			newObject.taskCategory = "Personal";
			categoryCollection.addItem(newObject);
			var resultEvent :TaskEvent = new TaskEvent(TaskEvent.GET_TASK_CATEGORIES_SUCCESS);
			resultEvent.collection = categoryCollection;
			this.dispatchEvent(resultEvent);
		}
		
		// used for both updating and creating a task 
		public function updateTask(task:Object, userID:int):void{
			var resultEvent :TaskEvent;
			if(task.taskID == 0){
				resultEvent = new TaskEvent(TaskEvent.CREATE_TASK_SUCCESS);
				task.taskID = this.taskArray[this.taskArray.length-1].taskID + 1;
				task.dateScheduled = "";
				task.dateCompleted = "";
				task.dateCreated = GlobalFunctions.formatDate(new Date())
				task.completed = 0
				task.userID = userID;
				if(task.taskCategoryID == 1){
					task.taskCategory = 'Business';
				} else if(task.taskCategoryID == 2){
					task.taskCategory = 'Personal';
				} else {
					task.taskCategory = '';
				}
				// we don't need to add it to our 'data store' because that is done in TaskCU when the TaskModel is updated. 
			} else {
				resultEvent = new TaskEvent(TaskEvent.UPDATE_TASK_SUCCESS);
			}
			
			resultEvent.task = new ArrayCollection([task]);
			this.dispatchEvent(resultEvent);
		}

		public function scheduleTask(task:Object):void{
			if(!task.dateScheduled){
				task.dateScheduled = '';
			}
			var resultEvent :TaskEvent;
			resultEvent = new TaskEvent(TaskEvent.SCHEDULE_SINGLE_TASK_SUCCESS);
			resultEvent.task = new ArrayCollection([task]);
			this.dispatchEvent(resultEvent);
		}

		public function scheduleTaskList(tasks:ArrayCollection, dateScheduled:Date):void{
			// no data to modify here; UI already has all the data it needs; so just dispatch the success event
			var resultEvent :TaskEvent;
			resultEvent = new TaskEvent(TaskEvent.SCHEDULE_TASK_LIST_SUCCESS);
			this.dispatchEvent(resultEvent);
		}
		
		public function completeTask(task:Object):void{
			// completed property was already toggled before hitting service, but we update the dateCompleted to now
			if(task.completed == 1){
				task.dateCompleted = GlobalFunctions.formatDate(new Date())
			} else {
				task.dateCompleted = "";
			}
			var resultEvent :TaskEvent = new TaskEvent(TaskEvent.COMPLETE_TASK_SUCCESS);
			resultEvent.collection = new ArrayCollection([task]);
			this.dispatchEvent(resultEvent);  
		}

		
	}
}