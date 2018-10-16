$(document).ready(function () {
	$("#enviar").click(function (e) {
		e.preventDefault();
		var city = $('#city').val();
		$.ajax({
			type: "post",
			url: "http://localhost:5000/cidade.action.php",
			data: {
				city: city
			},
			dataType: "json",
			success: function (data) {
				for (var i = 0; i <= data.length; i++) {
					var nationalPattern = nationalPatternDate(data[i].date);
					$('#data' + i).html(nationalPattern);
					$('#texto' + i).html(data[i].text);
					$('#maxima' + i).html(data[i].max + "ºC");
					$('#minima' + i).html(data[i].min + "ºC");
					$('#precipitacao-chuva' + i).html(data[i].probability + "%");
					$('#possibilidade-chuva' + i).html(data[i].precipitation + "mm");

				}
			}
		}, 'json').fail(function () {
			alert("Cidade não encontrada!");

		});
	});

});

function nationalPatternDate(date) {
	var split = date.split('-');
	return split[2] + "/" + split[1] + "/" + split[0];
}