<?php

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('cache.headers:public;must_revalidate;max_age=900000;etag')->prefix('/v1')->group(
    function () {
        Route::get(
            '/weather',
            [ApiController::class, 'weather_endpoint']
        );
    }
);
