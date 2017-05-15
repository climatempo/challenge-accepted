<!DOCTYPE html>
<html lang="pt-br">

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="UTF-8">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta http-equiv="Cache-Control" content="no-cache, no-store">
	<meta http-equiv="Pragma" content="no-cache, no-store">

	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="assets/css/style.min.css" media="screen, print" />
</head>

<body>

	<header class="top">
		<figure>
			<img src="assets/images/logo-white.png" alt="Climatempo">
		</figure>
	</header>

	<section class="form">
		<form action="api.php?action=getWeatherJson">
			<input type="text" name="city" placeholder="Cidade" autocomplete="off">
			<button type="submit" class="actSubmitForm"></button>
		</form>
	</section>

	<section class="no-results">
		<h3 class="lbl-no-results">Para começar, busque por uma cidade</h3>
	</section>

	<section class="weather hidden">
		<h2>Previsão para <span class="lbl-locale">Osasco</span></h2>

		<div class="box-cards">
			<div class="card">
				<div class="panel-top">
					<h3 id="date">01/02/2017</h3>
					<p id="description">Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.</p>
				</div>
				<div class="panel-bottom">
					<div class="row">
						<div class="col col-2">
							<img src="assets/images/icons/upload.png" alt="Temperatura Máxima">
						</div>
						<div class="col col-3">
							<span class="light-blue" id="temperatureMin">20ºC</span>
						</div>
						<div class="col col-2">
							<img src="assets/images/icons/download.png" alt="Temperatura Mínima">
						</div>
						<div class="col col-3">
							<span class="red" id="temperatureMax">10ºC</span>
						</div>
					</div>
					<div class="row">
						<div class="col col-2">
							<img src="assets/images/icons/raindrop-close-up.png" alt="Rain Probability">
						</div>
						<div class="col col-3">
							<span id="rainProbability">10mm</span>
						</div>
						<div class="col col-2">
							<img src="assets/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" alt="Rain Precipitation">
						</div>
						<div class="col col-3">
							<span id="rainPreciptation">50%</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="clearfix"></div>
	</section>

	<footer>
		<a class="arrow-up opacity actGoToUp"><span></span></a>
	</footer>

	<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.js"></script>
	<script type="text/javascript" src="assets/js/scripts.js"></script>

</body>

</html>