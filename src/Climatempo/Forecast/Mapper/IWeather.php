<?php

namespace Climatempo\Forecast\Mapper;

/**
* @author Denilson Raimundo <denilsonraimundo.github.io> 
* @since 2017/05/05
*/

interface IWeather
{

    /**
    * @param string $name
    * @return array
    */
    
    public function getWeatherByLocaleName($localeName);
}