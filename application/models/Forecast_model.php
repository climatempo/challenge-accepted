<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Forecast_model extends CI_Model
{
    function getLocales($search)
    {
        $file = file_get_contents('base/locales.json');
        $locales = json_decode($file);
        $locale = null;
        $locale = array_filter($locales, function ($val, $key) use ($search) {
            //echo strtoupper($val->name);
            return (
                strtoupper($search) === strtoupper($val->name)
            );
        }, ARRAY_FILTER_USE_BOTH);

        return $locale ? $locale[key($locale)]->id : [];

    }

    function getWeather($locales_id)
    {
        $file = file_get_contents('base/weather.json');
        $weathers = json_decode($file);
        $weather = null;
        $weather = array_filter($weathers, function ($val) use ($locales_id) {
            return (
                $locales_id === $val->locale->id
            );
        });

        return $weather ? $weather[key($weather)] : [];

    }
}
?>