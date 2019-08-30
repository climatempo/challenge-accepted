<?php

namespace App\Repository;

/**
 * Class LocaleRepository
 *
 * Repositório para carregamento e persistência de entidades Locale
 * Utiliza objetos cacheados ingeridos pelo comando \App\Console\Commands\IngerirCommandand
 *
 * @author Mauricio Ribeiro <mauricioribeiro1992@gmail.com>
 */
class LocaleRepository
{

    use AbstractRepository;

    protected $entity = 'locales';

}