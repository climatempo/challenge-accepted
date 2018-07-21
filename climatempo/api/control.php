<?php 
Class Control {
	private $city;

	public function setCity($city) {
		$this->city = $city;
	}

	public function search() {
		if($this->city != null) {
			$locate = new Weather();
			$locate->setName($this->city);
			$locate->setBaseLocales(BASE_LOCATES);
			$locate->setBaseWeather(BASE_WEATHER);

			$cityFound = $locate->search();

			if($cityFound != null) {
				$mensagem = "Previsão do tempo para {$cityFound->locale->name} - {$cityFound->locale->state}";
				$data = $cityFound;
				$this->response(200, $mensagem, $data);
			}
			else
				$this->response(404,"Cidade não encontrada", null);
		}
		else
			$this->response(403,"Acesso negado", null);
	}

	public function response($status, $status_message, $data) {
		$response['status'] = $status;
		$response['status_message'] = $status_message;
		$response['data'] = $data;
		echo json_encode($response);
	}
}

require_once("config.php");
require_once("repository.php");
require_once("weather.php");

$city = (isset($_POST['city'])? $_POST['city'] : null);

$control = new Control();
$control->setCity($city);
$control->search();