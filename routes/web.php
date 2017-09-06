<?php

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('/locales', 'LocaleController@all');
});
