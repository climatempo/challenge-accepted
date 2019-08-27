<?php
  header('Content-type:application/json;charset=utf-8'); // Declarando header
  	// Caso venha POST
  if(isset($_POST) && $_POST) { 
  	// Caso venha o input location  
  	if ($_POST['location']) {

	// declarando variaveis 
    $location = $_POST['location'];

	 // Carregando weather
    $urlWeather = '../base/weather.json'; // path to your JSON file
	$dataWeather = file_get_contents($urlWeather); // put the contents of the file into a variable
	$weather = json_decode($dataWeather); // decode the JSON feed 

	// prepare once
	$indexed = array();
	foreach ($weather as $object) {
	    $indexed[$object->locale->name] = $object;
	}

	$response = array();
	// lookup often
	if (isset($indexed[$location])) {

	   $response = $indexed[$location];

	} else {
		$response = array("status" => false, "msg" => 'Não foi possivel encontrar esta cidade na nossa base de dados.', "city" => $location);
	}

	//	print_r($response);
	$output = json_encode($response, JSON_UNESCAPED_UNICODE);
	print_r($output);

 }


 } else { // else $_POST
  echo "Não veio POST";
 }

