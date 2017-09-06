<?php
namespace slim;

function htmlspecialchars($string, $lala = null, $etc = null, $etc = null, $etc = null){
    return \htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
}

function ifnull($valor, $alternativa, $exibir = null){
    //usabilidade: isnull(valor,senao,entao)
    if (is_null($exibir)) {$exibir = $valor;}
    if (empty($valor) || $valor == '0' || is_null($valor)) {
        return $alternativa;
    }else{
        return $exibir;
    }
}
function vazio(&$var){
    //pega a variavel por parametro e verifica corretamente se está vazia, util para banco. motivo: empty() é muito falseável
    if (!isset($var)) {
        return true;
    } elseif ($var === '00/00/0000') {
        return true;
    } elseif ($var === 0) {
        return false;
    } elseif ($var === '0') {
        return false;
    } elseif ($var === false) {
        return false;
    } elseif (trim($var) === '') {
        return true;
    } elseif ($var === null) {
        return true;
    } elseif (empty($var)) {
        return true;
    }else{
        return false;
    }
}
function vazio_n($var){
    //pega a variavel por parametro e verifica corretamente se está vazia, util para banco. motivo: empty() é muito falseável
    if (!isset($var)) {
        return true;
    } elseif ($var === '00/00/0000') {
        return true;
    } elseif ($var === 0) {
        return false;
    } elseif ($var === '0') {
        return false;
    } elseif ($var === false) {
        return false;
    } elseif (trim($var) === '') {
        return true;
    } elseif ($var === null) {
        return true;
    } elseif (empty($var)) {
        return true;
    }else{
        return false;
    }
}
function time_elapsed_string($datetime, $full = false){
    $now = new \DateTime;
    $ago = new \DateTime($datetime);
    if ($ago>$now){
    	$prefixo = "daqui ";
    }else{
    	$prefixo = '';
    }
    $diff = (array) $now->diff( $ago );

    $diff['w'] = floor($diff['d'] / 7);

    $diff['d'] -= $diff['w'] * 7;

    $string = array(
        'y' => 'ano',
        'm' => 'mês',
        'w' => 'semana',
        'd' => 'dia',
        'h' => 'hora',
        'i' => 'minuto',
        's' => 'segundo',
    );
    $stringplural = array(
        'y' => 'anos',
        'm' => 'meses',
        'w' => 'semanas',
        'd' => 'dias',
        'h' => 'horas',
        'i' => 'minutos',
        's' => 'segundos',
    );
    foreach ($string as $k => &$v) {
        if ($diff[$k]){
        	$z = $v;
        	if ($diff[$k]>1){
        		$z = $stringplural[$k];
        	}
            $v = $diff[$k] . ' ' . $z;
        } else {
            unset($string[$k]);
        }
    }

    if (!$full) $string = array_slice($string, 0, 1);
    return $prefixo.($string ? implode(', ', $string) . (($prefixo=='')?' atrás':'') : 'agora');
}
function sevazio(&$se, $senao = null, $entao = null){
    if (!vazio($se)) {
        if (vazio($entao)) {
            return $se;
        }else{
            return $entao;
        }
    }else{
        return $senao;
    }
}

function sevazio2(){
	$args = func_get_args();

	foreach($args as $item){
		if (!vazio_n($item)){
			return $item;
		}
	}

    return $args[count($args)-1];
}

function print_b(&$var, $name = ""){
    echo '<pre>';
    echo ifnull($name, '', $name . '<br><br>');
    print_r($var);
    echo '</pre>';
}

function meses($mes = "", $abv=0){
	if ($mes==='01') $mes = 1;
	$mes = (int)$mes;
	$meses[1]  = 'Janeiro';
	$meses[2]  = 'Fevereiro';
	$meses[3]  = 'Março';
	$meses[4]  = 'Abril';
	$meses[5]  = 'Maio';
	$meses[6]  = 'Junho';
	$meses[7]  = 'Julho';
	$meses[8]  = 'Agosto';
	$meses[9]  = 'Setembro';
	$meses[10] = 'Outubro';
	$meses[11] = 'Novembro';
	$meses[12] = 'Dezembro';
	if ($mes > 0){
		if($abv==0){
			return $meses[$mes];
		}else{
			return substr($meses[$mes],0,3);
		}
	}else{
		return $meses;
	}
}

function formataReais($valor, $paraBanco = 0){
    $paraBanco = intval($paraBanco);
    if (empty($valor) && $valor !== '0' && $valor != 0) {return '';}
    if ($paraBanco > 0){
        $valor = str_replace(".", "", $valor);
        $valor = str_replace(",", ".", $valor);
        return floatval($valor);
    }else{
        return number_format($valor, 2, ",", ".");
    }
}

function trailing($numero, $chars = 2){
    return sprintf("%0" . $chars . "d", $numero);
}

function primeironome($nome){
    if (!empty($nome) && is_string($nome)){
        $nome = explode(" ", $nome);
        return $nome[0];
    }else{
        return '';
    }
}

