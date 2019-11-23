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
     * @var \Doctrine\ORM\EntityManager
     */
    private $entityManager;
    /**
     * Retorna a instância singleton do 'Repository' conforme o nome da 'entity'.
     *
     * @param string $entityName
     * @return \Doctrine\ORM\EntityRepository
     */
    protected function getRepository($entityName)
    {
        if (!array_key_exists($entityName, $this->repositories)) {
            $this->repositories[$entityName] = $this->getEntityManager()->getRepository($entityName);
        }
        return $this->repositories[$entityName];
    }
    /**
     * Inicia uma transação suspendendo o modo de confirmação automática.
     */
    protected function beginTransaction()
    {
        $this->getEntityManager()->beginTransaction();
    }
    /**
     * Confirma a transação atual.
     */
    protected function commitTransaction()
    {
        $this->getEntityManager()->commit();
    }
    /**
     * Clears the EntityManager.
     */
    protected function clearEntityTransaction()
    {
        $this->getEntityManager()->clear();
    }
    /**
     * Cancela quaisquer alterações de banco de dados feitas durante a transação atual.
     */
    protected function rollbackTransaction()
    {
        $this->getEntityManager()->rollback();
    }
    /**
     * Retorna a instância de EntityManager.
     *
     * @return \Doctrine\ORM\EntityManager
     */
    protected function getEntityManager()
    {
        if (empty($this->entityManager)) {
            $this->entityManager = app()->make('em');
        }
        return $this->entityManager;
    }
}
