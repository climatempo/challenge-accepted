<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return 'API - Clima Tempo';
});



$router->group(['prefix' => 'api'], function () use ($router) {
    // Endpoints referente a localidades.
    // No futuro pode se utilizar outros métodos como criar, atualizar, excluir localidade.
    $router->get('/localidades', ['uses' => 'LocalidadeController@getTodasLocalidades']);


    // Endpoints referente a previsão do tempo.
    $router->get('/previsao-tempo-por-cidade/{id}', ['uses' => 'TempoController@getPrevisaoTempoPorCidade']);
});
