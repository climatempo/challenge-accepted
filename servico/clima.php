<?php

//Pega o POST
$dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);

//Consulta JSON
if(($weather = json_decode(file_get_contents("../base/weather.json"), true)) && isset($dados['busca'])):

	//Seta variável com as previsões
	$previsoes = array();
	//Passa por todo o array até achar a localidade informada
	foreach ($weather AS $cidade) {
		if($cidade['locale']['name'] == $dados['busca']):

			$previsoes['nome'] = $cidade['locale']['name'];

			//var_dump($cidade['weather']);

			foreach ($cidade['weather'] AS $key => $previsao):

				$previsoes['previsao'][$key] = $previsao;
				$previsoes['previsao'][$key]['date'] = date('d/m/Y', strtotime($previsoes['previsao'][$key]['date']));
				
			endforeach;

		endif;
		echo json_encode($previsoes, true);
		exit;
	}

else:
	echo 0;
endif;

?>