<?php
require './config/constants.php';
require './config/config.php';
require './vendor/autoload.php';

use \lib\php\Helpers as Helpers;

$app = new \Slim\App(["settings" => $config]);

$container = $app->getContainer();

$container['view'] = new \Slim\Views\PhpRenderer("./public/views/");

$app->get('/search-weather/[{city}]', function ($request, $response) {
    $vars['city'] = Helpers::formatText($request->getAttribute('city'));

    $response = $this->view->render($response, 'search-weather.phtml', $vars);

    return $response;
});

$app->post('/search/weather', function ($request, $response) {
    $dataRequest = $request->getParsedBody();
    $city = Helpers::valorArray($dataRequest, 'txtBscCity');

    $locale = new \model\WeatherLocale;
    $locale->setName($city);
    $locale->setDados();
    $codeCity = $locale->getId();

    unset($locale);

    $forecast = new \model\WeatherForecast($codeCity);
    $forecast->setDados();
    $arrRet = $forecast->getWeather();

    if (!$arrRet) {
        $arrRet['error'] = true;
        $arrRet['message'] = 'Nenhum resultado encontrado para a busca: "'.$city.'".';
    }
    unset($forecast);

    Helpers::retornarAjax($arrRet);
});

$app->run();
