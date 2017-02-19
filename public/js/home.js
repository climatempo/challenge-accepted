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
        this.html = `<div>`;
        this.html += `<div>Data: ${card.date}</div>`;
        this.html += `<div>Texto: ${card.text}</div>`;
        this.html += `<div>Max: ${card.temperature.max}ºC</div>`;
        this.html += `<div>Min: ${card.temperature.min}ºC</div>`;
        this.html += `<div>Preciptação: ${card.rain.precipitation}mm</div>`;
        this.html += `<div>Probabilidade: ${card.rain.probability}%</div>`;
        this.html += `</div>`;
        this.html += `<br><br>`;

        return this;
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

        $('#titulo').innerHTML = `<h2>${previsao.locale.name} - ${previsao.locale.state}</h2>`;

        previsao.weather.forEach((item, index) => {
            cardsHtml += (new Card(item)).html;
            if (num_cards === index) {
                cards.innerHTML = cardsHtml;
            }
        });
    };


    if (!previsao.hasOwnProperty('result'))
        draw();
    else {
        $('#titulo').innerHTML = `<h2>Localização: '${$('#local').value}' não encontrada.</h2>`;
        $('#cards').innerHTML = '<h1>:(</h1>';
    }

};


const getPrevisao = () => {
    httpRequest.getAsync('http://localhost:3000/previsao?q=' + $('#local').value, drawCards);
};

