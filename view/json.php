<?php
    
    ini_set('display_errors',1);
    ini_set('display_startup_erros',1);
    error_reporting(E_ALL);

    include_once('../controller/api_climatempo.class.php');

    $APIClimatempo = new APIClimatempo();

    $json_api_locales = $APIClimatempo->getContentsAPIClimatempo('http://localhost:8080/api_locale',3735);

    //Loop para percorrer o json capturando os dados
    foreach ( $json_api_locales as $locale )
    {
        echo 'ID:        ' .$locale->id          . '<br>' .
             'Nome:      ' .$locale->name        . '<br>' .
             'Estado:    ' .$locale->state       . '<br>' .
             'Latitude:  ' .$locale->latitude    . '<br>' .
             'Longitude: ' .$locale->longitude   . '<br><br>';

        $json_api_weather = $APIClimatempo->getContentsAPIClimatempo('http://localhost:8080/api_weather',$locale->id);

        foreach ($json_api_weather as $weather) {
            echo 'Periodo: Begin:  ' .$weather->period->begin          . '<br>' .
                 'Periodo: End:    ' .$weather->period->end            . '<br><br>';

            for($contentWeather = 0; $contentWeather < count($weather->weather); $contentWeather++) {
                echo 'Data:              ' .$weather->weather[$contentWeather]->date . '<br>' .
                     'Texto:             ' .$weather->weather[$contentWeather]->text . '<br>' .
                     'Temperatura: (Min: ' .$weather->weather[$contentWeather]->temperature->min . 
                                ' / Max: ' .$weather->weather[$contentWeather]->temperature->max . ') <br>' .
                     'Chuva: (Probabilidade: ' .$weather->weather[$contentWeather]->rain->probability . 
                          ' / Precipitação:  ' .$weather->weather[$contentWeather]->rain->precipitation . ')';
                echo '<hr>';
            } 

        }
     
        echo '<hr>';
    }
    
?>


<!--

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>JSON Sample</title>
</head>
<body>
    <div id="placeholder"></div>
    <script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <script>
  $.getJSON('../controller/base/locales.json', function(data) {
        var output="<ul>";
        for (var i in data) {
            output+="<li>" + data[i].id + " " + data[i].name + "–" + data[i].state + "–" + data[i].latitude + "–" + data[i].longitude +"</li>";
        }

        output+="</ul>";
        document.getElementById("placeholder").innerHTML=output;
  });
    </script>
</body>
</html>

-->