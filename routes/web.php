<?php

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('/locales', 'LocaleController@all');
    $router->get('/weather', 'WeatherController@all');
});

$router->get('/', 'WeatherController@index');
