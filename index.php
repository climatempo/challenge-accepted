<?php
session_start();
if (isset($_POST['g'])) {
    $_SESSION['cidade'] = $_POST['g'];
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <title>Climatempo - João Victor Fornitani Silva</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsivo.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="js/jquery-3.2.1.min.js"></script>
</head>
<body>
<header class="capa">
    <img src="images/logo-white.png" alt="logo" class="capa_img block">
</header>
<div class="wfull paddingtop30">
    <div class="buscador_tam tctt">
        <div class="tctt w100">
            <input type="text" class="left btnb" id="vlupa">
            <button class="left btn_lupa" id="lupa" onclick="pesquisa()"><img src="images/icons/search.png"
                                                                              class="btnpdf"></button>
        </div>
    </div>
</div>
<div class="wfull martop70 vh8 " id="cidade"></div>

<div id="cards">
    <script>
        function pesquisa() {
            enviar = $("#vlupa").val();
            $.post('php/locales.php', {
                valor: enviar
            }, function (response) {
                if (response == true) {
                    $.post('index.php', {
                        g: enviar
                    }, function (response1) {
                    });
                    $('#cidade').html("<p class=\"w20 ubuntu tctt nome\">" + enviar + "</p>");
                    $('#cards').load('php/weather.php?');
                } else {
                    alert("Não existe");
                }
            });
        }
    </script>
</div>
</body>
</html>



