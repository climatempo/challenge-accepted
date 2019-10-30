<?php

use Illuminate\Http\Request;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/**
 * Rota de da API de serviços que recebe os dados da aplicação cliente onde
 * onde faz o processamento e o retorno.
 */
Route::resource("/city", "CityController");