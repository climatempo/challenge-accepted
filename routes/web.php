<?php

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('/locales', 'LocaleController@all');
    $router->get('/weather', 'WeatherController@all');
    $router->get('/weather/locale/{locale_id}', 'WeatherController@byLocale');
});

$router->get('/', 'WeatherController@index');
