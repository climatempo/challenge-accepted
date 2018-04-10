<?php 
 
// Recebe os parâmetros
$acao = (isset($_GET['acao'])) ? $_GET['acao'] : '';
$parametro = (isset($_GET['parametro'])) ? $_GET['parametro'] : '';

// Remove caracteres especiais
function tirarAcentos($string){
    return preg_replace(array("/(á|à|ã|â|ä)/","/(Á|À|Ã|Â|Ä)/","/(é|è|ê|ë)/","/(É|È|Ê|Ë)/","/(í|ì|î|ï)/","/(Í|Ì|Î|Ï)/","/(ó|ò|õ|ô|ö)/","/(Ó|Ò|Õ|Ô|Ö)/","/(ú|ù|û|ü)/","/(Ú|Ù|Û|Ü)/","/(ñ)/","/(Ñ)/"),explode(" ","a A e E i I o O u U n N"),$string);
}

// Verifica se foi solicitado uma consulta para o autocomplete
if($acao == 'autocomplete'):
	
	$json_file = file_get_contents("base/locales.json");   
	$json_str = json_decode($json_file);
	$cidades = array();

	foreach($json_str as $item){
		$valor = tirarAcentos($parametro);
		$valor = strtoupper($valor);
		$cidade = tirarAcentos($item->name);
		$cidade = strtoupper($cidade);
		$id = $item->id;
		if(strpos($cidade,$valor) !== false){
			$cidades[] = array('name'=>$item->name, 'id'=>$id);
		}
	}
	$json = json_encode($cidades);
	echo $json;

endif;