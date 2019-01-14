<?php

use ClimaTempo\Repositories\LocaleRepository;
use ClimaTempo\Repositories\WeatherRepository;

$router->get('/home', function() {
    $data = request()->params();

    // Not find anything
    if(!count($data) || !isset($data['city'])){
        return view('pages.index');
    }

    $repositoryLocale = new LocaleRepository();
    $weather = [];

    if($repositoryLocale->existByName($data['city'])){
        $repositoryWeather = new WeatherRepository();

        $weather = $repositoryWeather->getWeatherByPeriod($data['city'], '2017-02-01', '2017-02-07');
    }else {
        $data['city'] = $data['city'] . ' <b>não</b> foi encontrada - Tente: "São Paulo" ou "Osasco"';
    }

    return view('pages.index', ['search' => true, 'weather' => $weather, 'city' => $data['city']]);
});