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
    return $router->app->version();
});

// Endpoints referente a localidades.
// No futuro pode se utilizar outros métodos como criar, atualizar, excluir localidade.
$router->get('/localidades', 'LocalidadeController@getTodasLocalidades');

// Endpoints referente a previsão do tempo.
$router->get('/previsao-tempo/{id}', 'PrevisaoTempoController@getPrevisaoTempoPorCidade');