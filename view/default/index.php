<?php
include('includes/header.php');
include('includes/menu.php');
?>

<div class="container">
	<form id="searchbar" autocomplete="off">
		<div class="form-group">
			<input autocomplete="off" name="query" placeholder="Cidade" type="text" class="form-control" required pattern=".{3,}" title="Digite ao menos 3 caracteres" />
			<button type="submit" class="btn btn-default pull-right"><i class="fa fa-search"></i></button>
		</div>
	</form>
	<div id="loading"><i class="fa fa-spin fa-spinner"></i></div>
	<div id="msg"></div>
	<div id="content">
		<h1 id="city"></h1>
		<h2>Previsão do tempo</h2>
		<p id="period"></p>
		<div class="row" id="cards">
			<div class="col-sm-4 col-md-4 col-lg-4">
				<div class="card">
					<h5><i class="fa fa-calendar"></i> <span>01/01/2013</span></h5>
					<p>Sol com muitos blablabla Sol com muitos blablabla Sol com muitos blablabla Sol com muitos blablabla </p>
					<div class="row results">
						<div class="col-xs-6 maxima"><i class="fa fa-arrow-up"></i> <span>20ºC</span></div>
						<div class="col-xs-6 minima"><i class="fa fa-arrow-down"></i> <span>10ºC</span></div>
						<div class="col-xs-6 precipitacao"><i class="fa fa-tint"></i> <span>10mm</span></div>
						<div class="col-xs-6 chuva"><i class="fa fa-umbrella"></i> <span>50%</span></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<script>
		$(document).ready(function(){
			function dformat(original){
			    var data = new Date(original+' 00:00:00');
			    var dia = data.getDate();
			    if (dia.toString().length == 1){dia = "0"+dia;}
			    var mes = data.getMonth()+1;
			    if (mes.toString().length == 1){mes = "0"+mes;}
			    var ano = data.getFullYear();
			    return dia+"/"+mes+"/"+ano;
			}

			var dom = $('#cards').html();
			$('#cards').html('');
			var req = null;
			var cancelled = false;

			$('#searchbar').on('submit',function(e){
				$('#msg').hide();
				$('#content').hide();
				$('#loading').show();
				e.preventDefault ? e.preventDefault() : e.returnValue = false;
				if (req!==null){
					cancelled = true;
					console.log('cancelled');
					req.abort();
				}
				req = $.ajax({
					method: "POST",
					url: "<?= RAIZ?>/busca",
					data: {'query':$('form input[name=query]').val()}
				})
				.done(function(d) {
					if (typeof d.result==='undefined'){
						$('#msg').html('Não foi possível entender o retorno =\\<br><i style="color:#FFEB12;" class="fa fa-umbrella"></i>').show();
						return;
					}
					if (d.result==='success'){
						$('#city').html(d.data.locale.name+'/'+d.data.locale.state);
						$('#period').html('De '+dformat(d.data.period.begin)+' a '+dformat(d.data.period.end));
						$('#cards').html('');
						$.each(d.data.weather,function(i,tempo){
							console.log(tempo);
							$('#cards').append(dom);
							var newone = $('#cards > div:last-child');
							var databr = dformat(tempo.date);
							newone.find('h5 span').html(databr);
							newone.find('p').html(tempo.text);
							newone.find('.precipitacao span').html(''+tempo.rain.precipitation+'mm');
							newone.find('.chuva span').html(''+tempo.rain.probability+'%');
							newone.find('.maxima span').html(''+tempo.temperature.max);
							newone.find('.minima span').html(''+tempo.temperature.min);
						});
						$('#content').show();
					}else{
						$('#msg').html(d.message).show();
					}
				})
				.fail(function() {
					if (cancelled==false){
						alert('Erro na conexão com a API. Verifique o log na aba network.');
					}
				})
				.always(function() {
					$('#loading').hide();
					cancelled = false;
				});
			});
		});
	</script>
	<?php
	include('includes/footer.php');
	?>