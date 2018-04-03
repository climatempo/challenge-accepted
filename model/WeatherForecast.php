<?php
namespace model;

use \lib\php\FileReader as FileReader;

/**
* Classe responsável pela manipulação de dados de previsão do tempo.
* @package Model
* @name WeatherForecast
* @extends FileReader
*/
class WeatherForecast extends FileReader
{
    /**
     * $modelPathFile path da localização dos dados de Previsão do tempo.
     * @var string
     */
    private $modelPathFile;

    private $idLocale;

    private $weather;

    public function setIdLocale($idLocale)
    {
        $this->idLocale = (int) $idLocale;
    }
    public function getIdLocale()
    {
        return $this->idLocale;
    }

    public function setWeather($weather)
    {
        $this->weather = (array) $weather;
    }

    public function getWeather()
    {
        return $this->weather;
    }

    public function __construct($idLocale)
    {
        $this->setIdLocale($idLocale);
        $this->modelPathFile = str_replace('model', '', __DIR__) . 'base/weather.json';

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
            $idLocale = isset($obj->locale->id) ? $obj->locale->id : 0;

            if ($idLocale == $this->getIdLocale()) {
                $this->setWeather($obj->weather);

                break;
            }
        }
    }
}
