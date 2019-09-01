<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Previsao_Controller extends CI_Controller {

	 public function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('url');
        $this->load->model('Previsao_Model','Model');
    }

    public function import()
    {
    	// Criando Variaveis
    	$data = array();
    	$data["assets"] = array();
    	$data["css"] = array();
    	$data["js"] = array();

    	// Carregando JSON FROM URL 
		$output = file_get_contents(base_url().'dependencias/output');
		$data["assets"] = json_decode($output, true);

		// Separando assets CSS e JS
		foreach ($data["assets"]["files"] as $file)
				{
					if(preg_match('/.css/', $file["path"])) {
						array_push($data["css"], $file["path"]);
						
					} 

					else if(preg_match('/.js/', $file["path"])) {
						array_push($data["js"], $file["path"]);
					}

				}
				
		return $data;
    }

	public function index()
	{	
		$data = $this->import();

		// Verificando se não possui nenhum assets faltando
		if (!empty($data["assets"]["missing"])) {
			      redirect(base_url().'dependencias');
			}

		// Carregando a view
		$this->load->view('template/header', $data);	
		$this->load->view('template/footer', $data);	
		$this->load->view('Previsao_View');
	}


	public function result() {
  	header('Content-type:application/json;charset=utf-8'); // Declarando header

  	// Caso venha POST
 	 if(isset($_POST) && $_POST) { 
  	// Caso venha o input location  
  	if ($_POST['location']) {

	// declarando variaveis 
    $location = $_POST['location'];

	// Cerregando dados da model
	$weather = $this->Model->weather();

	// prepare once
	$indexed = array();
	foreach ($weather as $object) {
	    $indexed[$object->locale->name] = $object;
	}

	$response = array();
	// lookup often
	if (isset($indexed[$location])) {

	   $response = $indexed[$location];

	} else {
		$response = array("status" => false, "msg" => 'Não foi possivel encontrar esta cidade na nossa base de dados.', "city" => $location);
	}

	//	print_r($response);
	$output = json_encode($response, JSON_UNESCAPED_UNICODE);
	print_r($output);

	 }


	 } else { // else $_POST
	  echo "Não veio POST";
	 }


	}

	public function query() {
	header('Content-type:application/json;charset=utf-8'); // Declarando header

  	// Caso venha POST
  	if(isset($_POST) && $_POST) { 
  	// Caso venha o input location  
  	if ($_POST['location']) {

	// declarando variaveis 
    $location = $_POST['location'];

    // Cerregando dados da model
	$locales = $this->Model->locales();

	// prepare once
	$indexed = array();
	foreach ($locales as $object) {
	    $indexed[$object->name] = $object;
	}

	$response = array();
	// lookup often
	if (isset($indexed[$location])) {
	   $response = array("status" => true, "msg" => 'Cidade encontrada com sucesso', "city" => $location);
	} else {
		$response = array("status" => false, "msg" => 'Não foi possivel encontrar esta cidade na nossa base de dados.', "city" => $location);
	}

	// Imprimindo result 
	$output = json_encode($response, JSON_UNESCAPED_UNICODE);
	print_r($output);

 }


 } else { // else $_POST
  echo "Não veio POST";
 }

	}



}
