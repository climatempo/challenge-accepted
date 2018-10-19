<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Weather extends Model
{
    public $table = 'weather';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
            'id_locale', 'date', 'text', 'temperature_min', 'temperature_max', 
            'rain_probability', 'rain_precipitation'
        ];

    /**
     * Relationship model
     * 
     * @return resource
     */
    public function locales () 
    {
        return $this->belongsTo('App\Models\Locales');
    }
    
    /**
     * Get weather data related of Locales table by id column
     * 
     * @param integer $idLocale
     * @return resource
     */
    static function getByLocales ($idLocale)
    {
        return self::query()
                ->where('id_locale', '=', $idLocale)
                ->get();
    }
    
}
