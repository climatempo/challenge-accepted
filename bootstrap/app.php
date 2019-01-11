<?php

// Large operations:
set_time_limit(0);
date_default_timezone_set('America/Sao_Paulo');
// Autoload
defined('PREFIX_PATH') || define('PREFIX_PATH', ((php_sapi_name() == "cli") ? "" : "../"));
require_once PREFIX_PATH."vendor/autoload.php";

use Slim\App;
use Slim\Container;
use ClimaTempoCore\AppCapsule;

$container = new Container();
// Another ServiceProvider
$container['foundHandler'] = function() {
    return new \ClimaTempoCore\RequestResponse();
};
//

$app = new App($container);

AppCapsule::setAppInstance($app);
$router = $app;

// Another ServiceProvider
use Illuminate\Container\Container as IContainer;

$illuminateContainer = new IContainer();
$illuminateContainer->bind('app', $illuminateContainer);
$container['illuminateContainer'] = function () use($illuminateContainer) {
    return $illuminateContainer;
};
//

// Another ServiceProvider
use Illuminate\Filesystem\Filesystem;

$fileSystem = new Filesystem();
$container['illuminateContainer']['files'] = function () use($fileSystem) {
    return $fileSystem;
};
//


// This can be sub by ServiceProvider
use Illuminate\View\FileViewFinder;
use Illuminate\View\Factory;
use Illuminate\Events\Dispatcher;
use Illuminate\View\Engines\EngineResolver;
use Illuminate\View\Engines\PhpEngine;

$fs = $container['illuminateContainer']['files'];

$vf = new FileViewFinder($fs, [realpath(__DIR__.'/../views')],);
$ed = new Dispatcher($container['illuminateContainer']);
$vr = new EngineResolver();
$vr->register('php', function (){
    return new PhpEngine();
});

$factory = new Factory($vr, $vf, $ed);

$container['illuminateContainer']['view'] = function () use($factory){
    return $factory;
};
// End, possible ServiceProvider

require_once PREFIX_PATH."routes/web.php";
require_once PREFIX_PATH."routes/api.php";