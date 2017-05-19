<?php

$string = file_get_contents("base/weather.json");
$json_a = json_decode($string, true);
$hint = "";

$q = $_REQUEST["q"];
if ($q !== "") {
  $q = strtolower($q);
  $len=strlen($q);
  foreach ($json_a as $local_name => $local_a) {
    $previsoes = $local_a["weather"];
    if (mb_stristr($q, substr($local_a['locale']['name'], 0, $len))) {
      if ($hint === "") {
        echo '
        <p margin-left= "80px"><h1> Previsão para '.$local_a['locale']['name']. '-'.$local_a['locale']['state'].' </h1></p>';
        foreach ($previsoes as $previsao_name => $previsao_a) {
          $source = $previsao_a['date'];
          $date = new DateTime($source);
          $hint='
          <br>
          <br>
          <div class="card" style="width: 20re;">
          <div class="card-block">
          <h6 class="card-title">'.$date->format('d-m-Y').'</h6>
          </div>
          <div class="card-block">
          <p class="card-text">'.$previsao_a['text'].'</p>
          </div>
          <div class="card-block"><h4><font color="#607EBC"><img src="images/icons/upload.png" style="vertical-align:middle"/>&nbsp&nbsp'.$previsao_a['temperature']['min'].'ºC&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</font><font color="#F62F36">
          <img src="images/icons/download.png" style="vertical-align:middle"/>&nbsp&nbsp'.$previsao_a['temperature']['max'].'ºC</font></h4></div>
          <div class="card-block"><h4><img src="images/icons/raindrop-close-up.png" style="vertical-align:middle"/>&nbsp&nbsp'.$previsao_a['rain']['precipitation'].'mm&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          <img src="images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" style="vertical-align:middle"/>&nbsp&nbsp'.$previsao_a['rain']['probability'].'%</h4></div>
          </div>
          </div>
          ';
          echo $hint;
        }
      }
    }
  }

}
echo $hint === "" ? "Não encontramos essa localidade na nossa base de dados!" : $hint;

?>
