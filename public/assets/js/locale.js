/*
 * Author: Lucas de Oliveira <94oliveira.lucas@gmail.com>
 * Website: http://deoliveiralucas.net
 */
(function ($) {
  'use strict';

  /*
   * Initiate all needed vars and DOM elements 
   * that will be used by other methods
   */
  var Locale = function () {
  	this.$weather        = $.Weather;
    this.$searchInput    = $('input[name=search]');
    this.$rowSearch      = $('.row-search');
    this.$selectedLocale = $('.selected-locale');
  };

  /*
   * Execute an ajax to get all locales 
   * with a name similar to what was passed 
   * by parameter and then return a promise
   */
  Locale.prototype.getBySimilarName = function (name) {
    return $.ajax({
      url: '/api/locale/similarname/' + name,
      type: 'GET'
    });
  };

  /*
   * Add autocomplete to the input search text 
   * using the library typeahead-bootstrap-ajax; 
   * the data shown on the autocomplete list must 
   * be passed by parameter
   */
  Locale.prototype.addAutocompleteToSearchInput = function (data) {
  	var $this = this;
  	$this.$searchInput.typeahead({
      source: data,
      display: 'name',
      onSelect: function (item) {
        if (item.text == "Result not Found") {
          return;
        }
        
        $this.$rowSearch.show();
        $this.$selectedLocale.text(item.text);
        $this.$weather.loadCardsFromLocale(item.value);
      }
    });
  };

  /*
   * Attach event to update the autocomplete data
   * when the input text is changed
   */
  Locale.prototype.attachEventGetLocaleToSearchInput = function (data) {
    var $this = this;
    $this.$searchInput.on('keyup', function () {
    	$this.addLocalesToAutocomplete();
    });
  };

  /*
   * Get the locale with the text type on the input seatch text
   * and then add to the autocomplete list
   */
  Locale.prototype.addLocalesToAutocomplete = function () {
    var $this = this;
    $this.getBySimilarName($this.$searchInput.val()).done(function (res) {
    	$this.addAutocompleteToSearchInput(res.data);
    });
  };
  
  $.Locale = new Locale;
  $.Locale.Constructor = Locale;
}(window.jQuery));