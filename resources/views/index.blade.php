<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{ mix("css/app.css") }}">
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">
                        <span><img src="{{ asset("images/logo.png") }}" alt="" width="150"></span>
                    </a>
                </div>
            </div>
        </nav>

        <div class="container">
            <weather></weather>
        </div>
    </div>

    <script src="{{ mix("js/app.js") }}"></script>
</body>
</html>