<?php

$router->group('/api', function(){
    $this->get('/test', function(){
        return 'OK';
    });
});