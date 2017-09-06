<?php
namespace model;

class sistema extends mysqlucas
{

    protected $ordem = array();

    protected $permite_html = array();

    public function __construct($host=null,$user=null,$pass=null,$db=null)
    {
    	if ($host==null){
			parent::__construct(HOST, USER, PASS, DB);
    	}else{
			parent::__construct($host,$user,$pass,$db);
    	}
    }

    public function __set($name, $value)
    {
        $this->$name = $value;
    }

    public function __isset($var)
    {
        return isset($this->$var);
    }

    public function __get($var)
    {
        if (isset($this->$var) && (is_array($this->$var) || is_object($this->$var))) {
            return $this->$var;
        }
        if (!isset($this->$var)) {
            return null;
        }
        if (in_array($var, $this->permite_html)) {
            $this->$var = preg_replace("/<script.*?\/script>/s", "", $this->$var) ?: $this->$var;
            $this->$var = str_replace('onclick="', 'data-onclick="', $this->$var);
            $this->$var = str_replace("onclick='", "data-onclick='", $this->$var);
            return $this->$var;
        }
        return htmlspecialchars($this->$var, ENT_QUOTES, 'UTF-8');
    }

    public function arrumarreio(&$array)
    {
    	if (empty($array)){ $array = array();return;}
    	if (!isset($array[0])){ $array = array();return;}
    	if (empty($array[0])){ $array = array();return;}

        foreach ($array as &$linha) {
            foreach ($linha as $campo => $valor) {
                if (in_array($campo, $this->permite_html)) {
                    $linha[$campo] = preg_replace("/<script.*?\/script>/s", "", $linha[$campo]) ?: $linha[$campo];
                    $linha[$campo] = str_replace('onclick="', 'data-onclick="', $linha[$campo]);
                    $linha[$campo] = str_replace("onclick='", "data-onclick='", $linha[$campo]);
                } else {
                	if (!isset($this->strip)){
	                	$linha[$campo] = htmlspecialchars($linha[$campo], ENT_QUOTES, 'UTF-8');
                	}else{
	                	$linha[$campo] = strip_tags($linha[$campo]);
                	}
                }
            }
        }
    }

    //seta o valor das variaveis
    public function set($var, $value)
    {
        $this->$var = $value;
        return $this;
    }

    public function setOrdem($campo, $direcao)
    {
        $this->ordem['campo']   = $campo;
        $this->ordem['direcao'] = $direcao;
        return $this;
    }



}
