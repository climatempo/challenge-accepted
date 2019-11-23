<?php

namespace App\Repository;

use App\Entities\Entity;
use Doctrine\ORM\EntityRepository;

/**
 * Class AbstractRepository
 */
abstract class AbstractRepository extends EntityRepository
{
    /**
     * Salva a 'Entity'.
     *
     * @param Entity $entity
     * @param bool $flush
     * @return Entity|object
     */
    public function persist(Entity $entity, $flush = true)
    {
        if ($entity->getId() == null) {
            $this->findDetach($entity);
            $this->_em->persist($entity);
        } else {
            $entity = $this->_em->merge($entity);
        }
        if ($flush) {
            $this->_em->flush($entity);
        }
        return $entity;
    }
    /**
     * Deleta a 'Entity'.
     *
     * @param Entity $entity
     */
    public function delete(Entity $entity)
    {
        $this->_em->remove($entity);
        $this->_em->flush();
    }
    /**
     * Remove a 'entity'.
     *
     * @param Entity $entity
     */
    public function detach(Entity $entity)
    {
        $this->_em->detach($entity);
    }

    /**
     * Retorna o objeto de conexão de banco usado pelo EntityManager.
     *
     * @return \Doctrine\DBAL\Connection
     */
    protected function getConnection()
    {
        return $this->getEntityManager()->getConnection();
    }
}
