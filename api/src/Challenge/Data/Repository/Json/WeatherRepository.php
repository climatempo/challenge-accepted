<?php

namespace src\Challenge\Data\Repository\Json;

use src\Challenge\Data\Repository\IWeatherRepository;


class WeatherRepository extends JsonRepository implements IWeatherRepository
{
    /**
     * Get the weather forecast for a given city id.
     * @param int $id - Id of the city you want to know the forecast
     * @return array
     */
    public function getWeatherByCityId(int $id) : array
    {
        $weathersFound = [];

        $weathers = $this->getJsonContentAsArray()();
        foreach ($weathers as $weather) {
            if ($weather["locale"]["id"] === $id) {
                $weathersFound[] = $weather["weather"];
            }
        }
        return $weathersFound;
    }
}