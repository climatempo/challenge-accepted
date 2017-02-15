var locales = null;
var currentLocaleId = null;

$(document).ready(function () {
    $('.modal').modal();
    getLocales(function () {
        var autoCompleteData = {}
        for (var i in locales) {
            autoCompleteData[locales[i]['name']] = null;
        }
        $('#search').autocomplete({
            data: autoCompleteData,
            limit: 20
        });
    });

    $("#search").keyup(showWeather);

    $("#search").change(showWeather);
});

function getLocales(callback) {
    $.getJSON("api/locales", function (response) {
        locales = response;
        callback();
    });
}

function showWeather() {
    var searchValue = $(this).val();
    var selectedLocale = null;
    for (var i in locales) {
        if (searchValue.toLowerCase() == locales[i].name.toLowerCase()) {
            selectedLocale = locales[i];
        }
    }

    if (selectedLocale) {
        $("#results").show();
        if (currentLocaleId != selectedLocale.id) {
            currentLocaleId = selectedLocale.id;
            $("#locale-title").text(selectedLocale.name + " - " + selectedLocale.state);
            getWeather(currentLocaleId, function (data) {
                var items = [];
                for (var i  in data.weather){
                    var itemData = data.weather[i];
                    var item = {};
                    item.date = moment(itemData.date).locale('pt-br').format('LL');
                    item.text = itemData.text;
                    item.temperature = itemData.temperature;
                    item.rain = itemData.rain;
                    items.push(item);
                }
                var template = $('#results-template').html();
                Mustache.parse(template);
                var rendered = Mustache.render(template, { items: items });
                $('#results-target').html(rendered);
            })
        }
    }
    else {
        $("#results").hide();
    }
}

function getWeather(id, callback) {
    $.getJSON("api/weather/" + id, function (response) {
        callback(response);
    });
}