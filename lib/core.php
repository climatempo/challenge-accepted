<?php
namespace abox;
@session_start();
@date_default_timezone_set('America/Sao_Paulo');

require_once "constants.php";

class Exception extends \Exception {}

class Response{
    private $status_;
    private $data_;
    public function status($s=null){ if($s!==null) $this->status_=(bool)$s; return (bool)$this->status_; }
    public function data($d=null){ if($d!==null) $this->data_=$d; return $this->data_; }
    public function __construct($s=AB_FAILURE,$d=null){
        $this->status_ = $s;
        $this->data_ = $d;
    }
}

// stdobject to array
function otoa($o){
    $r = (array)$o;
    foreach($r as $k => $v){ if(is_object($v)) $v = otoa($v); }
    return $r;
}

function atoo($a){
    if(!is_array($a)){ return json_decode(json_encode(["error"=>"argument is not an array()"])); }
    //print_r($a);
    foreach($a as $k=>$v)
    {
        if(is_array($v)) $a[$k] = atoo($v);
    }
    return json_decode(json_encode($a));
}

function atoh($a=null){
    if(!$a) return 0;
    if(is_object($a)) $a = otoa($a);
    if(gettype($a)=="array"){
        $t = "";
        foreach($a as $k=>$v){
            if(is_array($a[$k])) $t.=atoh($a[$k]);
            else $t.=str_replace(" ","+",$k)."=".str_replace(" ","+",$v)."&";
        }
        return substr($t,0,strlen($t)-1);
    }
    return 0;
}

function noAccents($s){
    return strtolower(trim(preg_replace('~[^0-9a-z]+~i', '-', preg_replace('~&([a-z]{1,2})(acute|cedil|circ|grave|lig|orn|ring|slash|th|tilde|uml);~i', '$1', htmlentities($s, ENT_QUOTES, 'UTF-8'))), ' '));
}

/* sets or gets information under root/.conf/ folder, each parameter is stored into a separated file
 * $f = file
 * $v = value // used only for SET case
 * ex.: 
 * conf("user","rafsb") will SET 'rafsb' to a file (root)/.conf/user.cfg
 * conf("user") will read it and return "rafsb"
 */
function conf($f=null,$v=null){
    $p = root("etc/conf.json",AB_FILE);
    if($f!==null){
        $t = @\json_decode(@\file_get_contents($p));
        //var_dump($v);
        //print_r($t);
        if($v!==null){
            //var_dump($t);
            if(isset($t->$f)) $t->$f = $v;
            else $t->{$f} = $v;
            @\file_put_contents($p,json_encode($t, JSON_PRETTY_PRINT));
            return 1;
        }else{
            if(isset($t->$f)) return $t->$f;
            else return -1;
        }
    }else return @\json_decode(@\file_get_contents($p));
    return 0;
}

/* loads content from (root)/schema.json as an JSON
 * although can be used to SET values to
 * $f = JSON's field
 * $v = value // used only for SET case
 */
function schema($f=null,$v=null){
    $p = root("etc/schema.json",AB_FILE);
    //print_r($p);
    //print_r(json_decode(file_get_contents($p)));
    if($f!==null){
        $t = \json_decode(\file_get_contents($p));
        //var_dump($v);
        //print_r($t);
        if($v!==null){
            //var_dump($t);
            if(isset($t->$f)) $t->$f = $v;
            else $t->{$f} = $v;
            \file_put_contents($p,\json_encode($t, JSON_PRETTY_PRINT));
            return 1;
        }else{
            if(isset($t->$f)) return $t->$f;
            else return -1;
        }
    }else return \json_decode(\file_get_contents($p));
    return 0;
}

/* signature: root('pag/welcome.php'), returns 'path/to/root/pag/welcome.php'
 * $p = path relative to project's rot folder
 * $d = defines if you are refereing a file or a folder as AB_FILE or AB_FOLDER (default)
 */
function root($p=null,$d=AB_FOLDER,$r=AB_NORECURSIVE){ 
    if($p!==null) $p = (strpos("/",$p)==0?substr($p,0):$p);
    $tmp = __DIR__;
    while(!file_exists($tmp."/.ROOT")) $tmp.="/..";
    $tmp .= "/".($p!==null?$p:"");
    if($d===AB_FOLDER){
        if(substr($tmp, strlen($tmp) - 1, 1) != "/") $tmp .= "/";
        umask(0002);
        if($r && !is_dir($tmp)) mkdir($tmp,0777,true);
        //print_r($tmp);
    }
    if($d===AB_FILE && substr($tmp, strlen($tmp) - 1, 1) == "/") { $tmp = substr($tmp, 0, strlen($tmp) - 1); }
    return $tmp;
}

function log($t=null){
    if(!$t) return null;
    //print_r($t);
    return file_put_contents(root("log.txt",AB_FILE), $t.PHP_EOL , FILE_APPEND | LOCK_EX);
}


/***** FUNCTIONS *****/
/* signature: jin('var/config.json', ["user"=>"rafsb","name"=>"Rafael Bertolini"]);
 * saves an array or stdObject in JSON format on a file on server
 * $p = path to save the file with archive name
 * $0 = an array() or stdObeject to be saved
 *
 */


// returnd a 32 bytes unique character sequence, used as code for example
function get_hash(){ return \md5(\uniqid(\rand())); }


/* perform a hash into the given argument returning a 64 lengh string
 * ex.: hash_it("password"), will return: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"
 */
