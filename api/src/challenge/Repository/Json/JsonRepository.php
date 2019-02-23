<?php

namespace src\challenge\Repository\Json;

class JsonRepository
{
    /** 
     * @var string $jsonFilePath Caminho do arquivo Json 
    */
    private $jsonFilePath;

    public function __construct(string $jsonFilePath)
    {
        if (! file_exists($jsonFilePath)) {
            throw new \InvalidArgumentException(sprintf('File %s not found', $jsonFilePath));
        }
        $this->jsonFilePath = $jsonFilePath;
    }

    public function getAsString()
    {
        return (string) file_get_contents($this->jsonFilePath);
    }

    public function getAsArray(): array
    {
        return (array) json_decode($this->getAsString(), true);
    }
}