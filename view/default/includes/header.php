<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
  <title><?= (isset($seo_title) && !empty($seo_title))?$seo_title:'Home'?> | <?= APPNAME?></title>
  <meta name="description" content="<?= (isset($seo_description) && !empty($seo_description))?$seo_description:'Home'?> <?= APPNAME?>">

  <link rel="stylesheet" href="<?= VIEW?>_recursos/bootstrap/css/paper.css">
  <link rel="stylesheet" href="<?= VIEW?>_recursos/bootstrap/css/lucas.css">
  <link rel="stylesheet" href="<?= VIEW?>_recursos/styles.css">
  <link rel="stylesheet" href="<?= VIEW?>_recursos/animate.css">
  <link rel="stylesheet" href="<?= VIEW?>_recursos/fa/css/font-awesome.min.css">

  <script src="<?= VIEW?>_recursos/jquery/jquery.min.js"></script>
  <script src="<?= VIEW?>_recursos/bootstrap/js/bootstrap.min.js"></script>
  <script src="<?= VIEW?>_recursos/bootstrap/js/ie10workaround.js"></script>
  <script src="<?= VIEW?>_recursos/saturno.js"></script>
  <script src="<?= VIEW?>_recursos/rainbowtext.js"></script>
</head>
<body class="<?= (isset($class_pagina))?$class_pagina:''?>">