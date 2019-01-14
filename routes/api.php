<?php

use ClimaTempo\Repositories\LocaleRepository;
use ClimaTempo\Repositories\WeatherRepository;

// In cases of SPA Application, or with any framework like VueJS, call the api for better UI
$router->group('/api', function(){
    $this->get('/locale', function(){
        $localeRepository = new LocaleRepository();

        return $localeRepository->all();
    });

    $this->get('/weather', function(){
        $weatherRepository = new WeatherRepository();

        return $weatherRepository->all();
    });

    $this->get('/weather-period', function() {
        $data = request()->params();

        // Not find anything
        if(!count($data) || !isset($data['city'])){
            return ["error" => true, "message" => "need pass the parameter \'city\'"];
        }
    
        $repositoryLocale = new LocaleRepository();
    
        if($repositoryLocale->existByName($data['city'])){
            $repositoryWeather = new WeatherRepository();
            
            // The period is fixed on period.begin and period.end on JSON. Another iterator for create pieces of period is probably bad idea
            
            // $periodStart = isset($data['period_start']) ? $data['period_start'] : '2017-02-01';
            // $periodEnd = isset($data['period_end']) ? $data['period_end'] : '2017-02-07';
            
            $weather = $repositoryWeather->getWeatherByPeriod($data['city'], '2017-02-01', '2017-02-07');
            
            return ["error" => false, "weather" => $weather];
        }

        return ["error" => true, "message" => "could not find the city on database"];
    });
});