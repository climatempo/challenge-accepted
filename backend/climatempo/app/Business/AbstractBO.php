<?php

namespace App\Business;

/**
 * Class AbstractBO
 * 
 */
abstract class AbstractBO
{
    /**
     * @var array
     */
    private $repositories = [];

    /**
     * Retorna a instância singleton do 'Repository' conforme o nome da 'entity'.
     *
     * @param string $entityName
     */
    protected function getRepository($entityName)
    {
        if (!array_key_exists($entityName, $this->repositories)) {
            $this->repositories[$entityName] = $entityName;
        }
        return $this->repositories[$entityName];
    }
}
