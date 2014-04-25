function LoginCtrl($scope, $location, AuthenticationService, UserModel) {
    $scope.title = 'Login View';  
	$scope.userModel = UserModel;

	console.log($scope.userModel);

    $scope.usernameError = '';
    $scope.passwordError = '';


    $scope.onReset = function onReset(){
	    console.log('onReset');
	}   
	$scope.onLogin= function onLogin(){
	    console.log('onLogin');
        var errorFound = false;
        if($scope.userModel.user.username == ''){
            $scope.usernameError = 'You Must Enter a Username'
            errorFound = true;
        } else {
            $scope.usernameError = '';
        }

        if($scope.userModel.user.password == ''){
            $scope.passwordError = 'You Must Enter a Password';
            errorFound = true;
        } else {
            $scope.passwordError = '';
        }
        if(errorFound == true){
            return;
        }

        AuthenticationService.authenticate($scope.userModel.user.username,$scope.userModel.user.password,onLoginSuccess,onLoginError);

    }

    var onLoginError = function onLoginError(data, status, headers, config){
        console.log('failure');
        console.log(data);
        alert(data);
    }

    var onLoginSuccess = function onLoginSuccess(data, status, headers, config){
        if(data.error == 1){
            alert("We could not log you in");
            return;
        }
        console.log($scope.userModel.user);
        $scope.userModel.user = data.resultObject;
        console.log($scope.userModel.user);
        $location.path( "/tasks" );
    }



    $scope.onReset = function onReset(){
	   $scope.userModel.user.username = '';
	   $scope.userModel.user.password = '';
	}


    // helper functions for development to make logging in easy
    $scope.onLoginAsMe = function onLoginAsMe(){
        console.log('login as me');
        $scope.userModel.user.username = 'me';
        $scope.userModel.user.password = 'me';
        $scope.onLogin();
    }

    $scope.onLoginAsWife = function onLoginAsWife(){
        console.log('login as wife');
        $scope.userModel.user.username = 'wife';
        $scope.userModel.user.password = 'wife';
        $scope.onLogin();
    }


}

