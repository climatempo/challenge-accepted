<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Previsao extends CI_Controller {

	public function index()
	{
		$this->load->view('Previsao_View');
	}
}
