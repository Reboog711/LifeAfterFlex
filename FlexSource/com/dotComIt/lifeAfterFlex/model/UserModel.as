package com.dotComIt.lifeAfterFlex.model
{
	public class UserModel
	{
		public function UserModel()
		{
		}
		public static var user :Object;

		public static const TASKER_ROLE :int = 1;
		public static const CREATOR_ROLE :int = 2;

		public static function isUserInRole(role:int):Boolean{
			var localUser :Object = UserModel.user;
			if(localUser.role == role){
				return true;
			}
			return false;
		}

	}
}