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

    /**
     * Return a index view
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view("index");
    }

    /**
     * Return all weather items
     * @return \Illuminate\Http\JsonResponse
     */
    public function all()
    {
        return response()->json(
            $this->model->all()
        );
    }

    /**
     * Return a list of weather by locale id
     * @param $locale_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function byLocale($locale_id)
    {
        return response()->json(
            $this->model->byLocale((int) $locale_id)
        );
    }
}
