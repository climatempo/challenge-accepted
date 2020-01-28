$(document).ready(() => {
    const app = $('#app');

    $('#search-form').submit((e) => {
        e.preventDefault();

        var location = document.getElementById('search-input').value;
    
        $.ajax({
            url: '/api/locale',
            type: 'GET',
            data: {
                term: location
            },
        })
        .done((result) => {
            app.html(`<h4 class="mt-2 mb-4">Previsão para ${result.name}, ${result.state}</h4>`);
            parseData(result);
        })
        .fail((err) => {
            app.html(`<div class="text-center my-5">
            <h3 class="pb-2">Hummm!</h3>
            <p>Isso é um pouco constrangedor.. mas, não conseguimos localizar a cidade <mark>${location}</mark>!</p>
            <p>Vamos tentar outra cidade?<br>
              Quem sabe, <mark>São Paulo</mark>, por exemplo?</p>
          </div>`);
        });
    });

    const parseData = (data) => {
        $.ajax({
            url: `/api/weather/${data.id}`,
            type: 'GET',
        })
        .done((result) => {
            result.weather.forEach(weather => {
                $(`<div class="card d-block mb-4">
                    <div class="card-body">
                    <h5 class="card-title">${ new Date(weather.date).toLocaleDateString('pt-BR') }</h5>
                    <p class="card-text">${ weather.text }</p>
                    </div>
                    <div class="card-body bg-light">
                    <div class="d-flex flex-row py-3">
                        <div class="d-flex col-6 align-items-center">
                        <img src="/images/icons/upload.png" alt="Máxima">
                        <p class="d-inline h4 pl-2 mb-0 text-primary">${ weather.temperature.max }°C</p>
                        </div>
                        <div class="d-flex col-6 align-items-center">
                        <img src="/images/icons/download.png" alt="Mínima">
                        <p class="d-inline h4 pl-2 mb-0 text-danger">${ weather.temperature.min }°C</p>
                        </div>
                    </div>
                    <div class="d-flex flex-row py-3">
                        <div class="d-flex col-6 align-items-center">
                        <img src="/images/icons/raindrop-close-up.png" alt="Precipitação">
                        <p class="d-inline h4 pl-2 mb-0">${ weather.rain.precipitation }mm</p>
                        </div>
                        <div class="d-flex col-6 align-items-center">
                        <img src="/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" alt="Probabilidade">
                        <p class="d-inline h4 pl-2 mb-0">${ weather.rain.probability }%</p>
                        </div>
                    </div>
                    </div>
                </div>`).appendTo(app);
            });
        })
        .fail((err) => console.log('Oops!', err));
    }
});