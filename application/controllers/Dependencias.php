<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dependencias extends CI_Controller {

	 public function __construct()
    {
        parent::__construct();
        $this->load->helper('file');
        $this->load->model('Dependencias_Model','Model');
    }

    public function check() {
    	$assets = $this->Model->dependenciasList();

			if (file_exists($assets["folders"][1]["path"])) {

				foreach ($assets["files"] as $file)
				{
					
					if(!$file["exist"]) {
					array_push($assets["missing"], $file["path"]);
					}	

				}

			} else {

			    array_push($assets["missing"], $assets["folders"][1]["path"]);
			    foreach ($assets["files"] as $file)
				{
					
					if(!$file["exist"]) {
					array_push($assets["missing"], $file["path"]);
					}	

				}
			}
		
		return $assets;

    }


	public function index()
	{
		$assets = $this->check();

		if (empty($assets["missing"])) {
			      redirect('/previsao');
			}
					
		$this->load->view('dependencias', $assets);

	}

	public function output() {
		header("Content-Type: application/json");

		$assets = $this->check();
		$json = json_encode($assets, JSON_PRETTY_PRINT);
		print_r($json);

	}

}
