TasksModel = function TasksModel() {
    // an array for the tasks loaded from the server
    // starts out empty
    this.tasks = [];

   // this is the default task filter object
   // Values copied from the Flex app
    this.taskFilter = {
        completed : 0,
        startDate : "3/1/2013",
		// not in book but this will force the category drop down to select something by default
        taskCategoryID : 0
    }

    this.taskCompletedOptions = [
        {"id":-1,"label":"All"},
        {"id":0,"label":"Open Tasks"},
        {"id":1,"label":"Completed Tasks"}
    ];

    this.taskCategories = [];

    this.scheduledTasks = [];
    // used to keep track of tasks manually added
    // changing the date will reload data from the database and wipe out all tasks displayed
    // keeping track of the manual tasks we can re-add them to the data that comes back from the dB
    this.addedTasks = [];

}
