<?php

namespace App\Business;

use App\Repository\TempoRepository;

/**
 * Classe responsável por encapsular as implementações de negócio referente a entidade 'PrevisaoTempo'.
 */
class TempoBO
{
    /**
     * @var \App\Repository\TempoRepository
     */
    private $tempoRepository;

    /**
     * Construtor da Classe de negócio.
     */
    public function __construct()
    {
        $this->tempoRepository = TempoRepository::newInstance();
    }

    /**
     * Instância a classe PrevisaoTempo BO.
     *
     * @return TempoBO
     */
    public static function newInstance()
    {
        return new TempoBO();
    }

    /**
     * Responsável por filtrar as previsoes de tempo por $idCidade
     * 
     * @return array
     */
    public function getPrevisaoTempoPorCidade(int $idCidade)
    {
        $previsoesRepositorio = $this->tempoRepository->getDadosMock();

        return array_filter(array_map(function ($previsao) use ($idCidade) {
            if ($previsao->locale->id == $idCidade) return $previsao;
        }, $previsoesRepositorio));
    }
}
