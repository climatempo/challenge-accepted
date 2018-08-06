'use strict';

$('#search').on('input', function (e) {
  e.preventDefault();
  $.get('/?keyword=' + encodeURIComponent(e.target.value), function (data) {
    $('section').html('');
    if (data.length > 0) {
      $('section').append('\n      <h2 class="title">Previs\xE3o do tempo em ' + data[0].locale.name + '</h1>\n      <div class="row">\n        <ul class="list-group" id="weather-list">\n        </ul>\n      </div>\n      ');

      $('#weather-list').html('');
      data.forEach(function (city) {
        city.weather.forEach(function (date) {
          $('#weather-list').append('\n            <div class="weather-card">\n              <div class="row card-divider">\n                  <h3 class="card-date">' + date.date + '</h3>\n                  <p class="card-text">' + date.text + '</p>\n              </div>\n              <div class="row">\n                <div class="col span-1-of-2">\n                  <div class="row">\n                    <span class="card-icon"><img src="/resources/img/icons/upload.png"></span>\n                    <span class="card-attr max">' + date.temperature.max + '\xBAC</span>\n                  </div>\n                  <div class="row">\n                    <span class="card-icon"><img src="/resources/img/icons/raindrop-close-up.png"></span>\n                    <span class="card-attr">' + date.rain.precipitation + 'mm</span>\n                  </div>\n                </div>\n                <div class="col span-1-of-2">\n                  <div class="row">\n                    <span class="card-icon"><img src="/resources/img/icons/download.png"></span>\n                    <span class="card-attr min">' + date.temperature.min + '\xBAC</span>\n                  </div>\n                  <div class="row">\n                    <span class="card-icon"><img src="/resources/img/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png"></span>\n                    <span class="card-attr">' + date.rain.probability + '%</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          ');
        });
      });
    }
  });
});