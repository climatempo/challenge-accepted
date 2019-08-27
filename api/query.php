<?php
  header('Content-type:application/json;charset=utf-8'); // Declarando header
  	// Caso venha POST
  if(isset($_POST) && $_POST) { 
  	// Caso venha o input location  
  	if ($_POST['location']) {

	// declarando variaveis 
    $location = $_POST['location'];

    // Carregando locales
    $urlLocales = '../base/locales.json'; // path to your JSON file
	$dataLocales = file_get_contents($urlLocales); // put the contents of the file into a variable
	$locales = json_decode($dataLocales); // decode the JSON feed

	// prepare once
	$indexed = array();
	foreach ($locales as $object) {
	    $indexed[$object->name] = $object;
	}

	$response = array();
	// lookup often
	if (isset($indexed[$location])) {
	   $response = array("status" => true, "msg" => 'Cidade encontrada com sucesso', "city" => $location);
	} else {
		$response = array("status" => false, "msg" => 'Não foi possivel encontrar esta cidade na nossa base de dados.', "city" => $location);
	}

	// Imprimindo result 
	$output = json_encode($response, JSON_UNESCAPED_UNICODE);
	print_r($output);

 }


 } else { // else $_POST
  echo "Não veio POST";
 }

