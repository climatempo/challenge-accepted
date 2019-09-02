<?php

namespace App\Model\Climate;

use App\Service\RedisCache;

class Weather
{
    private static $weathers = [];

    private static function getWeatherData()
    {
        if (empty(self::$weathers)) {
            try {
                self::$weathers = json_decode(file_get_contents(__DIR__ . '/weather.json'));
            } catch(Exception $err) {
                // TODO: add logger
            }
        }

        return self::$weathers;
    }

    public static function getWeatherByLocaleId(int $localeId)
    {
        $result = array_filter(self::getWeatherData(), function($weather) use ($localeId) {
            return $weather->locale->id === $localeId;
        });

        return array_values($result);
    }

}
