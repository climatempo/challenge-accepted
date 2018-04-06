$(function() {
	$('#input-search').focus(); // focus inicial no input de pesquisa

	// Funcao submit pesquisa
	function search()
	{
		var valueResearch = $('#input-search').val();

		$.ajax({
			url: '/localePesquisar',
			type: 'POST',
			dataType: 'json',
			data: {'nome': valueResearch},
		})
		.done(function(data)
		{
			if(data.erro === false) {
				var id = data.locale[0].id;
				
				$.ajax({
					url: '/weatherPesquisar',
					type: 'POST',
					dataType: 'json',
					data: {id: id},
				})
				.done(function(dataPrev)
				{
					if(dataPrev.erro === false)
					{
						$('#page-content').html('');

						for(var i = 0; i < dataPrev.weather.length; i++)
						{
							var html = '';
							var elem = dataPrev.weather[i];
							var dataCard = elem.date.split('-');
							dataCard = dataCard[2]+'/'+dataCard[1]+'/'+dataCard[0];

							html += '<div class=\"card col-6\">'+
							'<div class=\"card-content\">'+
							'<div class=\"data-card\">'+dataCard+'</div>'+
							'<div class=\"message-card\">'+elem.text+'</div>'+
							'<div class=\"infos-card\">'+
							'<div class=\"block-card\">'+
							'<div class=\"max-temp cell-card\">'+
							'<i class=\"img-max image\"></i>'+
							'<p class=\"temperature-max temperature\">'+elem.temperature.max+'</p>'+
							'</div>'+
							'<div class=\"min-temp cell-card\">'+
							'<i class=\"img-min image\"></i>'+
							'<p class=\"temperature-min temperature\">'+elem.temperature.min+'</p>'+
							'</div>'+
							'</div>'+

							'<div class=\"block-card\">'+
							'<div class=\"precipitation cell-card\">'+
							'<i class=\"img-precipitation image\"></i>'+
							'<p class=\"text-precipitation temperature\">'+elem.rain.precipitation+'</p>'+
							'</div>'+
							'<div class=\"probability cell-card\">'+
							'<i class=\"img-probability image\"></i>'+
							'<p class=\"text-probability temperature\">'+elem.rain.probability+'</p>'+
							'</div>'+
							'</div>'+
							'</div>'+
							'</div>'+
							'</div>';

							$('#page-content').append(html);
						}
					}
				});
			}
			else {
				alert('Cidada nao encontrada.');
			}
		})
		.fail(function()
		{
			alert('Erro');
		});
	}

	// Submit com click no botao ou enter no input
	$('#btn-submit-search').click(function(e) {
		search();
	});
	$('#input-search').keyup(function(e)
	{
		if(e.keyCode === 13)
		{
			search();
		}
	});

	$('.description a').click(function(e)
	{
		e.preventDefault();

		$('#input-search').val($(this).attr('data-city'));
		$('#btn-submit-search').click();
	})
});