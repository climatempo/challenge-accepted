<?php
require 'config.php';
require 'functions.php';
require 'Slim/SlimREST.php';


///////SETUP
\Slim\SlimREST::registerAutoloader();

///////////////DEFINE PATHS AND CALL SLIM
set_include_path(get_include_path() . PATH_SEPARATOR . 'view/default/');
$app = new \Slim\SlimREST(array('templates.path' => './view/default/'));
$app->add(new \Slim\Middleware\Aurormsg());

///////////////Get request object
$real = $app->request->getRootUri();
$real = str_replace('/index.php', '', $real);
define('RAIZ', $real);
define('VIEW', RAIZ . '/view/default/');
$url = $app->request->getResourceUri();
define('ATUAL',$url);

if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
	define("AJAX",true);
}else{
	define("AJAX",false);
}

$app->setName(APPNAME);
header("access-control-allow-origin: *");

//só carrega o controller chamado
//exemplo "/empresa/6697" vai dar include no controller/Empresa.php através do autoload
$controle = explode('/',$app->request()->getResourceUri());

if (is_array($controle) && count($controle)>1){
	$controle = $controle[1];
	if (is_string($controle)){
		$controle = preg_replace('/[^a-z]/i', '', $controle);
		$controle = ucfirst($controle);
		if ($controle==''){
			$controle = 'Home';
		}
		$controle = "\controller\\".$controle;
    	if (class_exists($controle)){
    		$controle = new $controle;
    	}
    }
}
$app->notFound(function () use ($app) {
    $app->render('404.php');
});
$app->run();