/**
 * Created by jhouser on 4/12/14.
 */

var TaskCUCtrl = function TaskCUCtrl($scope, $modalInstance, title, taskVO,TasksModel, UserModel, TaskService) {
    $scope.title = title;
    $scope.tasksModel = TasksModel;
    $scope.UserModel = UserModel;
    $scope.taskVO = taskVO;

    $scope.onSave = function onSave () {
        TaskService.updateTask($scope.taskVO, $scope.UserModel.user,onTaskUpdateSuccess,onTaskUpdateError);
    }

    var onTaskUpdateError = function onTaskUpdateError(data, status, headers, config){
        alert(data);
    }
    var onTaskUpdateSuccess = function onTaskUpdateSuccess(data, status, headers, config){
        if(data.error == 1){
            alert("We could not create the task data");
            return;
        }
        // what do we do on succesful task update?
        // different if new or update
        // probably not make the decision here; but rather in the MainScreenCtrl.js
        $modalInstance.close(data.resultObject[0]);
    }

    $scope.onClose = function onClose() {
        $modalInstance.dismiss(); // 'cancel'
    };

}


