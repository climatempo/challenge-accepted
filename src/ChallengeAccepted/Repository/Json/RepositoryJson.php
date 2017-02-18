<?php

namespace ChallengeAccepted\Repository\Json;

use InvalidArgumentException;

/**
 * @author Lucas de Oliveira <94oliveira.lucas@gmail.com>
 */
abstract class RepositoryJson
{
   
    /**
     * @var string
     */
    private $jsonFilePath;
    
    /**
     * @param string $jsonFilePath
     * @throws InvalidArgumentException
     */
    public function __construct($jsonFilePath)
    {
        if (! file_exists($jsonFilePath)) {
            throw new InvalidArgumentException(sprintf('File %s not found', $jsonFilePath));
        }
        $this->jsonFilePath = $jsonFilePath;
    }
    
    /**
     * @return string
     */
    public function getRawContent()
    {
        return (string) file_get_contents($this->jsonFilePath);
    }
    
    /**
     * @return array
     */
    public function getAsArray()
    {
        return (array) json_decode($this->getRawContent(), true);
    }
}
