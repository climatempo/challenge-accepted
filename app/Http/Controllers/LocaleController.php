<?php

namespace App\Http\Controllers;

use App\Locales;

class LocaleController extends Controller
{
    /**
     * Model of locales
     * @var Locales
     */
    protected $model;
    /**
     * Create a new controller instance.
     *
     * @param Locales $locale
     */
    public function __construct(Locales $locale)
    {
        $this->model = $locale;
    }

    /**
     * Return all Locales
     * @return \Illuminate\Http\JsonResponse
     */
    public function all()
    {
        return response()->json(
            $this->model->all()
        );
    }
}
