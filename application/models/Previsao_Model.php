<?php
class Previsao_model extends CI_Model {

     public function __construct()
    {
        parent::__construct();
        $this->load->helper('file');
        $this->load->helper('url');
    }


    public function locales() {

	    // Carregando locales
	    $urlLocales = base_url().'/base/locales.json'; // path to your JSON file
		$dataLocales = file_get_contents($urlLocales); // put the contents of the file into a variable
		$locales = json_decode($dataLocales); // decode the JSON feed

		return $locales;

    }

    public function weather(){

	    // Carregando weather
	    $urlWeather = base_url().'base/weather.json'; // Caminho do arquivo JSON
		$dataWeather = file_get_contents($urlWeather); // Passando o JSON para uma variavel
		$weather = json_decode($dataWeather); // decode JSON  

		return $weather;

    }


 }

