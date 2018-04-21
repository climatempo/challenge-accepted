<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#1464c0">
    <title>Clima tempo</title>
    <link rel="shortcut icon" href="resources/images/favicon.png"/>
    <link href="resources/css/bootstrap.min.css" rel="stylesheet">
    <link href="resources/css/style.css" rel="stylesheet">
  </head>
  <body>

    <section id="topBar">
      <div class="container" align="center">
        <a href="/">
          <img src="resources/images/logo-white.png" class="img-responsive">
        </a>
      </div>
    </section>
    <div class="clearBoth"></div>

    <section id="search">
      <div class="container">
        <div class="col-xs-10 noPaddingLeftRight">
          <input type="text" name="search" placeholder="Digite o nome da cidade">
        </div>
        <div class="col-xs-2 noPaddingLeftRight bxIconSearch" align="center" onclick="getWeather()">
          <img src="resources/images/icons/search.png" class="img-responsive">
        </div>
        <div class="clearBoth"></div>
      </div>
    </section>

    <section id="base">
      <div class="container">
        <div id="init">
          Busque alguma cidade!
        </div>
        <div class="bxReturnCity" id="textWithCityState">
          Previsão para Osasco - SP
        </div>
        <div id="cards"></div>
      </div>
    </section>

    <script src="resources/js/jquery.min.js"></script>
    <script src="resources/js/bootstrap.min.js"></script>
    <script src="resources/js/axios.min.js"></script>
    <script src="resources/js/api.js"></script>
  </body>
</html>
