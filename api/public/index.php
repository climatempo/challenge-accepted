<?php

use DI\Bridge\Slim\App;

require __DIR__ . '/../vendor/autoload.php';

// Configuration for creating an instance of App with PHP-DependencyInjection (PHP-DI)
$app = new class () extends App
{
    protected function configureContainer(\DI\ContainerBuilder $builder)
    {
        $builder->addDefinitions(__DIR__ . "/../src/config/settings.php");
    }
};

// Routes definition
require __DIR__ . "/../src/config/routes.php";

$app->run();