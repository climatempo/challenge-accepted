<?php
session_start();
include_once "card.php";
$local = $_SESSION['cidade'];
$local = strtolower($local);
$list_card = [];

// Atribui o conteúdo do arquivo para variável $arquivo
$arquivo = file_get_contents('../base/weather.json');

// Decodifica o formato JSON e retorna um Objeto
$json = json_decode($arquivo);
$i = 0;

// Procura o indice do elemento json
foreach ($json as $locale) {
    if ($locale->locale->name == $local) {
        break;
    }
    $i++;
}

// Monta os cards de provisão do tempo
foreach ($json[$i]->weather as $resgistro) {
    $card = new Card($resgistro->date, $resgistro->text, $resgistro->temperature->min, $resgistro->temperature->max, $resgistro->rain->probability, $resgistro->rain->precipitation);
    $card->montar_card();
    $list_card = $card;
}
?>
