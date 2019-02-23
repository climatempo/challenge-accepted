<?php

namespace src\challenge\Repository\Json;

use src\challenge\Repository\IWeatherRepository;


class WeatherRepositoryJson extends JsonRepository implements IWeatherRepository
{
    public function getWeatherByCityId(int $id): array
    {
        $weathersFound = [];

        $weathers = $this->getAsArray();
        foreach ($weathers as $weather) {
            if ($weather["locale"]["id"] === $id) {
                $weathersFound[] = $weather["weather"];
            }
        }
        return $weathersFound;
    }
}