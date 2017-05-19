<?php

class Util
{
	
	function formatData($data,$format)
	{
		$date = new DateTime($data);
		$dataFormatada = $date->format($format);

		return $dataFormatada; 

	}
}

?>