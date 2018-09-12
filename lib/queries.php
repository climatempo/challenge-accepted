<?php
namespace abox;
require_once 'core.php';


## returns a mysqli->mysql valid, based on conn() conn, or 0 if the mysql failed
## usage: $result = mysql()->query('SQL QUERY HERE')
function conn()
{
    $tmp = conf();
    //print_r($tmp);
    $c = new \mysqli($tmp->mysql_host,$tmp->mysql_user,$tmp->mysql_pswd,$tmp->mysql_database);
    $c->set_charset("utf8");
    if($c->connect_error) return -1;
    return $c;
}


## perform a query into local mysql database based on mysql()
## it can perform any query string, althogh is designed to work better with
## insertions Queries (i.e: qin('INSERT INTO table VALUES('...','...'))
## return 1 for success query and 0 as it fails
function qin($q=0){
    if(!$q) return 0;
    $c = conn();
    if($c->query($q)){ 
        if(strpos(strtolower($q),"insert")!==false) $_SESSION["MYSQL_LAST_INSERTED_ID"] = $c->insert_id; 
        return 1; 
    }
    else return 0;
}


## perform a query into local mysql database based on mysql()
## it can perform any query string, althogh is designed to work better with
## selections Queries (i.e: qio('SELECT * FROM table')
## return 1 if some register matches the search query and 0 as it fails
function qio($q=0,$w=0){
    if($q && strpos(strtolower($q), "select")>=0){
        $r = qout($q);
        //print_r($r);
        if($r->status() && $r->data() && $r->data()->num_rows) return (int)($w ? $r->data()->num_rows : 1);
        else return 0;
    }
    return -1;
}


## perform a query into local mysql database based on mysql()
## it can perform any query string, althogh is designed to work better with
## selections Queries (i.e: qio('SELECT * FROM table')
## return the entire object mysql::result_object if some register matches the search query and 0 as it fails
## usage: $result = qout('SELECT * FROM table')
function qout($q=false,$f=AB_MYSQLI_OBJ){
    $r = new Response();
    if($q && (strpos(strtolower($q),"select")>=0)){
        //echo "is select";
        $t = (conn())->query($q);
        //print_r($t);
        if(gettype($t)=="object" && $t->num_rows){
            //echo "has rows";
            $data = null;
            switch($f){
                case(AB_ASSOC)     : { $data = (array)$t->fetch_assoc(); }                                                      break;
                case(AB_ARRAY)     : { $data = []; while($nt = $t->fetch_assoc()) $data[] = $nt; }                              break;
                case(AB_JSON)      : { $data = []; while($nt = $t->fetch_assoc()) $data[] = $nt; $data = json_encode($data); }  break;
                case(AB_OBJECT)    : { $data = atoo($t->fetch_assoc()); }                                                       break;
                case(AB_MYSQLI_OBJ): { $data = $t; }                                                                            break;
            }
            //print_r($data);
            $r->status(AB_PASS);
            $r->data($data?$data:atoo(["error"=>"empty data"]));
            //print_r($r);
        }
    }
    //print_r($r);
    return $r;
}

function qarr($q=0){
    if(!$q) return -1;
    $t = qout($q);
    if($t && $t->num_rows) return $t->fetch_array();
    return 0;
}


## return a value from a single cell into the mysql result query, if it matches, else return 0
## $t: indicates the table wich it will search for a register
## $f: inform what cell exatanly it will read
## $r: stands for restrictions, as 'code=1', if it argument is blank, the result may be unlike your which
## because the first matched row's cell will be returned
function qcell($t,$f,$r=null){
    if(!$r) $r="code='".user()."'";
    $a = qout("select $f from $t where $r",AB_OBJECT);
    //print_r("select $f from $t where $r");
    $a = ($a->status()?(isset($a->data()->{$f})?$a->data()->{$f}:null):null);
    return $a;
}

function qjson($q=0){
    if(!$q) return -1;
    $r = qout($q,AB_MYSQLI_OBJ);
    if($r->status() && $r->data->num_rows){
        $arr = [];    
        while($tmp = $r->data->fetch_assoc()) $arr[] = $tmp;
        return json_encode($arr);
    }
    return 0;
}
