<?php

namespace ChallengeAccepted\Repository;

/**
 * @author Lucas de Oliveira <94oliveira.lucas@gmail.com>
 */
interface LocaleRepository
{
 
    /**
     * Return an array with all locales that have the similar 
     * name as one passed by parameter; if it doesn't exists, 
     * return an empty array; parameters that is not a string 
     * type will throw an exception
     *
     * @param string $name
     * @throws InvalidArgumentException
     * @return array
     */
    public function getBySimilarName($name);

    /**
     * Return an array with all locales
     */
    public function getAll();
}
