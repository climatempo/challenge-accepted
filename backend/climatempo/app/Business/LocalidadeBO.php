<?php

namespace App\Business;

use App\Repository\LocalidadeRepository;

/**
 * Classe responsável por encapsular as implementações de negócio referente a entidade 'Localidade'.
 */
class LocalidadeBO
{
    /**
     * @var \App\Repository\LocalidadeRepository
     */
    private $localidadeRepository;

    /**
     * Construtor da Classe de negócio.
     */
    public function __construct()
    {
        $this->localidadeRepository = LocalidadeRepository::newInstance();
    }

    /**
     * Instância a classe Localidade BO.
     *
     * @return LocalidadeBO
     */
    public static function newInstance()
    {
        return new LocalidadeBO();
    }

    /**
     * Responsável por regras de negócio.
     * 
     * @return array
     */
    public function getLocalidades()
    {
        return $this->localidadeRepository->getDadosMock();;
    }
}
