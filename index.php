<?php
require "autoload.php";

$main = new Functions();
?>

<!DOCTYPE html>
<html>
<head>
	<title>CLIMATEMPO</title>
	
	<meta http-equiv="content-language" content="pt-br" />
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

	<link rel="stylesheet" type="text/css" href="css/responsive_styles.css">
	<link rel="stylesheet" type="text/css" href="css/main_styles.css">
</head>
<body>
<div class="row">
	<header>
		<div id="logo">
			<img id="logo-image" src="images/logo-white.png" />
		</div>
	</header>

	<section>
		<div id="search">
			<input type="text" name="" id="input-search" placeholder="Procurar cidade">
			<button id="btn-submit-search"></button>
		</div>
	</section>

	<section id="page-content">
		
	</section>

	<div class="snack">
		<p id="snack-message">asd</p>
	</div>
</div>
<footer>
	<div id="footer">
		<p>&#169; 2017 Jason Davin</p>
	</div>
</footer>

<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>
</body>
</html>