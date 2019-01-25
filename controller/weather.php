<?php

    $l = $_GET['locale'];
    
    try {
        $str = file_get_contents('../base/weather.json');
        $json = json_decode($str, true);

        for($i = 0; $i < sizeof($json); $i++){
            if($json[$i]['locale']['id'] == $l){
                echo json_encode($json[$i]);
                return;
            }
        }
    } catch (Exception $ex) {
        return $ex->getMessage();
    }    