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
}
