<!doctype html>
<!--
  Material Design Lite
  Copyright 2015 Google Inc. All rights reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License
-->
<html lang="pt-br">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="description" content="A front-end template that helps you build fast, modern mobile web apps.">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
		<title>Climatempo - Thiago Teberga</title>
		
		<!-- Add to homescreen for Chrome on Android -->
		<meta name="mobile-web-app-capable" content="yes">
		
		<!-- Add to homescreen for Safari on iOS -->
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="apple-mobile-web-app-title" content="Material Design Lite">
		
		<!-- Tile icon for Win8 (144x144 + tile color) -->
		<meta name="msapplication-TileColor" content="#3372DF">
		
		<!-- Favicon -->
		<link rel="shortcut icon" href="images/favicon.png">
		
		<!-- CSS for Material Design Lite -->
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
		<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.blue-red.min.css" />
		<link rel="stylesheet" href="css/jquery-ui.min.css">
		<link rel="stylesheet" href="css/styles.css">
	</head>
  
	<body>
		<!-- Always shows a header, even in smaller screens. -->
		<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
			<header class="mdl-layout__header">
				<div class="mdl-layout__header-row">
					<!-- Title -->
					<a class="logo" href="index.php"> <span class="mdl-layout-title desktop"></span> </a>
					<!-- Add spacer, to align navigation to the right -->
					<div class="mdl-layout-spacer"></div>
					<!-- Navigation. We hide it in small screens. -->
					<nav class="mdl-navigation mdl-layout--large-screen-only">
						<a class="mdl-navigation__link fonte" href="index.php">Previsões</a>
						<a class="mdl-navigation__link fonte" href="http://www.climatempo.com.br" target="_blank">Site Oficial</a>
					</nav>
				</div>
			</header>
			<div class="mdl-layout__drawer">
				<a class="logo" href="index.php"> 
					<span class="mdl-layout-title mobile"></span> 
				</a>
				<nav class="mdl-navigation">
					<a class="mdl-navigation__link fonte" href="index.php">Previsões</a>
					<a class="mdl-navigation__link fonte" href="http://www.climatempo.com.br" target="_blank">Site Oficial</a>
				</nav>
			</div>
		</div>
	
		<div class="demo-blog mdl-layout mdl-js-layout has-drawer is-upgraded">
			<main class="mdl-layout__content">
				<div class="demo-blog__posts mdl-grid">
				
					<div class = "mdl-grid">
						<form method="POST" action="index.php">
							<div class = "mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone alinhar">
								<div class="demo-card-wide mdl-card mdl-shadow--2dp full">
									<div class="mdl-textfield mdl-js-textfield full">
										<input class="mdl-textfield__input full" type="text" id="busca" name = "busca">
										<label class="mdl-textfield__label full" for="busca">Cidade...</label>
									</div>
								</div>
								<button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent botao">Buscar</button>
							</div>
						</form>
					</div>
					<div class = "mdl-grid">
	
						<?php
							
							if (!isset($_POST['busca'])){
								$parametro = null;
							} else {
								$parametro = $_POST['busca'];
							}
			
							$cont = 0;
							
							if ($parametro == null){
								echo "";
							} else {
								$json_file_weather = file_get_contents("base/weather.json");   
								$json_str_weather = json_decode($json_file_weather);
									foreach($json_str_weather as $item_weather){
										$cidade_master = $item_weather->locale->name;
										if ($cidade_master == $parametro) {
											echo "<div class = 'mdl-grid'>
													<div class = 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet 					mdl-cell--4-col-phone'>
														<div class='demo-card-wide mdl-card mdl-shadow--2dp full 	cidade'>
															<span class='vertical'><strong>Cidade:</strong> ".$item_weather->locale->name."</span>
														</div>
													</div>
												</div>";
											$cont++;
										} else {
										echo "";
										}
										$local = $item_weather->locale->name;
										if ($local == $parametro) {
											foreach ($item_weather->weather as $tempo) {
												$date = strtotime($tempo->date);
												$newdate = date('d/m/Y',$date);
													echo "<div class = 'mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone'>
															<div class='demo-card-square mdl-card mdl-shadow--2dp completo'>
																<div class='mdl-card__title mdl-card--expand'>
																	<strong>".$newdate."</strong>
																</div>
																<div class='mdl-card__title mdl-card--expand'>
																	".$tempo->text."
																</div>
																<div class='mdl-card__supporting-text'>
																	<div class = 'mdl-grid'>
																		<div class = 'mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone centro'>
																			<img src='images\icons\download.png'>
																		</div>
																		<div class = 'mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone centro'>
																			<font class='menor'>".$tempo->temperature->min."°</font>
																		</div>
																		<div class = 'mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone centro'>
																			<img src='images\icons\upload.png'>
																		</div>
																		<div class = 'mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone centro'>
																			<font class='maior'>".$tempo->temperature->max."°</font>
																		</div>
																		<div class = 'mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone centro'>
																			<img src='images\icons\drop-close-up.png'>
																		</div>
																		<div class = 'mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone centro'>
																			<font class='precipitation'>".$tempo->rain->precipitation."mm</font>
																		</div>
																		<div class = 'mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone centro'>
																			<img src='images\icons\protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png'>
																		</div>
																		<div class = 'mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone centro'>
																			<font class='probability'>".$tempo->rain->probability."%</font>
																		</div>
																	</div>
																</div>
															</div>
														</div>";
											}
										} else {
											echo "";
										}
									}
							}
							
							if ($cont == 0 AND $parametro <> null){
								echo "<div class = 'mdl-grid'>
										<div class = 'mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet 		mdl-cell--4-col-phone'>
											<div class='demo-card-wide mdl-card mdl-shadow--2dp full erro'>
												<span class='vertical'>
													<strong>Desculpe... </strong><img src='images/icons/sad.png' 		class='emoji'>
													<br>
													Não há dados para essa cidade.
												</span>
											</div>
										</div>
									</div>";
							}
						?>
	
					</div>
				</div>
			</main>
		
			<footer class="mdl-mini-footer">
				<div class="mdl-mini-footer--left-section">
					<a href="https://br.linkedin.com/in/thiagoteberga" target="_blank">
						<button class="mdl-mini-footer--social-btn social-btn btn_linkedin">
							<span class="visuallyhidden">Linkedin</span>
						</button>
					</a>
				</div>
				<div class="mdl-mini-footer--right-section assinatura">
					Desenvolvido por <strong>Thiago Teberga</strong>
				</div>
			</footer>
		</div>
		<script type="text/javascript" src="js/jquery-3.3.1.js"></script>
		<script type="text/javascript" src="js/jquery-ui.min.js"></script>
		<script type="text/javascript" src="js/custom.js"></script>
		<script src="https://code.getmdl.io/1.3.0/material.min.js"></script>
	</body>
</html>