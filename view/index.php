<?php
    
    //Caso exista erro de PHP, será exibido em tela
    ini_set('display_errors',1);
    ini_set('display_startup_erros',1);
    error_reporting(E_ALL);

    //Includes da classe responsável por manipular a API em NodeJS
    include_once('../controller/api_climatempo.class.php');
    //Include da classe de utilizades (Ex: Formatação de Data, caracteres especiais, etc)
    include_once('../public/util/util.class.php');

    //Criamos as instâncias das classes APIClimatempo e Util para podermos utilizar os metodos
    //existentes em ambas as classes
    $APIClimatempo = new APIClimatempo();
    $util = new Util();

    /* 
     * DECLARAÇÃO DE VARIÁVEIS A SEREM UTILIZADAS NA MANIPULAÇÃO DA API E EXIBIÇÃO EM VIEW PARA USUÁRIO FINAL
     */
    //variavel que irá capturar o valor para consulta
    $inputBuscar = null;

    //variavei api_locale
    $id_locale  = "";
    $cidade 	= "";
    $estado 	= "";
    $latitude 	= "";
    $longitude 	= "";

    //variaveis api_weather + array weather
    $periodo_inicial  = "";
    $periodo_final 	  = "";
    //array
    $arrayWeatherContents = "";

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    	$inputBuscar = str_replace(" ", "\%20", $_POST['inputBuscar']);

    }

    $json_api_locales = $APIClimatempo->getContentsAPIClimatempo('http://localhost:8080/api_locale',$inputBuscar);

    //Loop para percorrer o json capturando os dados
    foreach ( $json_api_locales as $locale )
    {

    	$id_locale  = $locale->id;
	    $cidade 	= $locale->name;
    	$estado 	= $locale->state;
    	$latitude 	= $locale->latitude;
    	$longitude 	= $locale->longitude;

    	/*
        echo 'ID:        ' .$locale->id          . '<br>' .
             'Nome:      ' .$locale->name        . '<br>' .
             'Estado:    ' .$locale->state       . '<br>' .
             'Latitude:  ' .$locale->latitude    . '<br>' .
             'Longitude: ' .$locale->longitude   . '<br><br>';
		*/
        $json_api_weather = $APIClimatempo->getContentsAPIClimatempo('http://localhost:8080/api_weather', $id_locale);

        foreach ($json_api_weather as $weather) {
            
            $periodo_inicial  = $weather->period->begin;
    		$periodo_final 	  = $weather->period->end;
            /*
            echo 'Periodo: Begin:  ' .$weather->period->begin          . '<br>' .
                 'Periodo: End:    ' .$weather->period->end            . '<br><br>';
			*/
			
            for($ponteiroContentWeather = 0; $ponteiroContentWeather < count($weather->weather); $ponteiroContentWeather++) {

            	$arrayWeatherContents[$ponteiroContentWeather] = array(
            							 "data" 				=> $util->formatData($weather->weather[$ponteiroContentWeather]->date,'d/m/Y'),
            							 "texto" 				=> $weather->weather[$ponteiroContentWeather]->text,
            							 "temperatura_minima" 	=> $weather->weather[$ponteiroContentWeather]->temperature->min,
            							 "temperatura_maxima" 	=> $weather->weather[$ponteiroContentWeather]->temperature->max,
            							 "chuva_probabilidade" 	=> $weather->weather[$ponteiroContentWeather]->rain->probability,
            							 "chuva_precipitacao" 	=> $weather->weather[$ponteiroContentWeather]->rain->precipitation); 

            	/*
                echo 'Data:              	 ' .$weather->weather[$ponteiroContentWeather]->date 				. '<br>' .
                     'Texto:             	 ' .$weather->weather[$ponteiroContentWeather]->text 				. '<br>' .
                     'Temperatura: (Min: 	 ' .$weather->weather[$ponteiroContentWeather]->temperature->min 	. 
                                ' / Max: 	 ' .$weather->weather[$ponteiroContentWeather]->temperature->max 	. ') <br>' .
                     'Chuva: (Probabilidade: ' .$weather->weather[$ponteiroContentWeather]->rain->probability 	. 
                          ' / Precipitação:  ' .$weather->weather[$ponteiroContentWeather]->rain->precipitation . ')';
                echo '<hr>';
            	*/
            } 

        }

    }
    
?>

<!DOCTYPE html>

<html>

