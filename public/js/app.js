$(document).ready(function(){
    
    /**
     * Autocomplete to input seach
     */
    $('#search').autocomplete({
        source: function(request, response) {
            $.ajax({
                url: '/api/locales/' + $('#search').val(),
                dataType: "json",
                data: {
                    token : $('meta[name=csrf-token]').attr("content")
                },
                success: response
            });
        },
        messages: {
            noResults: '',
            results: function() {}
        },
        open : function(){
            $(".ui-helper-hidden-accessible").css({display: "none"});
        },
        minLength: 1,
        cacheLength: 0,
        select: function(event, ui) {
            
            event.preventDefault();
            
            $("#search").val(ui.item.label);
            
            loadWeather(ui.item.value);
        },
        focus: function(event, ui) {
            
            event.preventDefault();
            
            $("#search").val(ui.item.label);
        }
    });
    
});

/**
 * Controller to load weather to city searched
 * 
 * @param {Integer} localeId
 * @returns {Void}
 */
function loadWeather(localeId){

    $.get( '/api/weather/' + localeId, function( data ){
        
        clearResult();
                
        if(data.weather.length > 0){
            
            setCityName(data.locale);

            $.each(data.weather, function(key, value){

                /**
                 * Returned data formated to show to user
                 * 
                 * @type Object
                 */
                var processed = {
                    date: formatDate(value.date),
                    text: value.text,
                    temperatureMin: value.temperature_min + '°C',
                    temperatureMax: value.temperature_max + '°C',
                    rainProbability: value.rain_probability + 'mm',
                    rainPrecipitation: value.rain_precipitation + '%'
                };

                cloneCard(processed);
            });
        }
    });
}

/**
 * Format date to pt-BR locale
 * Send date in format "AAAA-MM-DD"
 * 
 * @param {String} date
 * @returns {String}
 */
function formatDate(date){
    
    /**
     * Splited date
     * 
     * @type Array
     */
    var splitedDate = date.split('-');
    
    /**
     * Date in format "DD/MM/AAAA"
     * 
     * @type String
     */
    var newDate = splitedDate[2] + '/' + splitedDate[1] + '/' + splitedDate[0];
    
    return newDate;
}

/**
 * Set title to result of search
 * 
 * @param {Object} cityData
 * @returns {Void}
 */
function setCityName(cityData) {
    
    /**
     * Title with city data
     * 
     * @type String
     */
    var text = 'Previsão para ' + cityData.name + ' - ' + cityData.state;

    $('#cityName').text(text);    
}

/**
 * Clear older result and prepare to other result of search
 * 
 * @returns {Void}
 */
function clearResult() {

    $('#cityName').empty();
    
    $("#resultSearch").empty();
    
    $('html, body').scrollTop(0);
}

/**
 * Clone template card with weather data
 * 
 * @param {Object} data
 * @returns {Void}
 */
function cloneCard(data){
    
    /**
     * Template card element
     * 
     * @type Element
     */
    var template = document.querySelector('#cardTemplate');
    
    $.each(data, function(key, value){
        template.content.querySelector('#' + key).textContent = value;
    });
    
    /**
     * Card to add to DOM
     * 
     * @type Node
     */
    var clone = document.importNode(template.content, true);
    
    $("#resultSearch").append(clone);
    
}