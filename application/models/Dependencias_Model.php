<?php
class Dependencias_Model extends CI_Model {

     public function __construct()
    {
        parent::__construct();
        $this->load->helper('file');
    }

    public function dependenciasList() {

    	// Declarando variaveis 
		$assets = array();
		$missingFiles = array();

		// Matriz Array dos assets
		$assets = array(
		"folders" => array( 1 => array("path" => "node_modules", "exist" => file_exists("node_modules")) ), // pasta do Node_Modules

		"files"	 => array(
			"bootstrap-css" =>	array("path" => "node_modules/bootstrap/dist/css/bootstrap.min.css", "exist" => file_exists("node_modules/bootstrap/dist/css/bootstrap.min.css") ),

			"animate-css" =>	array("path" => "node_modules/animate.css/animate.min.css", "exist" => file_exists("node_modules/animate.css/animate.min.css") ),

			"toastr-css" =>	array("path" => "node_modules/toastr/build/toastr.min.css", "exist" => file_exists("node_modules/toastr/build/toastr.min.css") ),

			"jQuery-UI-css" =>	array("path" => "node_modules/jquery-ui-dist/jquery-ui.structure.min.css", "exist" => file_exists("node_modules/jquery-ui-dist/jquery-ui.structure.min.css") ),

			"jQuery-UI-theme" =>	array("path" => "node_modules/jquery-ui-dist/jquery-ui.theme.min.css", "exist" => file_exists("node_modules/jquery-ui-dist/jquery-ui.theme.min.css") ),


			"jQuery" =>	array("path" => "node_modules/jquery/dist/jquery.min.js", "exist" => file_exists("node_modules/jquery/dist/jquery.min.js") ),

			"bootstrap-js" =>	array("path" => "node_modules/bootstrap/dist/js/bootstrap.min.js", "exist" => file_exists("node_modules/bootstrap/dist/js/bootstrap.min.js") ),

			"jQuery-UI-js" =>	array("path" => "node_modules/jquery-ui-dist/jquery-ui.min.js", "exist" => file_exists("node_modules/jquery-ui-dist/jquery-ui.min.js") ),

			"toastr-js" =>	array("path" => "node_modules/toastr/build/toastr.min.js", "exist" => file_exists("node_modules/toastr/build/toastr.min.js") ),

			),

		"missing" => array()

		);

		return $assets;	
    }


 }

