$(document).ready(function() {

	// When scroll page capture the position in screen 
	// to show or hidden the go to up button.

	$(window).on("scroll", function() {
		var scroll = $(window).scrollTop();
		
		if (scroll >= 330) {
			$(".arrow-up").removeClass("opacity");
		} else {
			$(".arrow-up").addClass("opacity");
		}
	});

	$(this).on("click", ".actGoToUp", function(e) {
		$("html, body").animate({
			scrollTop: 0 
		}, "fast");
	});

	$(document).on("submit", "form", function(e) {		
		e.preventDefault();
		
		var fields = $(this).serialize();
		var action = $(this).attr("action");
		var city   = $("input").val();

		if (!city) return alert("Digite uma cidade");

		$.fn.updateGlobalVars();
	
		$.ajax({
			type: "GET",
			dataType: "json",
			data: fields,
			url: action, 
			contentType: "application/json; charset=utf-8",
			success: function(response) {
                if (response.length) {
                	window.$card.remove();
                	window.$lblLocale.html(city);
                	window.$noResults.addClass("hidden");
                	window.$weather.removeClass("hidden");

                	response[0].forEach(function(weather) {
                		var html = "<div class=\"card\">" +
										"<div class=\"panel-top\">" +
											"<h3 id=\"date\">" + moment(weather.date).format('DD/MM/YYYY') + "</h3>" +
											"<p id=\"description\">" + weather.text + "</p>" +
										"</div>" +
										"<div class=\"panel-bottom\">" +
											"<div class=\"row\">" +
												"<div class=\"col col-2\">" +
													"<img src=\"assets/images/icons/upload.png\" alt=\"Temperatura Máxima\">" +
												"</div>" +
												"<div class=\"col col-3\">" +
													"<span class=\"light-blue\" id=\"temperatureMin\">" + weather.temperature.min + "ºC</span>" +
												"</div>" +
												"<div class=\"col col-2\">" +
													"<img src=\"assets/images/icons/download.png\" alt=\"Temperatura Mínima\">" +
												"</div>" +
												"<div class=\"col col-3\">" +
													"<span class=\"red\" id=\"temperatureMax\">" + weather.temperature.max + "ºC</span>" +
												"</div>" +
											"</div>" +
											"<div class=\"row\">" +
												"<div class=\"col col-2\">" +
													"<img src=\"assets/images/icons/raindrop-close-up.png\" alt=\"Rain Probability\">" +
												"</div>" +
												"<div class=\"col col-3\">" +
													"<span id=\"rainProbability\">" + weather.rain.probability + "mm</span>" +
												"</div>" +
												"<div class=\"col col-2\">" +
													"<img src=\"assets/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png\" alt=\"Rain Precipitation\">" +
												"</div>" +
												"<div class=\"col col-3\">" +
													"<span id=\"rainPreciptation\">" + weather.rain.precipitation + "%</span>" +
												"</div>" +
											"</div>" +
										"</div>" +
									"</div>";

				        window.$boxCards.append(html);
				        // an option is => window.$boxCards.append($card.html());
                	});
                } else {
                	window.$lblNoResults.text("Sem dados de previsão para " + city);
                	window.$noResults.removeClass("hidden");
                	window.$weather.addClass("hidden");
                } 
            }
		});
	});

	$.fn.updateGlobalVars = function() {
		window.$boxCards     = $(".box-cards");
		window.$card         = $(".card");
		window.$lblLocale    = $(".lbl-locale");
		window.$lblNoResults = $(".lbl-no-results");
		window.$noResults    = $(".no-results");
		window.$weather      = $(".weather");
	}

})