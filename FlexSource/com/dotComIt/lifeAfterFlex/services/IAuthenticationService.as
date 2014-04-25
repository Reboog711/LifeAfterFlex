package com.dotComIt.lifeAfterFlex.services
{
	import flash.events.IEventDispatcher;
	
	public interface IAuthenticationService extends IEventDispatcher
	{
		function authenticate(username:String, password:String):void;
	}
}
