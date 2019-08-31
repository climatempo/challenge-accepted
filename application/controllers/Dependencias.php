<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dependencias extends CI_Controller {

	 public function __construct()
    {
        parent::__construct();
        $this->load->helper('file');
    }


	public function index()
	{
		// Declarando variaveis 
		$assets = array();
		$missingFiles = array();

		// Matriz Array dos assets
	$assets = array(
	"folders" => array( 1 => array("path" => "node_modules", "exist" => file_exists("node_modules")) ), // pasta do Node_Modules

	"files"	 => array(
		"animatecss" =>	array("path" => "node_modules/animate.css/animate.min.css", "exist" => file_exists("node_modules/animate.css/animate.min.css") ),

		"bootstrap-css" =>	array("path" => "node_modules/bootstrap/dist/css/bootstrap.min.css", "exist" => file_exists("node_modules/bootstrap/dist/css/bootstrap.min.css") ),

		"bootstrap-js" =>	array("path" => "node_modules/bootstrap/dist/js/bootstrap.min.js", "exist" => file_exists("node_modules/bootstrap/dist/js/bootstrap.min.js") ),

		"jquery" =>	array("path" => "node_modules/jquery/dist/jquery.min.js", "exist" => file_exists("node_modules/jquery/dist/jquery.min.js") ),

		"jquery-ui-js" =>	array("path" => "node_modules/jquery-ui-dist/jquery-ui.min.js", "exist" => file_exists("node_modules/jquery-ui-dist/jquery-ui.min.js") ),

		"jquery-ui-css" =>	array("path" => "node_modules/jquery-ui-dist/jquery-ui.structure.min.css", "exist" => file_exists("node_modules/jquery-ui-dist/jquery-ui.structure.min.css") ),

		"jquery-ui-theme" =>	array("path" => "node_modules/jquery-ui-dist/jquery-ui.theme.min.css", "exist" => file_exists("node_modules/jquery-ui-dist/jquery-ui.theme.min.css") ),

		),

	"missing" => array()

	);	

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

			if (empty($assets["missing"])) {
			      redirect('/previsao');
			}
					
		$this->load->view('dependencias', $assets);

	}
}
