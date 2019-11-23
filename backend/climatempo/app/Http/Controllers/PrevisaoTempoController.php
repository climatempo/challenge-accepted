<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PrevisaoTempoController extends Controller
{
    /**
     * Construtor da Classe.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Recupera previsão do tempo de uma determinada cidade.
     * 
     * @param $request
     */
    public function getPrevisaoTempoPorCidade(Request $request)
    { 
        return $request->id;
    }
}
