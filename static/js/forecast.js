'use strict';
class Card
{
    constructor(weather) {
        this.html ='<div class="card">';
        this.html +='<div class="title">';
        this.html +='<span>'+weather.date+'</span>';
        this.html +='<p>'+weather.text+'</p>';
        this.html +='</div>';
        this.html +='<div class="weather">';
        this.html +='<div class="row">';
        this.html +='<div class="col assertive"><i class="icon-max-c"></i>'+weather.temperature.max+' ºC</div>';
        this.html +='<div class="col positive"><i class="icon-min-c"></i>'+weather.temperature.min+' ºC</div>';
        this.html +='</div>';
        this.html +='<div class="row">';
        this.html +='<div class="col"><i class="icon-waterdrop"></i>'+weather.rain.precipitation+' mm</div>';
        this.html +='<div class="col"><i class="icon-umbrella"></i>'+weather.rain.probability+' %</div>';
        this.html +='</div>';
        this.html +='</div>';
        this.html +='</div>';

        return this;
    }
    static noResult() {
        this.html ='<div class="card">';
        this.html +='<div class="title">';
        this.html +='<span>' + Card.dateFormated(new Date()) + '</span>';
        this.html +='<p>Ops, não encontrei previsão do tempo!</p>';
        this.html +='</div>';
        this.html +='</div>';
        return this;
    }
    static dateFormated(d) {
        var data = new Date(d);
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        return [dia, mes + 1, ano].join('/');
    }
}

class httpRequest
{
    static get(url, callback) {
        $.ajax({
            url: url,
            type: 'get',
            data: '',
            cache: true,
            contentType: false,
            processData: false,
            success: function(json) {
                callback(json);
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }
}

const cards = function(res){
    var card = '';
    if(res.status){
        card += "<h1>Previsão para " + res.result.locale.name + "- " + res.result.locale.state + "</h1>"
        $.map(res.result.weather, function (item) {
            item.date = Card.dateFormated(item.date);
            card += (new Card(item)).html;
        });
    }else{
        card += "<h1>Previsão para " + $('input[name=\'search\']').val() +"</h1>";
        card += ( Card.noResult()).html;
    }
    $('#cards').html(card);
    $('.card').show(1000)
}

const getForecast = function(){
    httpRequest.get('index.php/api/query/weather?search=' + $('input[name=\'search\']').val(),cards);
}

$('input[name=\'search\']').bind('keydown', function(e) {
    if (e.keyCode == 13) {
        $('#search').trigger('click');
    }
});
