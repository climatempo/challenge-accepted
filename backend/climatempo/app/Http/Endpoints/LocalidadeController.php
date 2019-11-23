<?php

namespace App\Http\Endpoints;

use App\Business\LocalidadeBO;
use App\Http\Endpoints\Endpoint;

class LocalidadeController extends Endpoint
{

    /**
     * @var \App\Business\LocalidadeBO
     */
    private $localidadeBO;


    /**
     * Construtor da Classe.
     *
     * @return void
     */
    public function __construct()
    {
        $this->localidadeBO = LocalidadeBO::newInstance();
    }

    /**
     * Recupera todas localidades.
     * 
     * @return array
     */
    public function getTodasLocalidades()
    {
        $localidades = $this->localidadeBO->getLocalidades();
        return $this->toJson($localidades);
    }
}
