package com.dotComIt.lifeAfterFlex.services.mock
{
	import com.dotComIt.lifeAfterFlex.events.LoginEvent;
	import com.dotComIt.lifeAfterFlex.services.IAuthenticationService;
	
	import flash.events.EventDispatcher;
	import flash.events.IEventDispatcher;
	
	[Event(name="loginSuccess", type="com.dotComIt.lifeAfterFlex.events.LoginEvent")]
	[Event(name="loginFail", type="com.dotComIt.lifeAfterFlex.events.LoginEvent")]

	public class AuthenticationService extends EventDispatcher implements IAuthenticationService
	{
		public function AuthenticationService(target:IEventDispatcher=null)
		{
			super(target);
		}
		
		public function authenticate(username:String, password:String):void
		{
			var userObject :Object ;
			var resultEvent :LoginEvent ;
			if((username == 'me') && (password == 'me')){
				userObject = new Object();
				userObject['role'] = 1;
				userObject['username'] = "me";
				userObject['ID'] = 1;
				resultEvent = new LoginEvent(LoginEvent.LOGIN_SUCCESS);
				resultEvent.userObject = userObject;
			} else if((username == 'wife') && (password == 'wife')){
				userObject = new Object();
				userObject['role'] = 2;
				userObject['username'] = "wife";
				userObject['ID'] = 2;
				resultEvent = new LoginEvent(LoginEvent.LOGIN_SUCCESS);
				resultEvent.userObject = userObject;
			} else {
				resultEvent = new LoginEvent(LoginEvent.LOGIN_FAIL);
				resultEvent.message = "We could not log you in";
			}
			this.dispatchEvent(resultEvent);

		}
	}
}