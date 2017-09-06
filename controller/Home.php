<?php
namespace controller;

class Home{
	public function __construct(){
		$app = \Slim\Slim::getInstance();
		$app->get(
		    '/',
		    function () use ($app){

		    	$app->render(
				    'index.php',
				    array('title'=>'Home',
				    	'app'=>&$app
				    	)
				);
		    }
		);

	}
}
?>