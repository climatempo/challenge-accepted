<?php

namespace Climatempo\Forecast\Mapper;

use Climatempo\Forecast\Mapper\IWeather;

/**
* @author Denilson Raimundo <denilsonraimundo.github.io> 
* @since 2017/05/05
*/

class WeatherMapper implements IWeather
{

    /**
    * @var string
    */

    private $jsonPath;

    /**
    * Constructor declares weather.json location in jsonPath 
    */

    public function __construct()
    {
        $this->jsonPath = __DIR__ . '/../../../../base/weather.json';
    }

    /**
    * @param string $localeName
    * @return array
    */

    public function getWeatherByLocaleName($localeName) 
    {       	
        $json = file_get_contents($this->jsonPath);
    	
    	$jsonDecoded = json_decode($json);
        
        $weathersPrevision = array();

        foreach ($jsonDecoded as $weather) {
            if (strtolower($weather->locale->name) == strtolower($localeName)) {
                $weathersPrevision[] = $weather->weather;
            }
        }
        
        return $weathersPrevision;
    }

}