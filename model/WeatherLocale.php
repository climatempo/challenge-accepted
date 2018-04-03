<?php
namespace model;

use \lib\php\FileReader as FileReader;

/**
* @name WeatherLocale
*/
class WeatherLocale extends FileReader
{
    private $modelPathFile;
    private $id;
    private $name;
    private $state;
    private $latitude;
    private $longitude;

    public function setId($id)
    {
        $this->id = (int) $id;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setName($name)
    {
        $this->name = (string) $name;
    }
    public function getName()
    {
        return $this->name;
    }

    public function setState($state)
    {
        $this->state = (string) $state;
    }
    public function getState()
    {
        return $this->state;
    }

    public function setLatitude($latitude)
    {
        $this->latitude = (float) $latitude;
    }
    public function getLatitude()
    {
        return $this->latitude;
    }

    public function setLongitude($longitude)
    {
        $this->longitude = (float) $longitude;
    }
    public function getLongitude()
    {
        return $this->longitude;
    }

    public function __construct($id = null)
    {
        $this->setId($id);
        $this->modelPathFile = str_replace('model', '', __DIR__) . 'base/locales.json';

        parent::__construct($this->modelPathFile);
    }

    /*
     * Obtém dados do arquivo e preenche os métodos de acesso.
     * @name setDados
     * @return void
     */
    public function setDados()
    {
        $data = parent::getDataFile();

        foreach ($data as $obj) {

            if ($obj->name == $this->getName()) {

                $this->setId($obj->id);
                $this->setName($obj->name);
                $this->setState($obj->state);
                $this->setLatitude($obj->latitude);
                $this->setLongitude($obj->longitude);

                break;
            }
        }
    }

    /**
     * @listCities
     * @return array Retorna um array com as cidades.
     */
    public function listCities()
    {
        $data = parent::getDataFile();
        $i    = 0;
        $arr  = [];

        foreach ($data as $obj) {
            $arr[$i] = $obj->name;
            ++$i;
        }

        return $arr;
    }
}
