<?php

use ChallengeAccepted\Repository\Json\LocaleRepositoryJson;
use ChallengeAccepted\Repository\Json\WeatherRepositoryJson;
use ChallengeAccepted\Service\WeatherLocaleApiService;

// DIC configuration

$container = $app->getContainer();

// services
$container['weatherLocaleApiService'] = function ($c) {
    $localeRepository  = new LocaleRepositoryJson(__DIR__ . '/../base/locales.json');
    $weatherRepository = new WeatherRepositoryJson(__DIR__ . '/../base/weather.json'); 
    
    return new WeatherLocaleApiService($localeRepository, $weatherRepository);
};

// view renderer
$container['renderer'] = function ($c) {
    $settings = $c->get('settings')['renderer'];
    return new Slim\Views\PhpRenderer($settings['template_path']);
};

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
    return $logger;
};

// twig
$container['view'] = function ($container) {
    $view = new \Slim\Views\Twig(__DIR__ . '/../templates');

    // Instantiate and add Slim specific extension
    $basePath = rtrim(str_ireplace('index.php', '', $container['request']->getUri()->getBasePath()), '/');
    $view->addExtension(new Slim\Views\TwigExtension($container['router'], $basePath));

    return $view;
};