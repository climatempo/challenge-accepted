<?php

namespace src\challenge\Repository\Json;

class JsonRepository
{
    /** 
     * @var string $jsonFilePath - Path of the Json file that contains the data
     */
    private $jsonFilePath;

    public function __construct(string $jsonFilePath)
    {
        if (!file_exists($jsonFilePath)) {
            throw new \InvalidArgumentException(sprintf('File %s not found', $jsonFilePath));
        }
        $this->jsonFilePath = $jsonFilePath;
    }

    /**
     * Returns the json file content as a string
     * @return string
     */
    public function getJsonContentAsString() : string
    {
        return (string)file_get_contents($this->jsonFilePath);
    }

    /**
     * Return the Json content as Array
     * @return array
     */
    public function getJsonContentAsArray() : array
    {
        return (array)json_decode($this->getJsonContentAsString(), true);
    }
}