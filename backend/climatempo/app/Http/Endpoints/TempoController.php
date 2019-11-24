<?php

namespace App\Http\Endpoints;

use App\Business\TempoBO;
use App\Http\Endpoints\Endpoint;

class TempoController extends Endpoint
{

    /**
     * @var \App\Business\TempoBO
     */
    private $tempoBO;


    /**
     * Construtor da Classe.
     *
     * @return void
     */
    public function __construct()
    {
        $this->tempoBO = TempoBO::newInstance();
    }

    /**
     * Recupera previsão do tempo de uma determinada cidade.
     * 
     * @param $request
     */
    public function getPrevisaoTempoPorCidade(int $idCidade)
    {
        if (!empty($idCidade)) {
            $retorno = current($this->tempoBO->getPrevisaoTempoPorCidade($idCidade));

            if (empty($retorno)) {
                $retorno = ['message' => 'Nenhum resultado encontrado!'];
            }

            return $this->toJson($retorno);
        }
    }
}
