<?php

namespace ChallengeAccepted\Repository\Json;

use ChallengeAccepted\Repository\WeatherRepository;
use InvalidArgumentException;

/**
 * @author Lucas de Oliveira <94oliveira.lucas@gmail.com>
 */
class WeatherRepositoryJson extends RepositoryJson implements WeatherRepository
{
    
    /**
     * {@inheritDoc}
     * @see \ChallengeAccepted\Repository\WeatherRepository::getByLocaleId()
     */
    public function getByLocaleId($localeId)
    {
        if (! filter_var($localeId, FILTER_VALIDATE_INT)) {
            throw new InvalidArgumentException(sprintf('Locale id must be int, "%s" given', gettype($localeId)));
        }

        $weathersFound = [];
        foreach ($this->getAsArray() as $weather) {
            if ($weather['locale']['id'] == $localeId) {
                $weathersFound[] = $weather['weather'];
            }
        }
        
        return $weathersFound;
    }
}
