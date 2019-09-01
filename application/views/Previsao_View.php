<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary static-top">
    <div class="container">
      <a class="navbar-brand" href="index.php"><img class="img img-responsive" src="images/logo-white.png" alt="Logo" width="128"></a>
    </div>
  </nav>

  <section>

<!-- Card de Busca -->
      <div id="buscar" class="container animated bounce">
        <div class="row">
          <div class="col-lg-12 mt-3">
            <div class="card shadow"> 
              <div class="card-body">
            <h5 class="card-title">Previsão do Tempo</h5>
              <form id="submitForm">
            <div class="input-group mb-3">
            <input id="search" type="text" name="location" class="form-control" placeholder="Entre com o nome da cidade">
            
            <div class="input-group-append">
              <button id="sendBtn" class="btn btn-outline-primary" type="button">Pesqusiar</button>
            </div>
          </div>
            <div id="invalid" class="invalid-feedback" style="display:none;">
              <b> Porfavor, digite o nome de alguma cidade valida. </b> 
              </div>
           </form>
          </div>
            </div>
          </div>
      </div>
    </div>
<!-- Fim Card de Busca -->

    <!-- Titulo -->
    <div id="titulo" class="container">
     </div>
    <!-- Conteudo -->
    <div id="conteudo" class="container">
    </div>

</section>