<?php

namespace src\Challenge\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\RequestInterface as Request;
use src\Challenge\Service\WeatherLocaleService;
use src\Challenge\Repository\ILocaleRepository;
use src\Challenge\Repository\Json\LocaleRepositoryJson;

class LocaleApiController
{
    /** @var WeatherLocaleService $weatherLocaleService */
    private $weatherLocaleService;


    public function __construct(WeatherLocaleService $weatherLocaleService)
    {
        $this->weatherLocaleService = $weatherLocaleService;
    }

    public function findLocaleBySimilarName(Response $response, string $name = '', $args = [])
    {
        $locales = $this->weatherLocaleService->getCityBySimilarName($name);
        return $response->withJson($locales, $locales['status']);
    }
}
