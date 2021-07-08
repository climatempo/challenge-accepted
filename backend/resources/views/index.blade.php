<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel api</title>
</head>
<body>
    <h4>API utilizando PHP/Laravel</h4>
    <p>Versões utilizadas:</p>
    <p>Laravel v{{ Illuminate\Foundation\Application::VERSION }} (PHP v{{ PHP_VERSION }})</p>
    <hr>
    <p>Acesse o endpoint <a href="/api/v1/weather" target="_blank">weather</a></p>
    <p>Acesse o <a href="/reports/index.html" target="_blank">relatório de testes</a></p>
</body>
</html>
