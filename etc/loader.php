<?php
namespace abox;
set_include_path("../lib");

require "user.php"; // so core 	and queries comes together...
require "../project/main.php"; // user's config

$tabl = null;
$user = user();
$uuid = sess(UUID);
$post = in();
$conf = $post["conf"];
$data = $post["data"];
$limt = $post["limit"];
$pown = conf("project_owner");
$date =  new Date();
$resp = false;
$query = "";
$error = '[{"error":"no data"}]';
$stts = false;

//print_r($post);

eval(file_get_contents('loader.d/'.$conf.'.conf'));

//echo $query." - ";
//print_r(qout($query,AB_JSON));
//echo json_encode(qout($query,AB_JSON)->data(),JSON_PRETTY_PRINT);
if($stts===true){
	$tmp = qout($query,AB_JSON);
	//print_r($tmp);
	if($tmp->status() && $tmp->data()){ 
		echo $tmp->data();
	}else echo $error;
}else if($stts===false) echo $error;

//print_r($tmp->data()?"true":"false");

sess("DEBUG",$query); // DEBUG only
