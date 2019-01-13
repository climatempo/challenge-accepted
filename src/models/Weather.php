<?php

namespace ClimaTempo\Models;

// use Illuminate\Database\Eloquent\Model;

class Weather /*extends Model*/ {
    // protected $table = 'weather';

    // It exists only because reading from file
    public $contents;

    public function __construct(){
        $this->contents = json_decode(file_get_contents('./base/weather.json'));
    }
}