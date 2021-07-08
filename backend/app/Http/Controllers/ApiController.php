<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class ApiController extends Controller
{
    public static function weather_endpoint(Request $req, Response $res): Response
    {
        $data = Storage::disk('local')->get('public/weather.json');
        $json = json_decode($data, true, 512, JSON_THROW_ON_ERROR);
        $collection = collect($json);

        if($req->query('city'))
        {
            $cityName = $req->query('city');
            $array = [];
            foreach ($collection as $key => $value) {
                if($value['locale'] && $value['locale']['name']){
                    if(stripos($value['locale']['name'], $cityName) !== false){
                        $array[] = $value;
                        break;
                    }
                }
            }
            if(count($array) > 0){ $data = $array; }
        }

        return $res->setContent($data)
            ->header('Content-Type', 'application/json');
    }
}
