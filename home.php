


<html>
<!-- CSS
-->
<body style="background-color:#D2DDE1" bgcolor="">
<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="css/Font-Awesome/css/font-awesome.min.css">
<!-- JS
-->
 <script src="js/jquery-3.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
 <script src="bootstrap/js/bootstrap.min.js"></script>

 <!--
 navbar
 -->
 <nav class="navbar navbar-inverse bg-primary">
   <center><img src="images/logo-white.png" width="300px" height="50px"/></center>
   <!-- Navbar content -->
 </nav>
<form class="navbar-form" role="search" >
        <div class="form-group" style="display:inline;">
          <div class="input-group">
            <input type="text" class="form-control" onkeyup="mostrarDadosLocalidade(this.value)">
            <span class="input-group-addon"><span class="fa fa-search"></span></span>
          </div>
        </div>
      </form>
<!--
page content
-->

<center>
  <br>
<div id="cards-total">
</div>
</div>
</center>
  <script src="js/buscarLocal.js"></script>
</body>

</html>
