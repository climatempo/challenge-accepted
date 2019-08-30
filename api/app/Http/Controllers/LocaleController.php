<?php

namespace App\Http\Controllers;

use App\Repository\LocaleRepository;
use App\Repository\WeatherRepository;
use Illuminate\Support\Facades\Log;

class LocaleController extends Controller
{
    /**
     * Lista as localizações.
     *
     * @param \App\Repository\LocaleRepository $repository
     * @return \Illuminate\Http\JsonResponse
     */
    public function index (LocaleRepository $repository) {
        Log::info('Requisição feita para listar localizações');

        return response()->json($repository->findAll());
    }

    /**
     * Lista as previsões de uma determinada localização.
     *
     * @param \App\Repository\WeatherRepository $repository
     * @return \Illuminate\Http\JsonResponse
     */
    public function weather (WeatherRepository $repository, $locale_id) {
        Log::info('Requisição feita para listar previsões da localização '. $locale_id);

        return response()->json($repository->findAllByLocale($locale_id));
    }

}
