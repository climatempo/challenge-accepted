<?php

namespace src\challenge\Repository\Json;

use src\challenge\Repository\IWeatherRepository;


class WeatherRepositoryJson extends JsonRepository implements IWeatherRepository
{
    /**
     * Get the weather forecast for 1 week for a given Locale Id
     * @param $id - Id of the location you want to know the forecast
     * @return array
     */
    public function getWeatherByCityId(int $id) : array
    {
        $weathersFound = [];

        $weathers = $this->getJsonContentAsArray();
        foreach ($weathers as $weather) {
            if ($weather["locale"]["id"] === $id) {
                $weathersFound[] = $weather["weather"];
            }
        }
        return $weathersFound;
    }
}