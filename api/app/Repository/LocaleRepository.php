<?php

/**
 * Class LocaleRepository
 *
 * Repositório para carregamento e persistência de entidades Locale
 * Utiliza objetos cacheados a partir do arquivo ../base/locales.json
 *
 * @author Mauricio Ribeiro <mauricioribeiro1992@gmail.com>
 */
class LocaleRepository
{

    use AbstractRepository;

    protected $entity = 'locale';

}