<?php

namespace Slim;
require 'Slim.php';
class SlimREST extends Slim
{
  public static function generateTemplateMarkup($title, $body)
    {
    	$riders = headers_list();
    	$jeison = false;
    	foreach($riders as $r){
    		if (is_string($r) && strpos($r, 'application/json') !== false){
    			$jeison = true;
    		}
    	}
    	if ($jeison){
    		echo json_encode(array(
				'result'=>'error',
				'error'=>$title,
				'html'=>$body
			));
			exit;
    	}else{
        	return sprintf("<html><head><title>%s</title><style>body{margin:0;padding:30px;font:12px/1.5 Helvetica,Arial,Verdana,sans-serif;}h1{margin:0;font-size:48px;font-weight:normal;line-height:48px;}strong{display:inline-block;width:65px;}</style></head><body><h1>%s</h1>%s</body></html>", $title, $title, $body);
        }
    }

    public function contentType($type)
    {
        $this->response->headers->set('Content-Type', $type);
        header('Content-Type: '.$type);
    }


    public function missingfields($campo){
    	$this->contentType('application/json');
         echo json_encode(array(
            'result'=>'error',
            'message'=>'Você precisa enviar o campo '.$campo,
            'error'=>'missing fields'));
         exit;
    }

    public static function autoload($className)
    {
        $thisClass = str_replace(__NAMESPACE__.'\\', '', __CLASS__);

        $baseDir = __DIR__;

        if (substr($baseDir, -strlen($thisClass)) === $thisClass) {
            $baseDir = substr($baseDir, 0, -strlen($thisClass));
        }
        $baseDir = str_replace('\Slim','\\',$baseDir);

        $className = ltrim($className, '\\');
        $fileName  = $baseDir;
        $namespace = '';
        if ($lastNsPos = strripos($className, '\\')) {
            $namespace = substr($className, 0, $lastNsPos);
            $className = substr($className, $lastNsPos + 1);
            $fileName  .= str_replace('\\', DIRECTORY_SEPARATOR, $namespace) . DIRECTORY_SEPARATOR;
        }
        $fileName .= str_replace('_', DIRECTORY_SEPARATOR, $className) . '.php';

        if (file_exists($fileName)) {
            require($fileName);
        }
    }

    /**
     * Register Slim's PSR-0 autoloader
     */
    public static function registerAutoloader()
    {
        spl_autoload_register(__NAMESPACE__ . "\\SlimREST::autoload");
    }


}