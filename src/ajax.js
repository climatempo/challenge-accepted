$('#search').on('input', function(e) {
	e.preventDefault();
  $.get(`/?keyword=${encodeURIComponent(e.target.value)}`, function(data) {
    $('section').html('');
    if(data.length > 0) {
    $('section').append(
      `
      <h2 class="title">Previsão do tempo em ${data[0].locale.name}</h1>
      <div class="row">
        <ul class="list-group" id="weather-list">
        </ul>
      </div>
      `
    );

    $('#weather-list').html('');
    data.forEach(function(city) {
      city.weather.forEach(function(date) {
        $('#weather-list').append(
          `
            <div class="weather-card">
              <div class="row card-divider">
                  <h3 class="card-date">${date.date}</h3>
                  <p class="card-text">${date.text}</p>
              </div>
              <div class="row">
                <div class="col span-1-of-2">
                  <div class="row">
                    <span class="card-icon"><img src="/resources/img/icons/upload.png"></span>
                    <span class="card-attr max">${date.temperature.max}ºC</span>
                  </div>
                  <div class="row">
                    <span class="card-icon"><img src="/resources/img/icons/raindrop-close-up.png"></span>
                    <span class="card-attr">${date.rain.precipitation}mm</span>
                  </div>
                </div>
                <div class="col span-1-of-2">
                  <div class="row">
                    <span class="card-icon"><img src="/resources/img/icons/download.png"></span>
                    <span class="card-attr min">${date.temperature.min}ºC</span>
                  </div>
                  <div class="row">
                    <span class="card-icon"><img src="/resources/img/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png"></span>
                    <span class="card-attr">${date.rain.probability}%</span>
                  </div>
                </div>
              </div>
            </div>
          `
        );
      });
    });
    }

  });
});
