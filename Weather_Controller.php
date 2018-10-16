<?php

class Weather_Controller
{
    private $city;
      
    function openContentLocale()
    {
        $locales = file_get_contents('./base/locales.json');
        $json_locales = json_decode($locales);
        return $json_locales;
    }
  
    function openContentWeather()
    {
        $weather = file_get_contents('./base/weather.json');
        $json_weather = json_decode($weather);
        return $json_weather;
    }

    function getCity()
    {
        return $this->city;    
    }

    function setCity($city)
    {
        $this->city = $city;
    }

    function searchCity($city)
    {
        $cities = $this->openContentLocale();
        foreach ($cities as $currentCity){
            if(strtolower($currentCity->name) === strtolower($city)){
                $this->setCity($currentCity->name);
                return $this->searchWeather();
            }
        }
        return "Cidade não encontrada";
    }

    function searchWeather()
    {   
       
        $forecast = $this->openContentWeather();
        $city = $this->getCity();
        $i = 0;
        $cards=array();
       
        foreach($forecast as $current){
           
            if($current->locale->name === $city){
                $sizeWeather = count($current->weather);
                foreach ($current->weather as $key) {
                    if($i <= $sizeWeather)
                    {
                        $values = array("date"=>$current->weather[$i]->date, 
                                    "text"=>$current->weather[$i]->text,
                                    "min"=>$current->weather[$i]->temperature->min, 
                                    "max"=>$current->weather[$i]->temperature->max,
                                    "probability"=>$current->weather[$i]->rain->probability,
                                    "precipitation"=>$current->weather[$i]->rain->precipitation);
                        array_push($cards, $values);

                    }
                    $i++;
                }
            }
           
        }
        $this->sendData($cards);
    }

    function sendData($data)
    {
        header('Content-Type: application/json');
        $myJSON = json_encode($data);
        echo $myJSON;
        exit;
    }
}

