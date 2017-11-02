<?php
	function __autoload($classname)
	{
		$way = "class/".$classname.".class.php";
		if(file_exists($way))
		{
			require_once $way;
		}
	}
?>