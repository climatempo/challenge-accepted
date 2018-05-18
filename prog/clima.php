<?php
  /* Armazena a variavel de localização requisitada */
  $locale = isset($_GET['locale'])? trim($_GET['locale']) : "";

  include_once 'Climas.php';
  $climas = new Climas();

  /* Verifica se a localização existe */
  if ($climas->locationExists($locale)){
    echo $climas->getWeatherPage($locale);
  }else{
    echo $climas->getNoLocationPage();
  }
 ?>
