UserModel = function UserModel() {
	this.user = {
		userID : 0,
		username : '',
		password : '',
		role : 0
	}

    this.isUserInRole = function isUserInRole(roleToCompare){
        if(this.user.role == roleToCompare){
            return true;
        }
        return false;
    }

    // function to validate that the user has in fact logged in
    // do so by making sure that the userID is something other than 0
    this.validateUser = function validateUser(){
        if(this.user.userID == 0){
            return false;
        }
        return true;
    }


    // Role constants used by the app
    this.TASKER_ROLE = 1;
    this.CREATOR_ROLE = 2;

}

