<?php

$arquivo_localidades = file_get_contents('../locales.json');

$localidades = json_decode($arquivo_localidades,true);

$nome = $_GET['name'];

foreach ($localidades as $localidade) {
	if (stristr($localidade['name'], $nome)){
		$resposta[]=$localidade;
	}	
}

echo json_encode($resposta);

?>
