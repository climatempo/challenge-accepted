'use strict';

class httpRequest {
    static getAsync(url, callback) {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                callback(xmlHttp.response);
        };
        xmlHttp.open('GET', url, true);
        xmlHttp.send(null);
    }
}


class Card {
    constructor(card) {
        this.html = `<div class="card">`;

        this.html += `<div class="item item-divider">`;
        this.html += `<div class="card-date"><i class="ion-calendar font-20"></i>${card.date}</div>`;
        this.html += `<hr />`;
        this.html += `<div class="card-text">${card.text}</div>`;
        this.html += `</div>`;

        this.html += `<div class="item item-text-wrap">`;
        this.html += `<div class="center row">`;
        this.html += `<div class="max col font assertive"><i class="ion-arrow-up-c"></i>${card.temperature.max}ºC</div>`;
        this.html += `<div class="min col font royal"><i class="ion-arrow-down-c"></i>${card.temperature.min}ºC</div>`;
        this.html += `</div>`;

        this.html += `<div class="center row">`;
        this.html += `<div class="probability col font positive"><i class="ion-waterdrop"></i>${card.rain.precipitation}mm</div>`;
        this.html += `<div class="probability col font energized"><i class="ion-umbrella"></i>${card.rain.probability}%</div>`;
        this.html += `</div>`;
        this.html += `</div>`;

        this.html += `</div>`;

        return this;
    }

    static convertDate(strDate) {

        var data = new Date(strDate);

        var dia = data.getDate();
        if (dia.toString().length === 1) dia = `0${dia}`;

        var mes = data.getMonth() + 1;
        if (mes.toString().length === 1) mes = `0${mes}`;

        var ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }
}


const $ = (seletor) => {
    return document.querySelector(seletor);
};


const drawCards = (response)=> {

    const previsao = JSON.parse(response);

    const draw = () => {
        const num_cards = previsao.weather.length - 1;
        let cardsHtml = '';
        const cards = $('#cards');

        $('#titulo').innerHTML = `<h2><i class="ion-location pin assertive""></i>${previsao.locale.name} - ${previsao.locale.state}</h2>`;

        previsao.weather.forEach((item, index) => {
            item.date = Card.convertDate(item.date);
            cardsHtml += (new Card(item)).html;
            if (num_cards === index) {
                cards.innerHTML = cardsHtml;
            }
        });
    };


    if (!previsao.hasOwnProperty('result'))
        draw();
    else {
        $('#titulo').innerHTML = `<h2 class="font"><i class="ion-sad font-6"><br></i>Localização: '${$('#local').value}' não encontrada.</h2>`;
    }

};


const getPrevisao = () => {
    httpRequest.getAsync('http://192.168.0.109:3000/previsao?q=' + $('#local').value, drawCards);
};

