<?php

use ClimaTempo\Repositories\LocaleRepository;

$router->get('/home', function() {
    $data = request()->params();

    // Not find anything
    if(!count($data)){
        return view('pages.index');
    }

    $repositoryLocale = new LocaleRepository();
    die(print_r($repositoryLocale->all(), 1));
    // Calling repository to get data
    return view('pages.index', ['search' => true]);
});