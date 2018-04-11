<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ResourcesController extends Controller{
    
    public function weather($id){
        $weathers = json_decode(file_get_contents('./json/weather.json'));
        $selected = null;
        foreach($weathers as $weather){
            if($weather->locale->id == $id)
                $selected = $weather;
        }
        return response()->json($selected);
    }

    public function cities(){
        return file_get_contents('./json/locales.json');
    }
}