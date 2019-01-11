<?php

if(! function_exists('view')){
    /**
     * @param $view
     * @param array $data
     * @return \Illuminate\Contracts\View\View
     */
    function view($view, array $data = [])
    {
        return \ClimaTempoCore\AppCapsule::view()
            ->make($view, $data);
    }
}

if(! function_exists('route')){
    /**
     * @param $routeName
     * @param array $parameters
     * @return string
     */
    function route($routeName, $parameters = [])
    {
        $router = \NPCore\AppCapsule::router();
        $request = \NPCore\AppCapsule::request();

        return (($request->isSecure()) ? 'https://' : 'http://').$request->server->get('HTTP_HOST').$router->pathFor($routeName, $parameters);
    }
}