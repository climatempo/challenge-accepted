<?php
  $locale = isset($_GET['locale'])? trim($_GET['locale']) : "";
  $boo_location = isset($_GET['boo_location'])? trim($_GET['boo_location']) : "";
  if ($locale != "") {
    include_once 'Climas.php';
    $climas = new Climas();
    echo $climas->getWeatherPage($locale);
  }else if ($boo_location == "false") {
    echo "<p>Resultado Não Encontrado</p>";
  }
 ?>
