<?php

use ClimaTempo\Repositories\LocaleRepository;
use ClimaTempo\Repositories\WeatherRepository;

$router->get('/home', function() {
    $data = request()->params();

    // Not find anything
    if(!count($data) || !isset($data['city'])){
        return view('pages.index');
    }

    // $repositoryLocale = new LocaleRepository();
    // $weather = [];
    $weather = json_decode(file_get_contents('../src/Models/base/weather.json'))[0]->weather;

    // if($repositoryLocale->existByName($data['city'])){
    //     $repositoryWeather = new WeatherRepository();

    //     $weather = $repositoryWeather->getWeatherByPeriod($data['city'], '2017-02-01', '2017-02-07');
    // }

    return view('pages.index', ['search' => true, 'weather' => $weather, 'city' => $data['city']]);
});