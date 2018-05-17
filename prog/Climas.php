<?php

  class Climas{

    private $weatherUrl = "../base/weather.json";

    public function __construct(){
    $weatherFile = fopen($this->weatherUrl, "r") or die("Unable to open file!");
    $weatherJson = fread($weatherFile,filesize($this->weatherUrl));
    fclose($weatherFile);
    $this->weather = json_decode($weatherJson);
    }

    public function getJsoncityById($name){
      foreach ($this->weather as $i) {
        if ($i->locale->name == $name) {
          return $i;
        }
      }
    }

    public function getWeatherPage($name){
      $html = "";
      $jsonW = $this->getJsoncityById($name);
      $html = $html.'<div class="previsao-titulo">
                    <h3>Previsão para '.$jsonW->locale->name.' - '.$jsonW->locale->state.'</h3>
                  </div>
                  <div class="previsao-conteudo">';
      foreach ($jsonW->weather as $i) {
        $html = $html.'<div class="conteudo">
                        <div class="resumo col-12">
                          <h5>'.$i->date.'</h5>
                          <p>
                            '.$i->text.'
                          </p>
                        </div>
                        <div class="info col-12 row">
                          <div class="col-6">
                            <img src="images/icons/upload.png" alt="" height="30px"/>
                            <h4 class="">'.$i->temperature->min.'</h4>
                          </div>
                          <div class="col-6">
                            <img src="images/icons/download.png" alt="" height="30px"/>
                            <h4 class="">'.$i->temperature->max.'</h4>
                          </div>
                          <div class="col-6">
                            <img src="images/icons/raindrop-close-up.png" alt="" height="30px"/>
                            <h4 class="">'.$i->rain->probability.'</h4>
                          </div>
                          <div class="col-6">
                            <img src="images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" alt="" height="30px"/>
                            <h4 class="">'.$i->rain->precipitation.'</h4>
                          </div>
                        </div>
                      </div>';
      }
      $html = $html.'</div>';
      return $html;
    }

  }

 ?>
