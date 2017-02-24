<?php

$arquivo_previsoes = file_get_contents('../weather.json');

$previsoes = json_decode($arquivo_previsoes,true);

$id_localidade = $_GET['id_localidade'];

foreach ($previsoes as $previsao) {
	if (stristr($previsao['locale']['id'], $id_localidade)){
		$resposta = $previsao;
	}	
}

echo json_encode($resposta);

?>