/**
 * Created by gusanthiago on 2/12/17.
 */
/**
 * Renderiza e controle componentes do corpo da pagina
 */
import { Template } from 'meteor/templating';

import './body.html';

/**
 * Constrói layouts de previsao
 * @param weather
 * @returns {string}
 */
const makeReturnForView = (weather) => {
	let result = "";
	weather.map((i) => {
		let locale = i.locale.name + " - " + i.locale.state;
		result += `<h2 class="text-center">Previsao para ${locale}</h2>`
		i.weather.map((j) => {
			j.date = moment(j.date).format("DD/MM/YYYY");
			result += `
			<div class="col-sm-12 col-md-12 col-lg-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title text-capitalize text-center"><ins>${j.date}</ins></h3>
                <p class="text-capitalize text-center">${j.text}</p>
            </div>
            <div class="panel-body text-center">
                <div class="row">
                    <img src="/icons/upload.png" />
                    <h3>
                        <span class="label label-info">${j.temperature.min} ºC</span>
                    </h3>
                    <img src="/icons/download.png" />
                    <h3>
                        <span class="label label-warning">${j.temperature.max} ºC</span>
                    </h3>
                </div>
                <div class="row">
                    <img src="/icons/raindrop-close-up.png" />
                    <h3>
                        <span class="label label-default">${j.rain.precipitation} mm</span>
                    </h3>
                    <img src="/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" />
                    <h3>
                        <span class="label label-default">${j.rain.probability}  %</span>
                    </h3>
                </div>
            </div>
        </div>
    </div>
			`;
		});
	});
	return result;
};

/**
 * Ao inicializar preencha a tela  com os dados
 */
Template.bodyapp.onCreated(() => {
	console.log("© CLIMATEMPO !!,\nFazemos previsão\nMilagre é com a Josélia");
	let templateStr = ``,
			dataWeather = [];
	$.get("cities/", (data) => {
		dataWeather = data.response;
	}).done(() => {
		$("#listForecast").html(makeReturnForView(dataWeather));
	}).fail(() => {
		$("#listForecast").html("<h3>Não foi possivel buscar os dados</h3>");
	});
});

/**
 * Helpers
 */
Template.bodyapp.helpers({});

/**
 * Eventos da pagina
 */
Template.bodyapp.events({

	/**
	 * Quando o usuario digitar no campo
	 * @param event
	 */
	'keyup #search' : (event) => {
		event.preventDefault();
		const text = $("#search").val();
		let templateStr = ``,
			dataWeather = [];
		$.get("cities/"+text, (data) => {
			dataWeather = data.response;
		}).done(() => {
			if (dataWeather.length == 0) {
				$("#listForecast").html(`
					<div class="alert alert-info" role="alert">
        		Nenhum registro encontrado com <b>'${text}' !!</b> .
      		</div>
				`);
			} else {
				$("#listForecast").html(makeReturnForView(dataWeather));
			}
		}).fail(() => {
			$("#listForecast").html("<h3>Não foi possivel buscar os dados</h3>");
		});
	}
});
