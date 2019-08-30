<?php

/**
 * Class WeatherRepository
 *
 * Repositório para carregamento e persistência de entidades Weather
 * Utiliza objetos cacheados ingeridos pelo comando \app\Console\Commands\IngerirCommand.phpphp
 *
 * @author Mauricio Ribeiro <mauricioribeiro1992@gmail.com>
 */
class WeatherRepository
{

    use AbstractRepository;

    protected $entity = 'weather';

    public function findAllByLocale($locale_id) {
        if(!$locale_id)
            return $this->findAll();

        return [];
    }

}