<?php

use Psr\Http\Message\RequestInterface as Request;
// use Psr\Http\Message\ResponseInterface as Reponse;
use Slim\Http\Response;
use src\challenge\Service\WeatherLocaleService;
use Psr\Http\Message\ResponseInterface;
use src\challenge\Controllers\LocaleApiController;
use src\challenge\Repository\Json\LocaleRepositoryJson;
use src\challenge\Controllers\WeatherApiController;

// $app->add(new Tuupola\Middleware\CorsMiddleware());

$app->get('/', function (ResponseInterface $response) {
    $response->getBody()->write('Hello ');
    return $response;
});

$app->get("/api/locale[/{name}]", [LocaleApiController::class, "findLocaleBySimilarName"]);
$app->get("/api/locale/{cityId}/forecast", [WeatherApiController::class, "findWeatherByCityId"]);