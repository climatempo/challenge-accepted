<?php
namespace abox;
require_once "core.php";
require_once "date.php";
require_once "queries.php";

// clean all site"s data on local and server, even the session conn
function logoff()
{
    @\setcookie(conf("project_name")."_USER","",0,"/");
    @\session_start();
    @\session_unset();
    @\session_destroy();
    @\session_write_close();
    @\setcookie(\session_name(),"",0,"/");
    @\session_regenerate_id(true);
    //@\header("Refresh:0");
}
## return the code of a logged user, in a casa there"s no logged one, it return 0
function user(){ return sess(USER); }


function username(){ return user()?qcell("Users","name"):""; }


## checks if a given passphrase matches it"s informed user"s ownership
function pswd_check($c,$p){
    //print_r($c.PHP_EOL);
    //print_r($p.PHP_EOL);
    //print_r(hash("sha256",$c.$p));
    return qio("SELECT * from Users where code='".$c."' and pswd='".hash("sha256",$c.$p)."'");
    //var_dump($i);
    //return $i;
}


## usualy called on login screens
## checks if a given passphrase matches it"s informed user"s ownership
## keep the user logged using cookie if $k (stands for keep) is true (1)
function signin($u,$p,$k=0){
    if(!($u && $p)) return -1;
    $o = qout("SELECT * from Users where user='$u'",AB_OBJECT);
    //print_r($o);
    //echo "SELECT * from Users where user='$u'";
    if(!$o->status()) return -2;
    //print_r(conf("mail_check"));
    //print_r(conf("restriction_mode",null,Locations::CHROOT).PHP_EOL);
    //print_r($o->code.PHP_EOL);
    if((int)conf("mail_check") && !(int)$o->data()->mchk) return -4;
    //if($o->status(AB_FAILURE)) return -5;
    //print_r($o);print_r($p);
    //print_r([$o->code,$p,hash('sha256',$o->code.$p)]);
    if(pswd_check($o->data()->code,$p)>0){
        sess(USER,$o->data()->code);
        if($k) cook(USER,$o->data()->code);
        qin("UPDATE Users SET last='".(new Date())->datetime()."' WHERE code='".$o->data()->code."'");
        return 1;
    }else return -6;
}
function userlevel($l=0){ 
    $user=user();
    if(!$user) return null;
    $a = (int)qcell("Users","alvl");
    return ($a>=$l?$a:false);
}
function aval($r=0){
    $user = user();
    $len = strlen($user);
    if($user && $len>=1 && $len<=32 && qio("SELECT code FROM Users WHERE code='$user' AND alvl>=$r")) return 1;
    return 0;
}
