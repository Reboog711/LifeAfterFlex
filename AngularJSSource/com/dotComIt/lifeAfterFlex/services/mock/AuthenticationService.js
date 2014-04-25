/**
 * Created by jhouser on 4/11/14.
 */

authenticationService = function authenticationService(){


	this.authenticate = function authenticate(username, password, resultFunction, failureFunction){
		var resultObject;
		if((username == 'me') && (password == 'me')){
		    resultObject = {"resultObject":{"role":1,"username":"me","userID":1},"error":0};
		} else if((username == 'wife') && (password == 'wife')){
		    resultObject = {"resultObject":{"role":2,"username":"wife","userID":2},"error":0};
		} else {
		    resultObject = {"error":1};
		}
		resultFunction(resultObject);
	}



}


lifeAfterFlex.factory('AuthenticationService', function(){
    return new authenticationService();
    }
);
