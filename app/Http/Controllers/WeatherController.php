<?php

namespace App\Http\Controllers;

use App\Models\Locales;
use App\Models\Weather;
use App\Http\Resources\Locales as LocalesResource;
use App\Http\Resources\Weather as WeatherResource;

class WeatherController extends Controller
{
    
    /**
     * Get weather to city
     * 
     * @param integer $idLocales
     * @return array
     */
    public function get ($idLocales)
    {
        /**
         * Response of Locales Model
         * 
         * @var resource
         */
        $locale = new LocalesResource(
                Locales::find($idLocales)
            );
        
        /**
         * Response of Weather Model
         * 
         * @var resource
         */
        $weather = new WeatherResource(
                Weather::getByLocales($idLocales)
            );
        
        return array(
            'locale'  => $locale,
            'weather' => $weather,
        );
        
    }
}
