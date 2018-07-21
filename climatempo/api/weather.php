<?php
class Weather { 
	private $name;
	private $base_locales;
	private $base_weather;

	public function setName($name) { 
		$this->name = $name;
	}

	public function setBaseLocales($base_locales) { 
		$this->base_locales = $base_locales;
	}

	public function setBaseWeather($base_weather) { 
		$this->base_weather = $base_weather;
	}

	public function search() {
		$locatesJson = new Repository();
		$locatesJson->setName($this->base_locales);
		$response = $locatesJson->getJson();
		$city =  $this->searchCity($response);

		if($city != null) {
			$weatherJson = new Repository();
			$weatherJson->setName($this->base_weather);
			$response = $weatherJson->getJson();
			
			for($i = 0; $i < count($response); $i++) {
				if($response[$i]->locale->id == $city->id)
				 	return $response[$i];
			}
		}
		return null; 		
	}

	public function searchCity($cities) {
		for($i=0; $i < count($cities); $i++) {
			$city = strtolower($this->tirarAcentos($cities[$i]->name));
			$citySearch = strtolower($this->tirarAcentos($this->name));

			if($city == $citySearch)
				return $cities[$i];
		}
		return null;
	}

	public function tirarAcentos($string) {
		return preg_replace(array("/(á|à|ã|â|ä)/","/(Á|À|Ã|Â|Ä)/","/(é|è|ê|ë)/","/(É|È|Ê|Ë)/","/(í|ì|î|ï)/","/(Í|Ì|Î|Ï)/","/(ó|ò|õ|ô|ö)/","/(Ó|Ò|Õ|Ô|Ö)/","/(ú|ù|û|ü)/","/(Ú|Ù|Û|Ü)/","/(ñ)/","/(Ñ)/"),explode(" ","a A e E i I o O u U n N"),$string);
	}
}