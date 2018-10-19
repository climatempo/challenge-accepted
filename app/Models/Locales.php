<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Locales extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'state', 'latitude', 'longitude'];

    /**
     * Relationship model
     * 
     * @return resource
     */
    public function weather ()
    {
        return $this->hasMany('App\Models\Weather');
    }
    
    /**
     * Get locales data where contain the parameter in name column or 
     * state column
     * 
     * @param string $input
     * @return resource
     */
    static public function getLocalesByInput ($input)
    {
        return self::query()
                ->where('name', 'like', "%{$input}%")
                ->orWhere('state', 'like', "%{$input}%")
                ->get();
    }
}
