$(".btn-search").click(function() {
    searchWeather();
});

$(".txt-search").keypress(function(e) {
    if(e.which == 13)
        searchWeather();
});

function searchWeather() {
    var city = $(".txt-search").val();
    clearSearch();

    if(city.length > 0) {
        $.ajax({
            type: "POST",
            url: ENDPOINT,
            data: { city: city },
            success: function(response) {
                var response = JSON.parse(response);
                setHeaderSearch(response.status_message);
                
                if(response.status == 200)
                    generateCard(response.data);
            }
        });
    }        
}

function generateCard(response) {
    $.get(TEMPLATE_CARD, function(template) {
        $.each(response.weather, function(index, obj) {
            var html = $.parseHTML(template);

            $(html).find('.date').html(formatDate(obj.date));
            $(html).find('.description').html(obj.text);
            $(html).find('.max-weather').html(obj.temperature.max);
            $(html).find('.min-weather').html(obj.temperature.min);
            $(html).find('.humidity-weather').html(obj.rain.precipitation);
            $(html).find('.rain-weather').html(obj.rain.probability);
            
            $(".block-cards>.row").append($(html));
        });
    });
}

function setHeaderSearch(city) {
    $(".info-header").show();
    $(".info-header>h1").html(city);
}

function clearSearch() {
    $(".info-header").hide();
    $(".block-cards>.row").html("");
}

function formatDate(data) {
    return (data.substr(0, 10).split('-').reverse().join('/'));
}