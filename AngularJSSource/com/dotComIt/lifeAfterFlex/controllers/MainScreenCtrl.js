function MainScreenCtrl($scope, $location, $timeout, $filter, $modal, UserModel, TasksModel, TaskService) {
    $scope.title = 'Main View'
    $scope.userModel = {
        userModel : UserModel
    }
    // have to put this inside an object so the insides of includes can access it
    $scope.tasksModel = {
        tasksModel : TasksModel
    }

    // variables for the expand collapse of scheduler component
    $scope.gridContainerStyle = 'horizontal-layout-94';
    $scope.schedulerShowButtonLabel = "<"

    // used in the Scheduler
    $scope.scheduler = {
        schedulerState : false,
        schedulerDate : new Date()
    }

    $scope.onToggleScheduler = function onToggleScheduler(){
        if($scope.scheduler.schedulerState == true){
            $scope.scheduler.schedulerState = false;
            $scope.gridContainerStyle = 'horizontal-layout-94';
            $scope.schedulerShowButtonLabel = "<"
        } else {
            $scope.scheduler.schedulerState = true;
            $scope.gridContainerStyle = 'horizontal-layout-40';
            $scope.schedulerShowButtonLabel = ">"
            $scope.loadSchedulerTasks();
        }
        window.setTimeout(function(){
            $(window).resize();
            $(window).resize();
        }, 1);
    }

    $scope.loadSchedulerTasks = function loadSchedulerTasks(){
        var localTaskFilter = {};
        localTaskFilter.scheduledEqualDate = $filter('date')($scope.scheduler.schedulerDate,
            'shortDate');
        $scope.loadTasks(localTaskFilter,onSchedulerTaskLoadSuccess,onTaskLoadError);
    }

    var onSchedulerTaskLoadSuccess = function onSchedulerTaskLoadSuccess(data, status,
                                                                         headers, config){
        console.log('Scheduler load task success');
        console.log(data);
        if(data.error == 1){
            alert("We could not load the task data");
            return;
        }
        $scope.tasksModel.tasksModel.scheduledTasks = data.resultObject;
        $scope.tasksModel.tasksModel.scheduledTasks = $scope.tasksModel.tasksModel.scheduledTasks.concat($scope.tasksModel.tasksModel.addedTasks);
    }

    $scope.onSchedulerDateChange = function onSchedulerDateChange(){
        $scope.loadSchedulerTasks();
    }

    // date picker options
    $scope.createdAfterDateProperties = {
        opened : false
    };
    $scope.createdBeforeDateProperties = {
        opened : false
    };
    $scope.scheduledAfterDateProperties = {
        opened : false
    };
    $scope.scheduledOnDateProperties = {
        opened : false
    };
    $scope.scheduledBeforeDateProperties = {
        opened : false
    };
    $scope.currentDateProperties = {
        opened : false
    };

    $scope.datePickerOptions = {
        'year-format': "'yy'",
        'starting-day': 0,
        showWeeks: false
    };

    // the data property is some object that has the property opened in it
    // presumably related to one of our Calendar controls
    $scope.openDatePicker = function(data) {
        $timeout(function() {
            data.opened = true;
        });
    };

    $scope.onSchedulerDateChange = function onSchedulerDateChange(){
        $scope.loadSchedulerTasks();
    }

    // called when the delete button is pressed in the scheduler list
    $scope.onTaskUnschedule = function onTaskUnschedule(task){
        if(task.dateScheduled){
            // call service to unschedule task
            task.dateScheduled = null;
            scheduleTask(task);
        } else {
			// hasn't been saved yet; so just delete task from schedule
            deleteTaskFromSchedule(task);
        }
    }

    // this code is a conversion of the Flex code which will remove a task
    // from the TasksModel.scheduledTasks array
    var deleteTaskFromSchedule = function deleteTaskFromSchedule(task){
        var itemIndex = $scope.tasksModel.tasksModel.scheduledTasks.indexOf(task);
        if(itemIndex >= 0){
            $scope.tasksModel.tasksModel.scheduledTasks.splice(itemIndex,1);
        }
        // remove from added items; if it is on it
        itemIndex = $scope.tasksModel.tasksModel.addedTasks.indexOf(task);
        if(itemIndex >= 0){
            $scope.tasksModel.tasksModel.addedTasks.splice(itemIndex,1);
        }
    }


    $scope.taskGridOptions = {
        data: 'tasksModel.tasksModel.tasks',
        multiSelect: false,
        selectedItems: $scope.selectedTask
    }
    $scope.taskerGridColumnDefs = [
        { displayName: 'Completed',cellTemplate:'/AngularApp/com/dotComIt/lifeAfterFlex/views/tasks/CompletedCheckBoxRenderer.html'},
        {field: 'description', displayName: 'Description'},
        {field: 'taskCategory', displayName: 'Category'},
        {field: 'dateCreated', displayName: 'Date Created'},
        {field: 'dateScheduled', displayName: 'Date Scheduled'},
        {cellTemplate:'/AngularApp/com/dotComIt/lifeAfterFlex/views/tasks/EditButtonRenderer.html'}
    ];

    $scope.creatorGridColumnDefs = [
        {displayName: 'Completed',
            cellTemplate:
                '/AngularApp/com/dotComIt/lifeAfterFlex/views/tasks/CompletedCheckBoxRenderer.html'},
        {field: 'description', displayName: 'Description'},
        {field: 'taskCategory', displayName: 'Category'},
        {field: 'dateCreated', displayName: 'Date Created'},
        {field: 'dateScheduled', displayName: 'Date Scheduled'},
    ];

    // function to determine the checkbox value in the ng-DataGrid's Check Box ItemRenderer
    $scope.getCompletedCheckBoxValue = function getCompletedCheckBoxValue (data) {
        if(data.completed){
            return 1;
        }
        return 0;
    }

    $scope.loadTasks = function loadTasks(taskFilter, onSuccess , onError ){
        console.log(taskFilter);
        TaskService.loadTasks(taskFilter, onSuccess , onError);
    }


    var onTaskLoadError = function onTaskLoadError(data, status, headers, config){
        console.log(data);
        alert(data);
    }
    var onTaskLoadSuccess = function onTaskLoadSuccess(data, status, headers, config){
        if(data.error == 1){
            console.log('we could load the task data');
            alert("We could not load the task data");
            return;
        }
        $scope.tasksModel.tasksModel.tasks = data.resultObject;
    }

    $scope.loadTaskCategories = function loadTaskCategories(){
        TaskService.loadTaskCategories(onTaskCategoriesLoadSuccess,onTaskLoadError)
    }

    var onTaskCategoriesLoadSuccess = function onTaskCategoriesLoadSuccess(data, status,
                                                                           headers, config){
        if(data.error == 1){
            console.log('we could load the task categories');
            alert("We could not load the task categories");
            return;
        }
        $scope.tasksModel.tasksModel.taskCategories = data.resultObject;
    }

    $scope.onFilterRequest = function onFilterRequest(){
        var localTaskFilter = {};
        if($scope.tasksModel.tasksModel.taskFilter.completed != -1){
            localTaskFilter.completed = $scope.tasksModel.tasksModel.taskFilter.completed;
        }
        localTaskFilter.taskCategoryID = $scope.tasksModel.tasksModel.taskFilter.taskCategoryID;

        if($scope.tasksModel.tasksModel.taskFilter.scheduledEqualDate){
            localTaskFilter.scheduledEqualDate =
                $filter('date')($scope.tasksModel.tasksModel.taskFilter.scheduledEqualDate, 'shortDate');
        } else {
            if($scope.tasksModel.tasksModel.taskFilter.startDate){
                localTaskFilter.startDate =
                    $filter('date')($scope.tasksModel.tasksModel.taskFilter.startDate, 'shortDate');
            }
            if($scope.tasksModel.tasksModel.taskFilter.endDate){
                localTaskFilter.endDate =
                    $filter('date')($scope.tasksModel.tasksModel.taskFilter.endDate, 'shortDate');
            }
            if($scope.tasksModel.tasksModel.taskFilter.ScheduledStartDate){
                localTaskFilter.ScheduledStartDate =
                    $filter('date')($scope.tasksModel.tasksModel.taskFilter.ScheduledStartDate, 'shortDate');
            }
            if($scope.tasksModel.tasksModel.taskFilter.ScheduledEndDate){
                localTaskFilter.ScheduledEndDate =
                    $filter('date')($scope.tasksModel.tasksModel.taskFilter.ScheduledEndDate, 'shortDate');
            }
        }
        $scope.loadTasks(localTaskFilter, onTaskLoadSuccess, onTaskLoadError);
    }

    $scope.openTaskWindow = function openTaskWindow(title,task){
        var modalInstance = $modal.open({
            templateUrl: '/AngularApp/com/dotComIt/lifeAfterFlex/views/tasks/TaskCU.html',
            controller: TaskCUCtrl,
            resolve: {
                title : function(){ return title },
                taskVO : function(){ return task }
            }
        });

        var resultFunction = updateTaskComplete;
        if(task.taskID == 0){
            resultFunction = createTaskComplete;
        }
        modalInstance.result.then(resultFunction, onPopUpDismissal);
    }

    onPopUpDismissal = function onPopUpDismissal(){
        console.log('Modal dismissed at: ' + new Date());
    }

    createTaskComplete = function createTaskComplete (updatedTask) {
        TasksModel.tasks.push(updatedTask);
    }

    updateTaskComplete = function updateTaskComplete (updatedTask) {
        for (index = 0; index < $scope.tasksModel.tasksModel.tasks.length; ++index) {
            if($scope.tasksModel.tasksModel.tasks[index].taskID == updatedTask.taskID){
                $scope.tasksModel.tasksModel.tasks[index] = updatedTask;
                break;
            }
        }
    }


    $scope.onEditTask = function onEditTask(task){
        $scope.openTaskWindow('Edit Task',task);
    }

    $scope.onNewTask = function onNewTask(){
        var newTask = {
            taskCategoryID : 0,
            taskID : 0
        };
        $scope.openTaskWindow('Create a New Task',newTask);
    }


    $scope.onScheduleTask = function onScheduleTask(task){
        console.log('in on schedule task');
        var found= false;
        for (index = 0; index < $scope.tasksModel.tasksModel.scheduledTasks.length; index++) {
            if($scope.tasksModel.tasksModel.scheduledTasks[index].taskID == task.taskID){
                found= true;
                break;
            }
        }
        console.log('found' + found);
        if(!found){
            $scope.tasksModel.tasksModel.scheduledTasks.push(task);
            $scope.tasksModel.tasksModel.addedTasks.push(task);
        }
    }

    var scheduleTask = function scheduleTask(task){
        TaskService.scheduleTask(task,onTaskScheduleSuccess,onTaskScheduleError);
    }

    var onTaskScheduleSuccess = function onTaskScheduleSuccess(data, status, headers, config){
        if(data.error == 1){
            alert("We could not schedule the task data");
            return;
        }
        // find and update the task in Tasks array for the Task DataGrid
        replaceTask($scope.tasksModel.tasksModel.tasks,data.resultObject[0]);
        // find the updated task in this list
        // it won't be the same item found above because the item is copied onto this DataGrid..
        // same data different object
        for (index = 0; index < $scope.tasksModel.tasksModel.scheduledTasks.length; ++index) {
            if($scope.tasksModel.tasksModel.scheduledTasks[index].taskID == data.resultObject[0].taskID){
                deleteTaskFromSchedule($scope.tasksModel.tasksModel.scheduledTasks[index]);
            }
        }
    }

    // a helper function used to replace a task object with the new task object
    // when the taskID is identical
    var replaceTask = function replaceTask(taskArray,task){
        for (index = 0; index < taskArray.length; ++index) {
            if(taskArray[index].taskID == task.taskID){
                taskArray[index] = task;
                break;
            }
        }
    }

    $scope.onTaskListSchedule = function onTaskListSchedule(){
        TaskService.scheduleTaskList($scope.tasksModel.tasksModel.scheduledTasks,
            $scope.scheduler.schedulerDate,
            onTaskListScheduleSuccess,onTaskListScheduleError);
    }

    var onTaskListScheduleError = function onTaskListScheduleError(data, status, headers, config){
        alert(data);
    }

    var onTaskListScheduleSuccess = function onTaskListScheduleSuccess(data, status,
                                                                       headers, config){
        if(data.error == 1){
            alert("We could not schedule the tasks");
            return;
        }
        // update dateScheduled date on tasks in taskModel that relate to these tasks
        for (masterTaskIndex = 0;
             masterTaskIndex < $scope.tasksModel.tasksModel.tasks.length;
             ++masterTaskIndex)
        {
            for (scheduledTaskIndex = 0;
                 scheduledTaskIndex < $scope.tasksModel.tasksModel.scheduledTasks.length;
                 scheduledTaskIndex++)
            {
                if($scope.tasksModel.tasksModel.tasks[masterTaskIndex].taskID ==
                    $scope.tasksModel.tasksModel.scheduledTasks[scheduledTaskIndex].taskID)
                {
                    $scope.tasksModel.tasksModel.tasks[masterTaskIndex].dateScheduled =
                        $filter('date')($scope.scheduler.schedulerDate, 'M/d/yyyy') ;
                }
            }
        }
       // remove all items from the addedTasks list
       $scope.tasksModel.tasksModel.addedTasks = [];
    }


    var onTaskScheduleError = function onTaskScheduleError(data, status, headers, config){
        alert(data);
    }

    // function to execute whenever the Checkbox in the DataGrid is executed
    $scope.onCompletedCheckBoxChange = function onCompletedCheckBoxChange (task){
        TaskService.completeTask(task,onTaskCompletedSuccess,onTaskCompletedError);
    }

    var onTaskCompletedError = function onTaskCompletedError(data, status, headers, config){
        alert(data);
    }

    var onTaskCompletedSuccess = function onTaskCompletedSuccess(data, status, headers, config){
        if(data.error == 1){
            alert("We could not load the task data");
            return;
        }
        replaceTask($scope.tasksModel.tasksModel.tasks,data.resultObject[0])
    }

	// an init method
    // it validates the user.  If user is invalid it redirects to login page.
    // if user is valid it loads the tasks
    $scope.init = function init(){
        if($scope.userModel.userModel.isUserInRole($scope.userModel.userModel.CREATOR_ROLE)){
            $scope.gridContainerStyle = 'horizontal-layout-100';
            $scope.taskGridOptions.columnDefs = $scope.creatorGridColumnDefs;
        } else {
            $scope.taskGridOptions.columnDefs = $scope.taskerGridColumnDefs;
        }
        if(!$scope.userModel.userModel.validateUser()){
            $location.path( "/login" );
        } else {
            $scope.loadTasks($scope.tasksModel.tasksModel.taskFilter, onTaskLoadSuccess, onTaskLoadError);
            $scope.loadTaskCategories();
        }

    }


    // call the init method
    $scope.init();

}
