<?php
namespace abox;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: text/html; charset=UTF-8",true);
require 'lib/core.php';
sess(HTTP,@\file_get_contents('var/.HTTP'));
if(is_file(root("var/.PROJ",AB_FILE))) conf("project_name",str_replace(array("\r","\n"),"",file_get_contents(root("var/.PROJ",AB_FILE))));?>
<!DOCTYPE xhtml>
<html lang="pt-BR">
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content=""/>
        <meta name="author" content="Alphabox Dev Team"/>
        <script src="lib/jquery.min.js"></script>
        <script src="lib/std.min.js"></script>
        <link href="lib/std.css" rel="stylesheet"/>
        <title><?=conf("project_name")?></title>
    </head>
    <body class="view zero bmain fmain ft-helvetica"></body>
    <script>
        (function(){
            ab.organize();
            ab.load('header.php');
        })();
    </script>
</html>
