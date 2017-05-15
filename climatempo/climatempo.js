console.log('oi');

$("#localidade").keydown(function(){
	console.log($(this).val());

	$.getJSON("api/localidade.php?name="+$(this).val(), function(data){
		console.log("Localidade: ");
		console.log(data[0]);

		$.getJSON("api/previsao.php?id_localidade="+data[0].id, function(data){
			console.log("Previsão: ");
			
			console.log(data.weather);
			var previsao = [];

			previsao.push('<h2>' + data.locale.name + '</h2>');

			$.each(data.weather, function(chave, dia) {

				previsao.push('<ul>')
				previsao.push('<li>Previsão para o dia ' + dia.date + ': ' + dia.text + '</li>');
				previsao.push('<li>Temperaturas entre ' + dia.temperature.min + ' e ' + dia.temperature.max + ' °C</li>');
				previsao.push('<li>' + dia.rain.probability + '% de probabilidade de ' + dia.rain.precipitation + ' mm de chuva</li>');
				

			});
			previsao.push('</ul>');
			$(".previsoes").empty().append(previsao);
		});
	});
});

