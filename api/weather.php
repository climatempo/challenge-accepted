<?php
header('Content-type:application/json;charset=utf-8');

// Get the contents of the JSON file 
$file = file_get_contents("../base/weather.json");
//json_encode($file, JSON_PRETTY_PRINT);

echo $file;