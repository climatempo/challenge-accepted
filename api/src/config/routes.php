<?php

use Psr\Http\Message\RequestInterface as Request;
// use Psr\Http\Message\ResponseInterface as Reponse;
use Slim\Http\Response;
use Psr\Http\Message\ResponseInterface;
use src\Challenge\Service\WeatherLocaleService;
use src\Challenge\Controllers\LocaleApiController;
use src\Challenge\Repository\Json\LocaleRepositoryJson;
use src\Challenge\Controllers\WeatherApiController;

// $app->add(new Tuupola\Middleware\CorsMiddleware());

$app->get('/', function (ResponseInterface $response) {
    $response->getBody()->write('Hello ');
    return $response;
});

$app->get("/api/locale[/{name}]", [LocaleApiController::class, "findLocaleBySimilarName"]);
$app->get("/api/locale/{cityId}/forecast", [WeatherApiController::class, "findWeatherByCityId"]);
