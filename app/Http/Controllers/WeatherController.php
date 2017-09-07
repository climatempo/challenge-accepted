<?php

namespace App\Http\Controllers;

use App\Locales;
use App\Weather;

class WeatherController extends Controller
{
    /**
     * Model of locales
     * @var Locales
     */
    protected $model;

    /**
     * WeatherController constructor.
     * @param Weather $weather
     */
    public function __construct(Weather $weather)
    {
        $this->model = $weather;
    }

    public function index()
    {
        return view("index");
    }

    public function all()
    {
        return response()->json(
            $this->model->all()
        );
    }
}
