<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Lista de Dependências </title>

	<style type="text/css">

	::selection { background-color: #E13300; color: white; }
	::-moz-selection { background-color: #E13300; color: white; }

	body {
		background-color: #fff;
		margin: 40px;
		font: 13px/20px normal Helvetica, Arial, sans-serif;
		color: #4F5155;
	}

	a {
		color: #003399;
		background-color: transparent;
		font-weight: normal;
	}

	h1 {
		color: #444;
		background-color: transparent;
		border-bottom: 1px solid #D0D0D0;
		font-size: 19px;
		font-weight: normal;
		margin: 0 0 14px 0;
		padding: 14px 15px 10px 15px;
	}

	code {
		font-family: Consolas, Monaco, Courier New, Courier, monospace;
		font-size: 12px;
		background-color: #f9f9f9;
		border: 1px solid #D0D0D0;
		color: #002166;
		display: block;
		margin: 14px 0 14px 0;
		padding: 12px 10px 12px 10px;
	}

	#body {
		margin: 0 15px 0 15px;
	}

	p.footer {
		text-align: right;
		font-size: 11px;
		border-top: 1px solid #D0D0D0;
		line-height: 32px;
		padding: 0 10px 0 10px;
		margin: 20px 0 0 0;
	}

	#container {
		margin: 10px;
		border: 1px solid #D0D0D0;
		box-shadow: 0 0 8px #D0D0D0;
	}
	</style>
</head>
<body>

<div id="container">
	<h1>Bem vindo ao Gerenciador de dependências do projeto.</h1>

	<div id="body">
		<p>Caso você esteja visualizando esta pagina, é porque estão faltando a instalação de algumas dependências no projeto.</p>

		<p>As seguintes dependências estão faltando a ser instaladas no projeto:</p>
		<code>
			<ul>
				<?php 
					foreach ($missing as $key => $value) {
						echo '<li>'.$value.'</li>';
					}; 

				?>
			</ul>
		</code>

		<p>Para instalar as dependências exigidas para o funcionamento do projeto, por gentileza, abre o prompt de comando e, execute o comando mostrado na caixa de texto a baixo, no diretório raiz do projeto.</p>
		<code><b>npm install</b></code>

		<p>Caso você não tenha o NPM instalado no computador, faça o download do Node.js consequentemente o gerenciador de downloads NPM irá acompanhar o pacote, Faça o download neste link <a href="https://nodejs.org/en/" target="_blank">Clique Aqui</a>.</p>	

		<p>Caso você tenha qualquer problema para a instalação de dependências do projeto, entre em contato diretamente comigo  <a href="mailto:matheuspavanetti@gmail.com?subject=Problemas%20com%20dependencias%20no%20projeto%20Climatempo&body=Ola%20caro%20Matheus,%20estou%20com%20problemas%20para%20a%20instalacao%20de%20dependencias%20no%20meu%20projeto,%20por%20gentileza,%20poderia%20me%20ajudar%20?">Matheus Medella Pavanetti</a>.</p>
	</div>

	<p class="footer">By Matheus Pavanetti - 2019 | Page rendered in <strong>{elapsed_time}</strong> seconds. <?php echo  (ENVIRONMENT === 'development') ?  'CodeIgniter Version <strong>' . CI_VERSION . '</strong>' : '' ?></p>
</div>

</body>
</html>