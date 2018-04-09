<?php
Route::get('/', function () { return view('welcome');});
Route::get('/weather/{id}', 'ResourcesController@weather');
Route::get('/cities', 'ResourcesController@cities');