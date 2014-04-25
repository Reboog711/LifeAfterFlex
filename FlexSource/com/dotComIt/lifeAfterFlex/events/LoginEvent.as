package com.dotComIt.lifeAfterFlex.events
{
	import flash.events.Event;
	
	public class LoginEvent extends Event
	{
		public function LoginEvent(type:String, bubbles:Boolean=false, cancelable:Boolean=false)
		{
			super(type, bubbles, cancelable);
		}
		
		public static const LOGIN_SUCCESS :String = "loginSuccess";
		public static const LOGIN_FAIL :String = "loginFail";
		
		public var userObject :Object;
		public var message :String;
		
		override public function clone():Event{
			var newEvent :LoginEvent = new LoginEvent(this.type, this.bubbles, this.cancelable);
			newEvent.userObject = this.userObject;
			newEvent.message = this.message;
			return newEvent;			
		}
	}
}