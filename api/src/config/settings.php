<?php

use src\Challenge\Repository\ILocaleRepository;
use src\Challenge\Repository\IWeatherRepository;
use src\Challenge\Repository\Json\LocaleRepositoryJson;
use function \DI\get;
use src\Challenge\Repository\Json\WeatherRepositoryJson;


$localeJsonPath = __DIR__ . "/../../base/locales.json";
$weatherJsonPath = __DIR__ . "/../../base/weather.json";

return [
    'settings.displayErrorDetails' => true,
    LocaleRepositoryJson::class => \DI\autowire()->constructorParameter('jsonFilePath', $localeJsonPath),
    ILocaleRepository::class => get(LocaleRepositoryJson::class),
    WeatherRepositoryJson::class => \DI\autowire()->constructorParameter('jsonFilePath', $weatherJsonPath),
    IWeatherRepository::class => get(WeatherRepositoryJson::class)
];
