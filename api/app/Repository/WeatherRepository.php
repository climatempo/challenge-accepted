<?php

namespace App\Repository;

use Illuminate\Support\Facades\Log;

/**
 * Class WeatherRepository
 *
 * Repositório para carregamento e persistência de entidades Weather
 * Utiliza objetos cacheados ingeridos pelo comando \App\Console\Commands\IngerirCommand
 *
 * @author Mauricio Ribeiro <mauricioribeiro1992@gmail.com>
 */
class WeatherRepository
{

    use AbstractRepository;

    protected $entity = 'weather';

    /**
     * Lista todas as previsões de uma determinada localização
     * Caso a localização não seja informada, retorna uma lista vazia.
     *
     * @param $locale_id
     * @return array
     */
    public function findAllByLocale($locale_id) {
        if(!$locale_id)
            return [];

        $weathers = array_values(array_filter($this->findAll(), function ($weather) use ($locale_id) {
            return $weather['locale'] && $weather['locale']['id'] == $locale_id;
        }));

        return array_map(function ($weather) {
            return $weather['weather'];
        }, $weathers);
    }

}