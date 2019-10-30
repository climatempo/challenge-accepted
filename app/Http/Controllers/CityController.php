<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\LoaderJson;


class CityController extends Controller
{

    /**
     *  Método do controlador que recebe o request com o nome da cidade
     *  e executa o Modelo que faz a leitura do JSON.
     */
    public function show($cityName)
    {


        /**Validação dos dados */
        if (isset($cityName)) {
            if (empty($cityName)) {
                $error = ["error" => 2];
                return response()->json([$error], 200);
            }
        }

        /**Intancio a classe de Modelo */
        $city = new LoaderJson();
        
        /**Executo o método de filtro */
        $dataTemp = $city->FilterDataCityName($cityName);
        
        /** Valido o retorno do método e retorno para aplicação cliente */
        if ($dataTemp == null) {
            $error = ["error" => 1];
            return response()->json([$error], 200);
        }

        return response()->json([$dataTemp], 200);
    }

}
