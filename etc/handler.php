<?php
namespace abox;
set_include_path("../lib");

require "user.php"; // so core 	and queries comes together...
require "data.php";
require "../project/main.php"; // user's config

$tabl = null;
$user = user();
$uuid = sess(UUID);
$post = in();
$conf = $post["conf"];
$data = isset($post['data'])?otoa($post["data"]):null;
$pown = conf("project_owner");
$date =  new Date();
$stts = AB_NOT_ALLOWED;
$resp = false;
$mode = AB_INSERT;

eval(file_get_contents('handler.d/'.$conf.'.conf'));

$hand = new Data($tabl,$data);
$hand->build($mode);

if($stts) $stts = $hand->query();

sess("DEBUG",$hand->seeQuery()); // debug only

echo $stts;//.$hand->seeQuery(); // debug only;