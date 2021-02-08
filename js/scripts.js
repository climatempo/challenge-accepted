const port = 8000
const init_url = `http://127.0.0.1:${port}/available_cities`
const prediction_url = `http://127.0.0.1:${port}/fetch_prediction`

jQuery.extend({
    getValues: function (url) {
        var result = null;
        $.ajax({
            url: url,
            type: 'get',
            async: false,
            dataType: 'json',
            success: function (data) {
                result = data;
            }
        });
        return result;
    }
});

var available_cities = $.getValues(init_url);
var json_response = {};

makeSearchCity = function(updateCards){
    searchCity = function () {

        var selectedCity = $("#Cidade").val();

        var result = available_cities.filter(obj => {
            return obj.name == selectedCity
        })[0]

        if (result == null) {
            json_response = {}
        } else {
            json_response = $.getValues(prediction_url.concat(`?id=${result.id}`));
        }

        updateCards()
    }; return searchCity
};

makeUpdateCards = function (cards) {
    updateCards = function () {
        console.log('updaing cards')
        console.log(json_response)
        if (Object.keys(json_response).length === 0) {
            for (var i = 1; i < cards.length; i++) {
                cards[i].style.visibility = "hidden";
            }
        } else {
            for (var i = 1; i < cards.length; i++) {
                cards[i].style.visibility = "visible";
                cards[i].childNodes[1].innerText = json_response[0].weather[i-1].date
                cards[i].childNodes[3].innerText = json_response[0].weather[i-1].text
                cards[i].childNodes[5].children[0].children[0].children[0].children[0].children[1].innerText = json_response[0].weather[i-1].temperature["min"] + "ºC"
                cards[i].childNodes[5].children[0].children[0].children[0].children[1].children[1].innerText = json_response[0].weather[i-1].temperature["max"] + "ºC"
                cards[i].childNodes[5].children[0].children[0].children[1].children[0].children[1].innerText =json_response[0].weather[i-1].rain["probability"] + "%"
                cards[i].childNodes[5].children[0].children[0].children[1].children[1].children[1].innerText=json_response[0].weather[i-1].rain["precipitation"] + "mm"
            }
        }
    };
    return updateCards
}

window.onload = function () {

    console.log('Window On Load')

    // Criar Mapa
    var mymap = L.map('mapid').setView([-23.53, -46.7], 11);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap);

    // Adicionar marcadores nos mapas das cidades disponíveis
    for (var i = 0; i < available_cities.length; i++) {
        L.marker([available_cities[i].lat, available_cities[i].long]).addTo(mymap)
            .bindPopup(`<b>${available_cities[i].name}</b>`).openPopup();
    }

    var cards = document.getElementsByClassName("card");

    updateCards = makeUpdateCards(cards)
    searchCity = makeSearchCity(updateCards)
    updateCards()


}