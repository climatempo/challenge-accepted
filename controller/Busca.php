<?php
namespace controller;

class Busca{

	public function __construct(){
		$app = \Slim\Slim::getInstance();
		$app->post(
		    '/busca',
		    function () use ($app){
		    	$query = $app->request->post('query');
		        //if (empty($query)){ $app->missingfields('Pesquisa');}

		    	$obj = new \model\Previsao();
		    	$obj->busca($query);

		    	$app->contentType('application/json');
				if($obj->result===false){
					echo json_encode(array(
						'result'=>'error',
						'message'=>'Oops, não encontrei essa cidade.<br><i style="color:#FFEB12;text-shadow:1px 1px 1px black;font-size:50px;" class="fa fa-umbrella"></i>',
						'error'=>'not found'
					));
					exit;
	    		}else{
	    			echo json_encode(array(
		    			'result'=>'success',
		    			'data'=>$obj->dados
		    		));
		    		exit;
	    		}
		    }
		);
	}
}
?>