function hash_it($h=0){ return \hash("sha256",$h); }


## perform isertion into $_SESSION array, giving values to new fields
## on success case, it returns the given value, else 0 is the answer
## i.e: sess("us\er","abox"), is the same as $_SESSION["projectName_user"] = "abox"
function sess($f,$v=null){
    $t=null;
    switch($f){
        case(USER): $t="USER"; break;
        case(UUID): $t="UUID"; break;
        case(CUID): $t="CUID"; break;
        case(HTTP): $t="HTTP"; break;
    };
    $f = $t?$t:$f;
    //$_SESSION["DEBUG"] = "|SESS-".$f."-".$v."|";
    if($v!==null) $_SESSION[$f] = $v;
    return (isset($_SESSION[$f]) ? $_SESSION[$f] : null);
}

function usess($f){
    $t = null;
    switch($f){
        case(USER): $t="USER"; break;
        case(UUID): $t="UUID"; break;
        case(CUID): $t="CUID"; break;
        case(HTTP): $t="HTTP"; break;
    };
    $f = $t?$t:$f;
    //$_SESSION["DEBUG"] = "|SESS-".$f."-".$v."|";
    if(isset($_SESSION[$f])) unset($_SESSION[$f]);
}


## perform isertion into $_COOKIE array, giving values to new fields
## on success case, it returns the given value, else 0 is the answer
## i.e: cook("user","abox"), is the same as $_SESSION["projectName_user"] = "abox"
function cook($f,$v=null){
    $t=null;
    switch($f){
        case(USER): $t="USER"; break;
        case(UUID): $t="UUID"; break;
        case(CUID): $t="UUID"; break;
    }
    $f = $t?$t:$f;
    $pn = conf('project_name');
    sess(DEBUG,sess(DEBUG)."|COOK-".$pn."_".$f."-".$v."|");
    if($v!==null) setcookie($pn."_".$f,$v,(int)(1000*60*60*30*365),"/");
    return (isset($_COOKIE[$pn."_".$f])?$_COOKIE[$pn."_".$f]:0);
}

## reads the $_POST array arguments into the page it"s included, but not all of them, only those inside "obj"
## "obj" is the parameter that works like a bridge from fn.js to fn.php
## $_POST["obj"] may contain many conn inside, passing a argument, it return the selected field, if it"s setted
function in($f=null){
    $tmp = otoa(json_decode(file_get_contents("php://input")));
    if($f!==null){
        if(isset($tmp["obj"])) return (!empty($tmp["obj"][$f]) ? $tmp["obj"][$f] : null);
        else return(!empty($tmp[$f]) ? $tmp[$f] : null);
    }else{
        if(!empty($tmp["obj"])) return $tmp["obj"];
        else return(!empty($tmp) ? $tmp : null);
    }
}

## reads the $_POST array arguments into the page it"s included, but not all of them, only those inside "obj"
## "obj" is the parameter that works like a bridge from fn.js to fn.php
## $_POST["obj"] may contain many conn inside, passing a argument, it return the selected field, if it"s setted
function post($f=null)
{
    if($f!==null)
        if(isset($_POST["obj"])) return (!empty($_POST["obj"][$f]) ? $_POST["obj"][$f] : null);
        else return(!empty($_POST[$f]) ? $_POST[$f] : null);
    else
        if(!empty($_POST["obj"])) return $_POST["obj"];
        else return $_POST?$_POST:null;
}


function get($f=null){
    if($f!==null) return (isset($_GET[$f]) ? $_GET[$f] : null);
    else return(isset($_GET) ? $_GET : null);
}


function jin($p=null,$o=null)
{
    $s = false;
    if($p && $o){
        $f = fopen($p,'w');
        if(fwrite($f,json_encode($o,JSON_PRETTY_PRINT))){ $s = 1; }
        fclose($f);
    }
    return $s;
}

/* signature: jin('var/config.json');
 * reads a JSON object from file on server
 * $p = path to save the file with archive name
 *
 */
function jout($p){ return json_decode(file_get_contents($p,AB_FILE)); }


/* signature: get_files('img/',"png");
 * get all files within a given folder, but "." and ".."
 * selecting only those with extension as $ext, if present
 * $p = path to the folder to be scanned
 * $x = file's extension to be supressed
 *
 */
function get_files($folder=null,$extension=null){
    if($folder===null || !@\is_dir($folder)) return [];
    $tmp = @\scandir($folder);
    $result = [];
    if($tmp){
        foreach($tmp as $t){
            if(!($t=="." || $t=="..")){
                if($extension!==null){ if(substr($t,strlen($extension)*-1)==$extension) $result[] = $t; }
                else $result[] = $t;
            }
        }
    }
    return $result;
}

/* signature: rem_folder('var/config.json');
 * removes a folder even if not empty
 * $p = path to the folder to be removed from server
 *
 */
function rem_folder($p=0){
    if(!$p || !\is_dir($p)) return;
    //print_r($p);
    if(substr($p,strlen($p)-1)!=="/") $p .= "/";
    $files = \glob($p.'*', GLOB_MARK);
    foreach($files as $file){
        if (\is_dir($file)) rem_folder($file);
        else \unlink($file);
    }
    if(\is_dir($p)) \rmdir($p);
}

/* signature: rem_file('var/config.json');
 * removes only a single file, not a folder
 * $p = path to the file to be removed from server
 *
 */
function rem_file($p=null){ if($p===null) return; return \unlink($p); }
