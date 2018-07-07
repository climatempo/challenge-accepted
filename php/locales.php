<?php
$v = $_POST['valor'];
$v = strtolower($v);
// Atribui o conteúdo do arquivo para variável $arquivo
$arquivo = file_get_contents('../base/locales.json');

// Decodifica o formato JSON e retorna um Objeto
$json = json_decode($arquivo);

// Procura se existe a cidade procurada
$r = false;
foreach ($json as $key) {
    if ($key->name == $v) {
        $r = true;
        break;
    } else {
        $r = false;
    }
}
echo $r
?>