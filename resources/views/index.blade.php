<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Climatempo | Challenge</title>
    <link rel="shortcut icon" type="image/png" href="{{ asset('favicon.png') }}"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js" integrity="sha256-eGE6blurk5sHj+rmkfsGYeKyZx3M4bG+ZlFyA7Kns7E=" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>

<body>
    <header class="text-center">
        <img src="{{ asset('img/logo-white.png') }}" alt="">
        <input id="search" type="text" placeholder="Busca">
    </header>

    <main>
        <h3 id="cityName"></h3>
        
        <div id="resultSearch"></div>
        
        <template id="cardTemplate">
            <div class="card shadow">
                <div class="card-body">
                    <h5 id="date" class="card-title"></h5>
                    <p id="text" class="card-text"></p>
                </div>

                <div class="card-footer">
                    <div class="row">
                        <div class="col-6 text-right">
                            <span class="icon-weather icon-up"></span>
                            <h3 id="temperatureMax" class="text-weather text-blue"></h3>
                        </div>
                        <div class="col-6 text-right">
                            <span class="icon-weather icon-down"></span>
                            <h3 id="temperatureMin" class="text-weather text-red"></h3>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6 text-right">
                            <span class="icon-weather icon-waterdrop"></span>
                            <h3 id="rainProbability" class="text-weather"></h3>
                        </div>
                        <div class="col-6 text-right">
                            <span class="icon-weather icon-umbrella"></span>
                            <h3 id="rainPrecipitation" class="text-weather"></h3>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </main>
    
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</body>

</html>