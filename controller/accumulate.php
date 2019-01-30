<?php

    $link = urldecode($_GET['link']);

    $accum = 0;

    //Acumulado somente do dia (24 hrs)
    try{
        for($i = 0; $i < 24; $i++){
            $time = "2019-01-28T".($i > 9 ? "" : "0").$i.":00:00.000Z";
            
            $url = $link.'&TIME='.$time;

            $objeto = json_decode(file_get_contents($url), true);
            if(sizeof($objeto['features']) > 0){
                $aux = floatval($objeto['features'][0]['properties']['___Precipitation_Tax__kg_m_2_h_']);          
                $accum += $aux;
            }
        }
        echo json_encode($accum);
    }catch(Exception $e){
        echo print_r("Acumulado não registrado");
    }

    