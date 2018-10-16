<?php

    include('Weather_Controller.php');
    $city = $_POST['city'];
    $objeto = new Weather_Controller();        
    $valorLocales =  $objeto->searchCity($city);

    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");
    header('Content-type:application/json;charset=utf-8');

       
?>
