var _bscAjax = false;

$(window).on("load", function() {
    if ($('#txtBscCity').val()) {
        setTimeout(function() {
            $(".js-busca-ajax").trigger("submit");
        }, 250);
    }
});

$(document).ready(function() {
    $(document).on('click', '[href="#"]', function(e) {
        e.preventDefault();
    });

    $(document).on('submit', '.js-busca-ajax', function(e) {
        e.preventDefault();
        loadEnable();
        var $form = $(this);
        if (_bscAjax) return false;
        _bscAjax = true;

        var url    = $form.attr('action');
        var method = $form.attr('method');
        var cmp    = $form.serialize();
        var cmpCidadeBsc = $('#txtBscCity').val();
        var msg = 'Previsão para ' + cmpCidadeBsc;

        $.ajax({
            method: method,
            url: url,
            data: cmp,
            success: function(response) {
                _bscAjax = false;
                loadDisable();

                if (response.error == true) {
                    $('.js-msg').text(response.message).fadeIn('fast');
                    $('.js-dados-card').html('');// Limpar busca
                    return false;
                }

                var card = getTemplateCard(response);
                $('.js-msg').text(msg).fadeIn('fast');
                $('.js-dados-card').html(card);
            }
        })
        .fail(function(error) {
            _bscAjax = false;
            loadDisable();
            $('.js-dados-card').html('');// Limpar busca
            $('.js-msg').text('Falha de processamento da requisição. Tente novamente mais tarde.').fadeIn('fast');
            console.log(error);
        });
    });

    function loadEnable() {
        $("html, body").animate({ scrollTop: 0 }, 750);
        $('.load').fadeIn('fast');
    }

    function loadDisable() {
        $('.load').fadeOut('fast');
    }

    function getTemplateCard(dataCard) {
        var len = dataCard.length;
        var htmlTemplate = '';

        for (var i = 0; i < len; i++) {
            var pathImg = $('#path').val();;
            var dados   = dataCard[i];

            htmlTemplate += ''
            + '<div class="card-4">'
            + '    <div class="title">'
            + '        <h5>'+moment(dados.date).format('DD/MM/YYYY')+'</h5>'
            + '        <p>'+dados.text+'</p>'
            + '    </div>'

            + '    <div class="content-card">'
            + '        <div class="item w-lg-50">'
            + '            <span class="icon"><img src="'+pathImg+'/images/icons/upload.png" /></span>'
            + '            <span class="text blue">'+dados.temperature.max+'°C</span>'
            + '        </div>'
            + '        <div class="item w-lg-50">'
            + '            <span class="icon"><img src="'+pathImg+'/images/icons/download.png" /></span>'
            + '            <span class="text red">'+dados.temperature.min+'°C</span>'
            + '        </div>'

            + '        <div class="item w-lg-50">'
            + '            <span class="icon"><img src="'+pathImg+'/images/icons/raindrop-close-up.png" /></span>'
            + '            <span class="text">'+dados.rain.precipitation+'mm</span>'
            + '        </div>'
            + '        <div class="item w-lg-50">'
            + '            <span class="icon"><img src="'+pathImg+'/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" /></span>'
            + '            <span class="text">'+dados.rain.probability+'%</span>'
            + '        </div>'
            + '    </div>'
            + '</div>';
        }

        return htmlTemplate;
    }
});
