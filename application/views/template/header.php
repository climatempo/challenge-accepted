<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!-- Script por Matheus Pavanetti 01-09-2019 -->
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Definição de meta dados -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Climatempo">
  <meta name="author" content="Matheus Pavanetti">
  <link rel="icon" type="image/PNG" href="<?php echo base_url(); ?>images/favicon.PNG"/>

  <title>Climatempo</title>

 <?php 
       //Carregando arquivos CSS
        if (isset($css) && $css) {
            foreach ($css as $path) {
                ?>
                <link rel="stylesheet" href="<?php echo $path; ?>" type="text/css"/>
            <?php
            }
        }
        ?> 
</head>
<body>