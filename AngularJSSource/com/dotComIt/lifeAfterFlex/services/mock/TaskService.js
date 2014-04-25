/**
 * Created by jhouser on 4/11/14.
 * Mock Services; with no backend integration
 */

taskService = function taskService(){

    this.taskArray = [
        {"taskCategoryID":2,"taskCategory":"Personal","description":"Get Milk","dateScheduled":"March, 29 2013 00:00:00","dateCompleted":"","taskID":1,"dateCreated":"March, 27 2013 11:42:58","completed":0,"userID":1},
        {"taskCategoryID":1,"taskCategory":"Business","description":"Finish Chapter 2","dateScheduled":"March, 29 2013 00:00:00","dateCompleted":"","taskID":2,"dateCreated":"March, 28 2013 11:44:58","completed":0,"userID":1},
        {"taskCategoryID":1,"taskCategory":"Business","description":"Plan Chapter 5","dateScheduled":"March, 20 2013 00:00:00","dateCompleted":"","taskID":5,"dateCreated":"March, 28 2013 11:54:40","completed":0,"userID":1},
        {"taskCategoryID":1,"taskCategory":"Business","description":"Write Code for Chapter 3","dateScheduled":"March, 29 2013 00:00:00","dateCompleted":"","taskID":3,"dateCreated":"March, 29 2013 11:45:16","completed":0,"userID":1},
        {"taskCategoryID":1,"taskCategory":"Business","description":"Write Chapter 4","dateScheduled":"March, 20 2013 00:00:00","dateCompleted":"","taskID":4,"dateCreated":"March, 30 2013 11:54:26","completed":1,"userID":1},
        {"taskCategoryID":1,"taskCategory":"Business","description":"Learn JQuery","dateScheduled":"","dateCompleted":"","taskID":6,"dateCreated":"March, 31 2013 16:00:23","completed":0,"userID":1},
        {"taskCategoryID":1,"taskCategory":"Business","description":"created by Test Harness","dateScheduled":"November, 24 2013 00:00:00","dateCompleted":"","taskID":7,"dateCreated":"May, 09 2013 17:18:00","completed":0,"userID":1},
        {"taskCategoryID":2,"taskCategory":"Personal","description":"This is a test task","dateScheduled":"February, 11 2014 00:00:00","dateCompleted":"","taskID":8,"dateCreated":"May, 09 2013 18:26:10","completed":0,"userID":1},
        {"taskCategoryID":2,"taskCategory":"Personal","description":"This is a test task","dateScheduled":"November, 24 2013 00:00:00","dateCompleted":"","taskID":9,"dateCreated":"May, 09 2013 18:26:28","completed":0,"userID":1},
        {"taskCategoryID":2,"taskCategory":"Personal","description":"This is a test task","dateScheduled":"November, 21 2013 00:00:00","dateCompleted":"","taskID":10,"dateCreated":"May, 09 2013 18:27:06","completed":0,"userID":1},
        {"taskCategoryID":2,"taskCategory":"Personal","description":"Test Task","dateScheduled":"November, 24 2013 00:00:00","dateCompleted":"","taskID":11,"dateCreated":"May, 09 2013 18:33:11","completed":1,"userID":1},
        {"taskCategoryID":2,"taskCategory":"Personal","description":"Task Task 2","dateScheduled":"November, 22 2013 00:00:00","dateCompleted":"","taskID":12,"dateCreated":"May, 09 2013 18:35:07","completed":0,"userID":1},
        {"taskCategoryID":1,"taskCategory":"Business","description":"created by Test Harness","dateScheduled":"November, 22 2013 00:00:00","dateCompleted":"","taskID":13,"dateCreated":"May, 14 2013 16:49:06","completed":0,"userID":1},
        {"taskCategoryID":2,"taskCategory":"Personal","description":"New Task for Jeff","dateScheduled":"November, 22 2013 00:00:00","dateCompleted":"","taskID":14,"dateCreated":"May, 27 2013 12:23:42","completed":0,"userID":2},
        {"taskCategoryID":2,"taskCategory":"Personal","description":"New Task for Jeff 2","dateScheduled":"November, 22 2013 00:00:00","dateCompleted":"","taskID":15,"dateCreated":"May, 27 2013 12:23:42","completed":0,"userID":2},
        {"taskCategoryID":1,"taskCategory":"Business","description":"Some Text","dateScheduled":"","dateCompleted":"","taskID":16,"dateCreated":"November, 13 2013 16:42:51","completed":0,"userID":1},
        {"taskCategoryID":"","taskCategory":"","description":"testoring","dateScheduled":"","dateCompleted":"","taskID":17,"dateCreated":"November, 16 2013 12:56:10","completed":1,"userID":1},
        {"taskCategoryID":1,"taskCategory":"Business","description":"Testoring","dateScheduled":"","dateCompleted":"","taskID":18,"dateCreated":"November, 16 2013 13:04:38","completed":0,"userID":1},
        {"taskCategoryID":2,"taskCategory":"Personal","description":"Testoring 3","dateScheduled":"","dateCompleted":"","taskID":19,"dateCreated":"November, 16 2013 13:06:11","completed":0,"userID":1},
        {"taskCategoryID":1,"taskCategory":"Business","description":"Testoring 2","dateScheduled":"","dateCompleted":"","taskID":20,"dateCreated":"November, 16 2013 13:06:49","completed":0,"userID":1},
        {"taskCategoryID":2,"taskCategory":"Personal","description":"Testoring 4","dateScheduled":"","dateCompleted":"","taskID":21,"dateCreated":"November, 16 2013 13:07:01","completed":0,"userID":1},
        {"taskCategoryID":1,"taskCategory":"Business","description":"created by Test Harness","dateScheduled":"","dateCompleted":"","taskID":22,"dateCreated":"December, 05 2013 11:50:51","completed":0,"userID":1},
        {"taskCategoryID":1,"taskCategory":"Business","description":"created by Test Harness","dateScheduled":"","dateCompleted":"","taskID":23,"dateCreated":"December, 05 2013 11:51:05","completed":0,"userID":1},
        {"taskCategoryID":1,"taskCategory":"Business","description":"created by Test Harness","dateScheduled":"","dateCompleted":"","taskID":24,"dateCreated":"December, 05 2013 11:54:26","completed":0,"userID":1},
        {"taskCategoryID":2,"taskCategory":"Personal","description":"This is a test task","dateScheduled":"","dateCompleted":"","taskID":25,"dateCreated":"December, 05 2013 11:54:37","completed":0,"userID":1},
        {"taskCategoryID":1,"taskCategory":"Business","description":"created by Test Harness","dateScheduled":"","dateCompleted":"","taskID":26,"dateCreated":"December, 05 2013 16:57:32","completed":1,"userID":1},
        {"taskCategoryID":1,"taskCategory":"Business","description":"created by Test Harness","dateScheduled":"","dateCompleted":"","taskID":27,"dateCreated":"December, 05 2013 16:58:23","completed":0,"userID":1},
        {"taskCategoryID":2,"taskCategory":"Personal","description":"This is a test task","dateScheduled":"","dateCompleted":"","taskID":28,"dateCreated":"December, 05 2013 16:59:23","completed":0,"userID":1},
        {"taskCategoryID":1,"taskCategory":"Business","description":"New Task 2","dateScheduled":"","dateCompleted":"","taskID":29,"dateCreated":"December, 07 2013 11:03:19","completed":1,"userID":0},
        {"taskCategoryID":"","taskCategory":"","description":"test","dateScheduled":"","dateCompleted":"","taskID":30,"dateCreated":"December, 12 2013 12:19:24","completed":1,"userID":1},
        {"taskCategoryID":"","taskCategory":"","description":"New Task 2 2014 Edit","dateScheduled":"","dateCompleted":"","taskID":31,"dateCreated":"February, 11 2014 14:49:39","completed":0,"userID":1}
    ]

    this.loadTasks = function loadTasks(taskFilter, resultFunction, failureFunction){

        // create new list using the taskFilter Object
        var filteredTaskArray = this.taskArray.filter(
            // look for a reason not to return the item; default is true
            function(element, index, array){
                if(typeof taskFilter.completed != 'undefined'){
                    if(taskFilter.completed != element.completed){
                        return false;
                    }
                }

                if(typeof taskFilter.taskCategoryID != 'undefined'){
                    if((taskFilter.taskCategoryID != 0) &&
                        (taskFilter.taskCategoryID != element.taskCategoryID)){
                        return false;
                    }
                }

                var createdDate = new Date(element.dateCreated);
                if(typeof taskFilter.startDate != 'undefined'){
                    var startDate = new Date(taskFilter.startDate);
                    if(startDate > createdDate){
                        return false;
                    }
                }
                if(typeof taskFilter.endDate != 'undefined'){
                    var endDate = new Date(taskFilter.endDate);
                    if(endDate < createdDate){
                        return false;
                    }
                }

                var dateScheduled = new Date(element.dateScheduled);
                console.log('date scheduled ' + dateScheduled);
                if(typeof taskFilter.scheduledStartDate != 'undefined'){
                    date1 = new Date(taskFilter.scheduledStartDate);
                    if(date1 > dateScheduled){
                        return false;
                    }
                    if(element.dateScheduled == ''){
                        return false;
                    }
                }
                if(typeof taskFilter.scheduledEndDate != 'undefined'){
                    date1 = new Date(taskFilter.scheduledEndDate);
                    if(date1 < dateScheduled){
                        return false;
                    }
                    if(element.dateScheduled == ''){
                        return false;
                    }
                }
                if(typeof taskFilter.scheduledEqualDate != 'undefined'){
                    console.log('testing schedule equal date');
                    console.log(taskFilter.scheduledEqualDate);
                    date1 = new Date(taskFilter.scheduledEqualDate);
                    if(
                        (date1.getDate() != dateScheduled.getDate()) ||
                            (date1.getMonth() != dateScheduled.getMonth()) ||
                            (date1.getYear() != dateScheduled.getYear())
                        ){
                        return false;
                    }
                    if(element.dateScheduled == ''){
                        return false;
                    }
                }


                return true;
            }
        );
        resultObject = {
            resultObject:filteredTaskArray,
            error:0.0
        },
        resultFunction(resultObject);


    }

    this.loadTaskCategories = function loadTaskCategories( resultFunction, failureFunction){
        var resultObject = {"resultObject":[
            {"taskCategoryID":0.0,"taskCategory":"All Categories"},
            {"taskCategoryID":1,"taskCategory":"Business"},
            {"taskCategoryID":2,"taskCategory":"Personal"}],
            "error":false}
        resultFunction(resultObject);
    };

    this.updateTask = function updateTask(task, user, resultFunction, failureFunction){
        if(task.taskID == 0){
            // increment taskID from last one in list;
            // and add the neW taSK TO THE TASK aRRAY
            task.taskID = this.taskArray[this.taskArray.length-1].taskID + 1;
            this.taskArray.push(task);
        }
        if(task.taskCategoryID == 1){
            task.taskCategory = 'Business';
        } else if(task.taskCategoryID == 2){
            task.taskCategory = 'Personal';
        } else {
            task.taskCategory = '';
        }
        resultObject = {
            resultObject:[
                task
            ],
            error:0
        };
        resultFunction(resultObject);
    }

    this.scheduleTask = function scheduleTask(task, resultFunction, failureFunction){
        resultObject = {
            resultObject:[
                task
            ],
            error:0.0
        };
        resultFunction(resultObject);
    };

    this.scheduleTaskList = function scheduleTaskList(taskArray, schedulerDate,
                                                      resultFunction, failureFunction){
        resultObject = {
            error:0.0
        };
        resultFunction(resultObject);
    };

    this.completeTask = function completeTask(task, resultFunction, failureFunction){
        task.completed = !task.completed;
        resultObject = {
            resultObject:[
                task
            ],
            error:0.0
        }
        resultFunction(resultObject);
    };

};


lifeAfterFlex.factory('TaskService', function(){
        return new taskService();
    }
);

