<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use \Exception;
use \DateTime;

class LoaderJson extends Model
{
    /**Atributo para armazenamento dos dados */
    private $data = [];

    /** Na instância da classe já carrego os dados do arquivo JSON */
    public function __construct()
    {
        $this->LoadData();
        $this->DateFix();
    }
    /**
     * Método privado onde faz a leitura do arquivo JSON.
     * e carrega os dados na classe.
     */
    private function LoadData()
    {
        $env = Storage::disk('jsonDatabase');
        if ($env->exists('weather.json')) {
            $content = $env->get('weather.json');
            $this->data = json_decode($content);
        } else {
            throw new Exception("Error loading file.json", 1);
        }
    }

    /**
     *  Faço o filtro pelo nome da cidade e retorno os dados de acordo com cidade
     *  digitada pelo usuário. 
     *  retorna um Array com os dados de previsão
     *  ou nulo caso não encontre a cidade.
     */
    public function FilterDataCityName($cityName)
    {
        for ($i=0; $i < count($this->data); $i++) { 
            if ($this->data[$i]->locale->name == $cityName) {
                return [ $this->data[$i]->locale, $this->data[$i]->weather ];
            }
        }
        return null;
    }

    /**
     * Faço o tratamento da data no vetor aonde eu extraio os dados.
     * retorna a Matriz com a data Formatada.
     */
    private function DateFix()
    {
        for ($i=0; $i < count($this->data); $i++) { 
          for ($j=0; $j < count($this->data[$i]->weather); $j++) { 
              $this->data[$i]->weather[$j]->date = date_format(new DateTime($this->data[$i]->weather[$j]->date), 'd/m/Y');
          }
        }
        return $this->data;
    }
}
