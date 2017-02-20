<?php

class APIClimatempo {

	/* 
	 * FUNCTION RESPONSÁVEL POR BUSCAR OS VALORES DE LOCALIDADE NA API
	 * API_LOCALES DESENVOLVIDA EM NODEJS E TRAZER SEU RETORNO EM JSON.
	 *
	 * A FUNCTION PODE RETORNAR TODAS AS LOCALES OU APENAS UMA. PARA
	 * CONSULTAR UMA UNICA LOCALE, PASE COMO SEGUNDO PARAMETRO SEU ID (EX: 3735)
	 */
	public function getContentsAPIClimatempo($url,$id_locale=false){
		
		$param_id_locale = "";

		if($id_locale != false){
			$param_id_locale = '/'.urlencode($id_locale);
		}

		
	    //armezena url onde buscaremos o valores de locale em json
	    $apiurl = $url;

	    //echo $apiurl.$param_id_locale;

	   //Retorna o conteudo em formato de string/S%C3%A3o%5C%2520Paulo/S%C3%A3o%5C%2520Paulo/S%C3%A3o%5C%2520Paulo
	    $api_contents = file_get_contents($apiurl.$param_id_locale,0,null,null);

	    //Decodificando a string, criando o json
	    $api_contents_json = json_decode($api_contents);

	    return $api_contents_json;

	}

}

?>














