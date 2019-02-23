<?php

namespace src\challenge\Controllers;
use src\challenge\Service\WeatherLocaleService;
use Psr\Http\Message\ResponseInterface;

class WeatherApiController
{
    /** @var WeatherLocaleService $weatherLocaleService */
    private $weatherLocaleService;

    public function __construct(WeatherLocaleService $weatherLocaleService)
    {
        $this->weatherLocaleService = $weatherLocaleService;
    }

    public function findWeatherByCityId(int $cityId, ResponseInterface $response)
    {
        $weather = $this->weatherLocaleService->getWeatherByCityId($cityId);
        return $response->withJson($weather, $weather['status']);
    }
}