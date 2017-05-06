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
		<form>
			<input type="text" name="city" placeholder="Localidade..." autocomplete="off">
			<button type="submit"></button>
		</form>
	</section>

	<section class="weather">
		<h2>Previsao para <span id="locale">Osasco</span></h2>

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
		<div class="card">
			<div class="panel-top">
				<h3 id="date">02/02/2017</h3>
				<p id="description">Sol com algumas nuvens. Chove rápido durante o dia e à noite.</p>
			</div>
			<div class="panel-bottom">
				<div class="row">
					<div class="col col-2">
						<img src="assets/images/icons/upload.png" alt="Temperatura Máxima">
					</div>
					<div class="col col-3">
						<span class="light-blue" id="temperatureMax">30ºC</span>
					</div>
					<div class="col col-2">
						<img src="assets/images/icons/download.png" alt="Temperatura Mínima">
					</div>
					<div class="col col-3">
						<span class="red" id="temperatureMin">15ºC</span>
					</div>
				</div>
				<div class="row">
					<div class="col col-2">
						<img src="assets/images/icons/raindrop-close-up.png" alt="Rain Probability">
					</div>
					<div class="col col-3">
						<span id="rainProbability">7mm</span>
					</div>
					<div class="col col-2">
						<img src="assets/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" alt="Rain Precipitation">
					</div>
					<div class="col col-3">
						<span id="rainPreciptation">70%</span>
					</div>
				</div>
			</div>
		</div>
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
		<div class="card">
			<div class="panel-top">
				<h3 id="date">02/02/2017</h3>
				<p id="description">Sol com algumas nuvens. Chove rápido durante o dia e à noite.</p>
			</div>
			<div class="panel-bottom">
				<div class="row">
					<div class="col col-2">
						<img src="assets/images/icons/upload.png" alt="Temperatura Máxima">
					</div>
					<div class="col col-3">
						<span class="light-blue" id="temperatureMax">30ºC</span>
					</div>
					<div class="col col-2">
						<img src="assets/images/icons/download.png" alt="Temperatura Mínima">
					</div>
					<div class="col col-3">
						<span class="red" id="temperatureMin">15ºC</span>
					</div>
				</div>
				<div class="row">
					<div class="col col-2">
						<img src="assets/images/icons/raindrop-close-up.png" alt="Rain Probability">
					</div>
					<div class="col col-3">
						<span id="rainProbability">7mm</span>
					</div>
					<div class="col col-2">
						<img src="assets/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" alt="Rain Precipitation">
					</div>
					<div class="col col-3">
						<span id="rainPreciptation">70%</span>
					</div>
				</div>
			</div>
		</div>

		<div class="clearfix"></div>
	</section>

</body>

</html>