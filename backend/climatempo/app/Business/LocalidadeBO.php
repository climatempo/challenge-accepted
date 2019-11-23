<?php

namespace App\Business;
use App\Entities\Localidade;

/**
 * Classe responsável por encapsular as implementações de negócio referente a entidade 'Localidade'.
 */
class LocalidadeBO extends AbstractBO
{
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
     *  Responsável por regras de negócio.
     */
    public function getLocalidades()
    {
        return $this->getLocalidadeRepository()->getLocalidades();
    }



    /**
     * Retorna a instância de 'LocalidadeRepository'.
     *
     * @return \App\Repository\LocalidadeRepository
     */
    private function getLocalidadeRepository()
    {
        return $this->getRepository(Localidade::class);
    }
}