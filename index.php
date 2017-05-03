<!DOCTYPE html>
<html class="" lang="">
<!--<![endif]-->
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta charset="utf-8">  
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Climatempo</title>

  <!-- jQuery 2.1.4 -->
  <script src="plugins/jquery/jquery-2.2.1.min.js"></script>

  <script src="plugins/bootstrap/bootstrap.min.js"></script>
  <link rel="stylesheet" type="text/css" href="plugins/bootstrap/bootstrap.min.css">

  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

<nav class="navbar navbar-default climatempo" role="navigation">
	<div class="row">
		<div class="col-md-9 col-sm-6 col-xs-12">
			<div class="navbar-header col-sm-12 col-md-12" align="center">
				<a class="logo" href="#">
					<img src="images/logo-white.png" alt="climatempo" class="img-responsive" style="max-height: 40px;">
				</a>
			</div>
			
		</div>
		<div class="col-md-3 col-sm-6 col-xs-12 pull-right">
			<form onsubmit="return false" id="formBusca" class="navbar-form" role="search" method="POST">
				<div class="input-group pull-right">
					<input type="text" class="form-control busca col-md-12" placeholder="Ver clima" name="busca">
					<div class="input-group-btn">
						<button class="btn btn-default" onClick="getClima()"><i class="glyphicon glyphicon-search"></i></button>
					</div>
				</div>
			</form>
		</div>
	</div>
</nav>

<div id="content">
	<div class="loading"></div>
	<div id="previsao"></div>
</div>

<script type="text/javascript">

function getClima(){
	
	$("#content").find(".loading").fadeIn();
	//Busca pela localidade informada
	var request = $.ajax({ url: 'servico/clima.php', type: 'POST', data: {busca: $("#formBusca").find(".busca").val() }, async:true});
	request.done(function(response){

		$("#previsao").html("");

		$("#content").find(".loading").fadeOut('fast', function() {
			//Se existir ocorrências, são inseridas no bloco abaixo
			if(response != '[]'){

				dados = $.parseJSON(response);
				console.log(dados);

				$(dados['previsao']).each(function() {

					$("#previsao").append("<div class='col-md-3 col-sm-4 col-xs-12 dias'>"+
						"<div class='col-md-12 col-sm-12 col-xs-12'>"+
							"<span class='data'><b>"+this.date+"</b></span>"+
							"<p class='texto'>"+this.text+"</p>"+
							"<div class='col-md-12 col-sm-12 col-xs-12 temp'>"+
								"<div class='col-md-6 col-sm-6 col-xs-6 max'><span class='glyphicon'><img src='images/icons/upload.png'></span> "+this['temperature']['max']+" </div>"+
								"<div class='col-md-6 col-sm-6 col-xs-6 min'><span class='glyphicon'><img src='images/icons/download.png'></span> "+this['temperature']['min']+" </div>"+
							"</div>"+
							"<div class='col-md-12 col-sm-12 col-xs-12 chuva'>"+
								"<div class='col-md-6 col-sm-6 col-xs-6 max'><span class='glyphicon'><img src='images/icons/raindrop-close-up.png'></span> "+this['rain']['precipitation']+" </div>"+
								"<div class='col-md-6 col-sm-6 col-xs-6 min'><span class='glyphicon'><img src='images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png'></span> "+this['rain']['probability']+" </div>"+
							"</div>"+
						"</div>"+
					"</div>")
				});
				
			}else{
				$("#previsao").append("<p align='center'>Não foram encontradas ocorrências</p>");
			}
		});

	});

}


</script>

</body>
</html>