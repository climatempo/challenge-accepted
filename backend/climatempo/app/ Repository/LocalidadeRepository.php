<?php

namespace App\Repository;

use App\Entities\Localidade;

class LocalidadeRepository
{

    /**
     * Instância a classe LocalidadeRepository.
     *
     * @return LocalidadeRepository
     */
    public static function newInstance()
    {
        return new LocalidadeRepository();
    }

    /**
     * Retorna os dados do repositorio.
     * 
     * @return array
     */
    public function getLocalidades()
    {
        $localidades = [
            [
                "id" => 3735,
                "name" => "Osasco",
                "state" => "SP",
                "latitude" => -23.5320,
                "longitude" => -46.7920
            ],
            [
                "id" => 3477,
                "name" => "São Paulo",
                "state" => "SP",
                "latitude" => -23.5480,
                "longitude" => -46.6360
            ]
        ];

        return $localidades;
    }
}
