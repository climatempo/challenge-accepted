/**
 * Autor: Lucas Leal
 * Saturno - Parallax Plugin
 *
 */ (function ($) {

    $.fn.saturno = function (options) {

        // Configuracao padrao
        var config = $.extend({
            velocidade: 10,
            fade: false,
            fade_suavizacao: 500
        }, options);

        $(this).css('background-repeat', 'no-repeat');
        $(this).css('background-size', 'cover');
        $(this).css('background-position', '50% 50%');



        // varre os objetos
        return this.each(function () {

            // salva uma referencia
            var $this = $(this);

            // define o listener do scroll
            $(document).scroll(function () {

                var posicao = Math.round($(window).scrollTop() / Math.abs(config.velocidade));

                if (config.velocidade == 0 || config.velocidade > 0) {
                    posicao = posicao+50;
                } else {
                    posicao = 50-posicao;
                }


                // define a posicao
                $this.css('background-position', '50% ' + posicao + '%');
                if (config.fade) {
                    $this.css('opacity', (($this.offset().top - $(window).scrollTop()) / config.fade_suavizacao) + 1);
                }

            });

        });
    }
}(jQuery));