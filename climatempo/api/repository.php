<?php

class Repository {
    private $name;

    public function setName($name) {
        $this->name = $name;
    }

    public function getJson() {
        $jsonFile = file_get_contents($this->name);   
        return  json_decode($jsonFile);
    }
}