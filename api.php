<?php

require_once 'vendor/autoload.php';

$app = new \Slim\Slim();

$app->get("/previsao/:busca", function($busca){

	$weather = json_decode(file_get_contents("base/weather.json"), true);

	//Seta variável com as previsões
	$previsoes = array();
		
	//Passa por todo o array até achar a localidade informada
	foreach ($weather AS $cidade) {

		if($cidade['locale']['name'] == $busca):

			$previsoes['nome'] = $cidade['locale']['name'];

			foreach ($cidade['weather'] AS $key => $previsao):

				$previsoes['previsao'][$key] = $previsao;
				$previsoes['previsao'][$key]['date'] = date('d/m/Y', strtotime($previsoes['previsao'][$key]['date']));		
			endforeach;
		endif;
	}

	if(isset($previsoes))
		echo json_encode($previsoes, true);
});

$app->run();

