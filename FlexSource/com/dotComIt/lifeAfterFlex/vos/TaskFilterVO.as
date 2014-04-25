package com.dotComIt.lifeAfterFlex.vos
{
	[Bindable]
	[RemoteClass('com.dotComIt.lifeAfterFlex.vos.TaskFilterVO')]
	public class TaskFilterVO
	{
		public function TaskFilterVO(){
		}
		public var taskCategoryID :Number;
		// expected to be either 1 or 0; or undefined
		public var completed :Number
		public var endDate :Date;
		public var scheduledEndDate :Date;
		public var scheduledEqualDate :Date;
		public var scheduledStartDate :Date;
		public var startDate :Date;
		public var taskID :Number;
	}
}