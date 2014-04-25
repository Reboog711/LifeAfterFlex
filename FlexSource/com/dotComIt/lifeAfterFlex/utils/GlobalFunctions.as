package com.dotComIt.lifeAfterFlex.utils
{
	import spark.formatters.DateTimeFormatter;

	public class GlobalFunctions
	{
		public function GlobalFunctions()
		{
		}

		public static function formatDate(date:Date):String{
			var df :DateTimeFormatter = new DateTimeFormatter();
			df.dateTimePattern = "MM/dd/yyyy";
			return df.format(date);
		}
	
	}
}