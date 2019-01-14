<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css">

    <link rel="stylesheet" href="assets/css/main.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
    <title>ClimaTempo - Homepage</title>
    <style>
      
       
    </style>
</head>

<body>
    <header class="header">
        <div class="container">
            <div class="row row-responsive">
                <div class="col-8 logo">
                    <a href="" class="col">
                        <img src="assets/images/logo.png" class="logo-header" alt="ClimaTempo Index">
                    </a>
                </div>
                <nav class="col-4 search">
                    <input id="city" name="city" class="search-input" placeholder="Buscar cidade" type="text">
                    <button class="btn btn-default">
                        <i class="fas fa-search"></i>
                    </button>
                </nav>
            </div>
        </div>
    </header>

    <section>
        <?php if(isset($search)) {?>
            <div class="title-forecast">
                <i class="fa fa-sun-o" aria-hidden="true"></i>
                Previsão para <?php echo $city ?>
                <i class="fa fa-cloud" aria-hidden="true"></i>
            </div>
            <div class="container">
                <div class="cards" id="owl-weather">
                    <?php foreach($weather as $w){ ?>
                        <div class="card card-forecast">
                            <img class="card-img-top" src="https://www.otaboanense.com.br/wp-content/uploads/2017/10/previsaotempo_clima.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title"><?php echo (new DateTime($w->date))->format('d-m-Y') ?></h5>
                                <p class="card-text">
                                    <div class="row">
                                        <div class="col-xs-6 col-md-6">
                                            <img src="assets/images/icons/protect-rain.png" alt=""> <?php echo $w->rain->probability ?>%
                                        </div>
                                        <div class="col-xs-6 col-md-6">
                                            <img src="assets/images/icons/raindrop-close-up.png" alt=""> <?php echo $w->rain->precipitation ?>mm
                                        </div>
                                    </div>
                                </p>    
                                <p>
                                    <?php echo $w->text ?>
                                </p>
                                <p class="weather-info">
                                    <b>Máxima de: </b><b style="color: red;"><?php echo $w->temperature->max ?>°C</b>
                                    <hr>
                                    <b>Minima de: </b><b style="color: blue;"><?php echo $w->temperature->min ?>°C</b>
                                </p>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        <?php } else { ?>
            <div class="title-forecast">
                Faça uma busca para saber a previsão! <i class="fa fa-cloud" aria-hidden="true"></i>
            </div>
            <div class="container">
                <div class="cards">
                    <div class="card card-forecast">
                        <img class="card-img-top" src="http://www.brasilimoveismt.com.br/site/images/util_phones/climatempo.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Desenvolvimento Agíl ?</h5>
                            <p class="card-text">Sou um dos milhões seguidores do Método <a href="http://sou.gohorseprocess.com.br/extreme-go-horse-xgh/" target="_blank">Extreme Go Horse!</a> no qual faz sucesso entre os melhores programadores do mundo.</p>
                        </div>
                    </div>
                    <div class="card card-forecast">
                        <img class="card-img-top" src="http://www.meioemensagem.com.br/wp-content/uploads/2017/06/climatempo.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Projetos pessoais</h5>
                            <p class="card-text">Apesar de ser adepto ao método <b>Go Horse</b>, prezo bastante pela qualidade de código.
                                Veja no <a href="https://github.com/RafaelGSS" target="_blank">Github</a>
                            </p>
                            <p>
                                Obs: Por favor, <b>não</b> leia meu primeiro projeto chamado <b>StudentRegistration</b>
                            </p>
                        </div>
                    </div>
                    <div class="card card-forecast">
                        <img class="card-img-top" src="https://advisor.climatempo.com.br/landing/img/share-logo.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Quest</h5>
                            <p class="card-text">
                                Porque o programador atravessou a rua ?
                            </p>
                            <p style="text-align: end;">
                                <del>Me contrate e saberá!</del>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <?php } ?>
    </section>
    

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
        crossorigin="anonymous"></script>
    <script  src="https://code.jquery.com/jquery-3.3.1.min.js"  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="  crossorigin="anonymous"></script>     
    <script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>

    <script>
        $(document).ready(function() {
            $('#owl-weather').owlCarousel({
                navigation: true,
                items: 4
            });
        });
    </script>
</body>

</html>