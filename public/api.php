<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Climatempo\Forecast\Domain\WeatherDomain;
use Climatempo\Forecast\Mapper\WeatherMapper;

$action = $_GET['action'];
$city = $_GET['city'];

switch ($action) {
    case 'getWeatherJson' : getWeatherJson($city); break;
}

function getWeatherJson($city)
{
	$mapper = new WeatherMapper();
	$weatherDomain = new WeatherDomain($mapper);

	$weather = $weatherDomain->getWeatherByLocaleName($city);
	
	die(json_encode($weather));
}