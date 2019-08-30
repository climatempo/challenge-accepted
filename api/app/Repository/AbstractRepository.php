<?php

namespace App\Repository;

use Illuminate\Support\Facades\Cache;

/**
 * Trait AbstractRepository
 *
 * Repositório abstrato para centralizar carregamento e persistência de objetos/entidades.
 * Utiliza cacheamento definido na configuração do projeto [https://laravel.com/docs/5.8/cache]
 *
 *
 * @author Mauricio Ribeiro <mauricioribeiro1992@gmail.com>
 */
trait AbstractRepository
{

    /**
     * Retorna a lista de entidades representadas pela propriedade $entity
     *
     * @return array|mixed
     */
    public function findAll(){
        if(!$this->entity)
            return [];

        $entities = Cache::get($this->entity);

        return $entities ? $entities : [];
    }

    /**
     * Salva uma lista de entidades representadas pela propriedade $entity
     *
     * @param $entities
     */
    public function saveAll($entities) {
        if($entities)
            Cache::forever($this->entity, $entities);
    }

    /**
     * Deleta todas entidades representadas pela propriedade $entity
     */
    public function deleteAll() {
        Cache::forget($this->entity);
    }
}