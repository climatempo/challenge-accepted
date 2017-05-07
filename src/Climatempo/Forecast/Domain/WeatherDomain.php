<?php

namespace Climatempo\Forecast\Domain;

use Climatempo\Forecast\Mapper\IWeather;

/**
* @author Denilson Raimundo <denilsonraimundo.github.io>
* @since 2017/05/05
*/

class WeatherDomain
{

    /**
    * @var WeatherMapper
    */

    private $mapper;

    /**
    * @param WeatherMapper $mapper
    */

    public function __construct(IWeather $mapper)
    {
        $this->mapper = $mapper;
    }

    /*
    * @param $localeName string
    * @return array weather
    */
    
    public function getWeatherByLocaleName($localeName)
    {
        return $this->mapper->getWeatherByLocaleName($localeName);
    }

}