<?php

use Illuminate\Support\Facades\Cache;

/**
 * Trait AbstractRepository
 *
 * Repositório abstrato para centralizar carregamento e persistência de objetos/entidades.
 * Utiliza Cache.
 *
 *
 * @author Mauricio Ribeiro <mauricioribeiro1992@gmail.com>
 */
trait AbstractRepository
{

    /**
     * Propriedade utilizada pela classe filha para dizer qual a entidade trafegada no repositório
     *
     * @var null|string
     */
    protected $entity = null;

    /**
     * Retorna a lista de objetos representados pela propriedade $entity definido nas classes filhas
     * Utiliza cache para o retorno.
     *
     * @return array|mixed
     */
    public function findAll(){
        if(!$this->entity)
            return [];

        return Cache::get($this->entity);
    }
}