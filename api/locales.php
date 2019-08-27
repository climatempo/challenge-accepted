<?php
header('Content-type:application/json;charset=utf-8');

// Get the contents of the JSON file 
$file = file_get_contents("../base/locales.json");

echo $file;