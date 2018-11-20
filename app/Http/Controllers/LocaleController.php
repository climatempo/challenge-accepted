<?php

namespace App\Http\Controllers;

use App\Locales;
use Illuminate\Http\Request;

class LocaleController extends Controller
{

    protected $locales;

    /**
    *  Instance new COntroller
    */

    public function __construct(Locales $locales){
        $this->locale = $locales;
    }

    /**
    * Return all locales
    */

    public function all(){

        return response()->json(
            $this->locale->all()
        );

    }
}
