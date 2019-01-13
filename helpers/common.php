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

if(! function_exists('request')){
    /**
    * @return \ClimaTempoCore\Request
    */
    function request()
    {
        return \ClimaTempoCore\AppCapsule::request();
    }
}