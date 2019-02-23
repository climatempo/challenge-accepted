<?php

namespace src\challenge\Service;

interface IWeatherLocaleService
{
    public function getCityBySimilarName(string $cityName): array;
}