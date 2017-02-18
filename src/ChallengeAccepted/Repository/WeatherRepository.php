<?php

namespace ChallengeAccepted\Repository;

/**
 * @author Lucas de Oliveira <94oliveira.lucas@gmail.com>
 */
interface WeatherRepository
{

    /**
     * Return an array with the weather forecast for an 
     * specified localeId passed by parameter; if it has 
     * no data, an empty array is returned; parameters 
     * that is not an int type will throw an exception
     *
     * @param int $name
     * @throws InvalidArgumentException
     * @return array
     */
    public function getByLocaleId($localeId);
}
