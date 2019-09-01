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


	public function index()
	{	// Carregando JSON FROM URL 
		$output = file_get_contents(base_url().'dependencias/output');
		$assets = json_decode($output, true);

		// Verificando se não possui nenhum assets faltando
		if (!empty($assets["missing"])) {
			      redirect(base_url().'dependencias');
			}
			
		// Carregando a view
		$this->load->view('Previsao_View', $assets);
	}
}
