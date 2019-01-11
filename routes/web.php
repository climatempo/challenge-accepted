<?php

$router->get('/test', function(){
    return view('teste', ['tt' => 'tt2']);
});