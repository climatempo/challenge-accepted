/*
 * Author: Lucas de Oliveira <94oliveira.lucas@gmail.com>
 * Website: http://deoliveiralucas.net
 */
(function ($, moment) {
  'use strict';

  /*
   * Initiate all needed vars and 
   * DOM elements that will be used 
   * by other methods
   */
  var Weather = function () {
  	this.$listWeather = $('.list-weather');
  	this.$cardWeather = $('.card-weather').remove().clone();
  };

  /*
   * Execute an ajax to get the weather 
   * from a specific locale passed by parameter 
   * and return a promise
   */
  Weather.prototype.getByLocaleId = function (localeId) {
    return $.ajax({
      url: '/api/locale/' + localeId + '/weather',
      type: 'GET'
    });
  };

  /*
   * Get the weather from a specific locale, add the 
   * returned data in a card and then append this 
   * card at the end of a div element
   */
  Weather.prototype.loadCardsFromLocale = function (localeId) {
  	var $this = this;
  	$this.$listWeather.html('');
  	
  	$this.getByLocaleId(localeId).done(function (res) {
  		if (res.data.length == 0) {
  			return;
  		}
  		
  		res.data[0].forEach(function (weather) {
	  		$this.$cardWeather.find('.weather-date'       ).text(moment(weather.date).format('DD/MM/YYYY'));
	  		$this.$cardWeather.find('.weather-description').text(weather.text);
	  		$this.$cardWeather.find('.text-up'            ).text(weather.temperature.max + '°C');
	  		$this.$cardWeather.find('.text-down'          ).text(weather.temperature.min + '°C');
	  		$this.$cardWeather.find('.text-prec'          ).text(weather.rain.precipitation + 'mm');
	  		$this.$cardWeather.find('.text-rain'          ).text(weather.rain.probability + '%');
	      
	  		$this.$listWeather.append($this.$cardWeather.html());
  		});
    });
  };
  
  $.Weather = new Weather;
  $.Weather.Constructor = Weather;
}(window.jQuery, moment));