<?php

/**
 * Class LocaleRepository
 *
 * Repositório para carregamento e persistência de entidades Locale
 * Utiliza objetos cacheados ingeridos pelo comando \app\Console\Commands\IngerirCommandand.php
 *
 * @author Mauricio Ribeiro <mauricioribeiro1992@gmail.com>
 */
class LocaleRepository
{

    use AbstractRepository;

    protected $entity = 'locales';

}