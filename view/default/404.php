<?php include('includes/header.php');?>
<?php include('includes/menu.php');?>
  <div class="jumbotron" style="background-image:url('<?= VIEW?>/images/cao22.gif');">
  	<div class="container">
  		<h1 id="home-titulo">Erro 404 !</h1>
  		<p>O nosso cão farejador não encontrou a página que você abriu =/</p>
  		<p style="opacity:0.4;"><?= (isset($auror['erro']))?$auror['erro']:''?></p>
  	</div>
  </div>
  <script>
  	$('#home-titulo').rainbowtext({colors:[
  		'#BBDEFB',
  		'#90CAF9',
  		'#64B5F6',
  		'#42A5F5',
  		'#2196F3',
  		'#1E88E5',
  		'#1976D2',
  		'#1565C0',
  		'#0D47A1',
  		'#053683'
  		]});
  </script>


    <div class="container">
<?php include('includes/footer.php');?>