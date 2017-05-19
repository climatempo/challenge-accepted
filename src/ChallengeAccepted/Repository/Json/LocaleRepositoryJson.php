<?php

namespace ChallengeAccepted\Repository\Json;

use ChallengeAccepted\Repository\LocaleRepository;
use InvalidArgumentException;

/**
 * @author Lucas de Oliveira <94oliveira.lucas@gmail.com>
 */
class LocaleRepositoryJson extends RepositoryJson implements LocaleRepository
{
    
    /**
     * {@inheritDoc}
     * @see \ChallengeAccepted\Repository\LocaleRepository::getBySimilarName()
     */
    public function getBySimilarName($name)
    {
        if (! is_string($name)) {
            throw new InvalidArgumentException(sprintf('Name must be string, "%s" given', gettype($name)));
        }
        
        $localesFound = [];
        foreach ($this->getAsArray() as $locale) {
            if (strpos(strtolower($locale['name']), strtolower($name)) !== false) {
                $localesFound[] = $locale;
            }
        }
        
        return $localesFound;
    }
    
    /**
     * {@inheritDoc}
     * @see \ChallengeAccepted\Repository\LocaleRepository::getAll()
     */
    public function getAll()
    {
        return $this->getAsArray();
    }
}
