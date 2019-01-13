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

    <link rel="stylesheet" href="assets/css/main.css">

    <title>ClimaTempo - Homepage</title>
    <style>
       @media only screen and (max-width: 767px) {
            .row-responsive {
                display: block;
            }
            .search {
                padding-top: 1em;
                max-width: 100%;
            }
            .logo {
                max-width: 100%;
                text-align: center;
            }
        }
       
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

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
        crossorigin="anonymous"></script>
</body>

</html>