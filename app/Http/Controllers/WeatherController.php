<?php

namespace App\Http\Controllers;

use App\Weather;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WeatherController extends Controller
{
    protected $weather;

    /**
    * Instance new COntroller
    */
    public function __construct(Weather $weathers){

        $this->weather = $weathers;

    }

    public function index(){

        return view("index");
    
    }

    public function allWeathers(){

        return response()->json(
            $this->weather->all()
        );

    }

    public function weatherByLocale($idLocale){
        return response()->json(
            $this->weather->weatherByLocale($idLocale)
        );
    }

}