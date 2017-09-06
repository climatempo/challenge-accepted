<?php
namespace model;
class Previsao extends sistema{

	public $erro_bonito = null;
	public $porpagina = 10;
	public $pagina = 1;

	protected $permite_html = array('');

	public function __construct(){
		$locales = json_decode(file_get_contents('base/locales.json'),true);
		$this->locales = array();
		foreach($locales as $cidade){
			$this->locales[mb_strtolower($cidade['name'])]=$cidade;
		}
	}

	public function busca($query = ''){
		$query = mb_strtolower($query);
		if (!isset($this->locales[$query])){
			$this->dados = array();
			$this->result = false;
		}else{
			$this->weather = json_decode(file_get_contents('base/weather.json'),true);
			$this->result = true;
			foreach($this->weather as $tempo){
				if ($tempo['locale']['id']==$this->locales[$query]['id']){
					$this->dados = $tempo;
				}
			}
		}

		return $this;
	}

}