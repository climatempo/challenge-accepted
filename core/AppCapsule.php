<?php

namespace ClimaTempoCore;

use Slim\App;
use Illuminate\Container\Container as IlluminateContainer;
use Illuminate\View\Factory;
// use Symfony\Component\HttpFoundation\Request;
use ClimaTempoCore\Request;
use Slim\Interfaces\RouterInterface;

class AppCapsule
{
    /**
     * @var App
     */
    private static $app;

    /**
     * AppCapsule constructor.
     */
    private function __construct()
    {
    }

    /**
     * @param App $instance
     * @throws \Exception
     */
    public static function setAppInstance(App $instance)
    {
        if(self::$app instanceof App){
            throw new \Exception("Already set app instance..");
        }
        self::$app = $instance;
    }

    /**
     * @return App
     */
    public static function getInstance()
    {
        return self::$app;
    }

    /**
     * @return \Psr\Container\ContainerInterface
     */
    public static function getContainer()
    {
        return self::$app->getContainer();
    }

    /**
     * @return IlluminateContainer
     */
    public static function getIlluminateContainer()
    {
        $container = self::getContainer();
        return $container['illuminateContainer'];
    }


    /**
     * @return Factory
     */
    public static function view()
    {
        $container = self::getIlluminateContainer();
        return $container['view'];
    }

    /**
     * @return Request
     */
    public static function request()
    {
        $container = self::getContainer();
        return $container['customRequest'];
    }
}