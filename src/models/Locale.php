<?php

namespace ClimaTempo\Models;

// use Illuminate\Database\Eloquent\Model;

class Locale /*extends Model*/ {
    // protected $table = 'locale';

    // It exists only because reading from file
    public $contents;

    public function __construct(){
        $this->contents = json_decode(file_get_contents('./base/locales.json'));
    }
}