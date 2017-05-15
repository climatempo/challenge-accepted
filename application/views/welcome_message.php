<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <title>Clima tempo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="Keywords" content="clima tempo, clima, previsao tempo">
    <meta name="Description" content="clima tempo">
    <link rel="icon" href="static/image/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="static/css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></script>

</head>
<body>
    <div id="container">
        <header>
            <div class="logo"><img align="center" src="static/image/logo-white.png"></div>
            <div class="search">
                <input type="text" name="search" placeholder="Busca" >
                <button onclick="getForecast()" id="search" type="button" class="btn-search"></button>
            </div>
        </header>
        <section>
            <div id="cards"> </div>
        </section>
    </div>
    <script type="text/javascript" src="static/js/forecast.js"></script>
</body>
</html>