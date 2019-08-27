<!-- Script por Matheus Pavanetti 24-08-2019 -->
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Definição de meta dados -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Climatempo">
  <meta name="author" content="Matheus Pavanetti">
  <link rel="icon" type="image/png" href="images/favicon.png"/>

  <title>Climatempo</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

   <!-- jQuer UI core CSS -->
   <link href="vendor/jQueryUI/jquery-ui.min.css" rel="stylesheet">

   <!-- Toastr core CSS -->
   <link href="vendor/toastr/toastr.min.css" rel="stylesheet">

   <!-- animate core CSS -->
   <link href="vendor/animate/animate.css" rel="stylesheet">

</head>
<body>

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

  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- jQuery UI -->
  <script src="vendor/jQueryUI/jquery-ui.min.js"></script>

  <!-- toastr JS -->
  <script src="vendor/toastr/toastr.min.js"></script>

  <!-- Custom JS -->
  <script src="vendor/custom/script.js?v=5"></script>

</body>
</html>
<!-- Script por Matheus Pavanetti 24-08-2019 -->