<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class LocaleController extends Controller
{
    /**
     * Lista as localizações através do json cacheado em "locales"
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request) {
        $locales = Cache::get('locales');

        return response()->json($locales ? $locales : []);
    }


}