<head>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Climatempo - Challenge Accepted - Willian M. Toledo</title>
	
	<!-- Folhas de Estilo -->
	<link rel="stylesheet" href="../public/css/bootstrap/3.3.7/bootstrap.min.css">
	<link rel="stylesheet" href="../public/css/bootstrap/3.3.7bootstrap-theme.min.css">
	<link rel="stylesheet" href="../public/css/style.css">
	
	<!-- Scripts -->
	<script src="../public/js/jquery/1.12.4/jquery.min.js"></script>
	<script src="../public/js/bootstrap/3.3.7/bootstrap.min.js"></script>

</head>

<body>

<div class="container">
    <!-- LOGO -->
	<div class="row centralizar" style="margin-top: 10px; margin-bottom: 10px;"> 
        <img src="../public/images/logo.png" class = "img_responsive">
    </div> <!-- FIM LOGO -->
	
	<div class="container"> <!-- BUSCA -->
	    <div class="row"> 
			<div class="form-group">
		        
		        <form name="buscar_cidade" method="POST" action="#">
		        <div class="row centralizar">
		            <div class="col-xs-10">
		                <div class="demo-content">
		                	<input type="text" class="form-control" name="inputBuscar" id="inputBuscar" placeholder="Buscar Cidade (ex: Osasco, S&atilde;o Paulo)">
		                </div>
		            </div>
		            <div class="col-xs-2">
		                <div class="demo-content">
		                	<button type="submit" class="btn" ><img src="../public/images/icons/search.png" ></button>
		                </div>
		            </div>
		        </div>
		        </form>
		    </div>
	    </div> 
	</div> <!-- FIM: Busca -->

	<!-- Legenda da Cidade Pesquisada -->
	<div class="row centralizar" style="margin-top: 10px; margin-bottom: 10px;"> <!-- Div ROW onde serão exibidas as previsões climáticas -->
        <h3> Previs&atilde;o do tempo para <?php echo $cidade . ' - ' . $estado; ?> </h3>
        <hr>
    </div> 
    <!-- FIM: Legenda da Cidade Pesquisada -->

    <div class="row"> <!-- Div ROW onde serão exibidas as previsões climáticas -->
    	<?php

    	foreach ($arrayWeatherContents as $weather) {
    	?>
    		<!-- Div previsão climática -->
        	<div class="col-sm-6 col-md-4 col-lg-3" style="height: 300px;">
	            <h4> <?php echo $weather['data']; ?> </h4>
	            <p>  <?php echo $weather['texto']; ?> </p>
	            
	            <!--Row com duas colunas-->
	            <div style="padding: 15px 15px 15px 15px; background-color: #fafafa; text-align: center|middle;">
		        <div class="row centralizar">
		            <div class="col-xs-6">
		                <div class="demo-content">
		                	<img src="../public/images/icons/upload.png" class = "img_espace">
		                	<?php echo '<span class="font_azul">' . $weather['temperatura_maxima'] . '&deg;C ' . '</span>'; ?>
		                </div>
		            </div>
		            <div class="col-xs-6">
		                <div class="demo-content" >
		                	<img src="../public/images/icons/download.png" class = "img_espace">
		                	<?php echo '<span class="font_vermelha">' . $weather['temperatura_minima'] . '&deg;C ' . '</span>'; ?>
		                </div>
		            </div>
		        </div>

		        
		        <hr>
		        
		        <!--Row com duas colunas-->
		        <div class="row centralizar">
		            <div class="col-xs-6">
		                <div class="demo-content">
		                	<img src="../public/images/icons/raindrop-close-up.png" class = "img_espace">
		                	<?php echo '<span class="font_preta">' . $weather['chuva_probabilidade'] . 'mm ' . '</span>'; ?>
		                </div>
		            </div>
		            <div class="col-xs-6">
		                <div class="demo-content">
		                	<img src="../public/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" class = "img_espace">
		                	<?php echo '<span class="font_preta">' . $weather['chuva_precipitacao'] . '% ' . '</span>'; ?>
		                </div>
		            </div>
		        </div>
		        </div>
		        <hr>
	        </div>
        <?php
    	}

    	?>
        
    </div> <!-- FIM: Div ROW onde serão exibidas as previsões climáticas -->
    
    <hr>
    
    <!-- DIV RODAPÉ -->
    <div class="row">
        <div class="col-sm-12">
            <footer>
                <p>Climatempo - Challenge Accepted - Willian M. Toledo</p>
            </footer>
        </div>
    </div>
    
</div> 

</body>
</html>                                		