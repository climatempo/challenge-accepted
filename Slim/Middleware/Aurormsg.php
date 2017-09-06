<?php
namespace Slim\Middleware;
class Aurormsg extends \Slim\Middleware
{
	public $flashnowcalled = false;

    public function call()
    {
        //The Slim application
        $app = $this->app;

        //$app->auror = $this;

        //The Environment object
        $env = $app->environment;
        $env['slim.auror'] = $this;

        //The Request object
        $req = $app->request;

        //The Response object
        $res = $app->response;

        @session_start();


        if (!isset($_SESSION['aurormsg'])){
            $_SESSION['aurormsg']=array('prev'=>array(),'now'=>array(),'next'=>array());
        }else{
            $_SESSION['aurormsg']['prev'] = $_SESSION['aurormsg']['now'];
            $_SESSION['aurormsg']['now'] = $_SESSION['aurormsg']['next'];
            $_SESSION['aurormsg']['next'] = array();
        }

        $this->inject();

        $this->next->call();
    }

    protected function inject($noo = false){
    	$app = \Slim\Slim::getInstance();
	    $app->view->setData(array('auror' => $_SESSION['aurormsg']['now']));
    }

    public function flash($chave,$msg){
        $_SESSION['aurormsg']['next'][$chave]=$msg;
        $this->inject();
        return true;
    }
    public function flashNow($chave,$msg){
        $_SESSION['aurormsg']['now'][$chave]=$msg;
        $this->inject('asd');
        return true;
    }
    public function flashRepeat(){
        $_SESSION['aurormsg']['next'] = $_SESSION['aurormsg']['now'];
        $_SESSION['aurormsg']['now'] = $_SESSION['aurormsg']['prev'];
        $this->inject();
        return true;
    }

}