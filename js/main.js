$(function() {
	$('#input-search').focus(); // focus inicial no input de pesquisa

	// Funcao submit pesquisa
	function search()
	{
		var valueResearch = $('#input-search').val();

		$.ajax({
			url: '?act=search',
			type: 'POST',
			dataType: 'json',
			data: {'name-city': valueResearch},
		})
		.done(function(data)
		{
			var obj = JSON.stringify(data);
			var json = $.parseJSON(obj);
			var div = [];

			$('#page-content').html('');

			for(var i = 0; i < json.length; i++)
			{
				var new_data = json[i].date.split('-');
				new_data = (new_data[2]+'/'+new_data[1]+'/'+new_data[0]);
				div[0] = $('<div>').addClass('card col-6');
				div[1] = $('<div>').addClass('card-content').appendTo(div[0]);
				div[2] = $('<div>').addClass('data-card').text(new_data).appendTo(div[1]);
				div[3] = $('<div>').addClass('message-card').text(json[i].text).appendTo(div[1]);
				div[4] = $('<div>').addClass('infos-card').appendTo(div[1]);
				div[5] = $('<div>').addClass('block-card').appendTo(div[4]);
				div[6] = $('<div>').addClass('block-card').appendTo(div[4]);

				div[7] = $('<div>').addClass('max-temp cell-card').appendTo(div[5]);
				$('<i>').addClass('img-max image').appendTo(div[7]);
				$('<p>').addClass('temperature-max temperature').text(json[i].temperature.max).appendTo(div[7]);

				div[8] = $('<div>').addClass('min-temp cell-card').appendTo(div[5]);
				$('<i>').addClass('img-min image').appendTo(div[8]);
				$('<p>').addClass('temperature-min temperature').text(json[i].temperature.min).appendTo(div[8]);

				div[9] = $('<div>').addClass('precipitation cell-card').appendTo(div[6]);
				$('<i>').addClass('img-precipitation image').appendTo(div[9]);
				$('<p>').addClass('text-precipitation temperature').text(json[i].rain.precipitation).appendTo(div[9]);

				div[10] = $('<div>').addClass('probability cell-card').appendTo(div[6]);
				$('<i>').addClass('img-probability image').appendTo(div[10]);
				$('<p>').addClass('text-probability temperature').text(json[i].rain.probability).appendTo(div[10]);

				$(div[0]).appendTo('#page-content');
			}
		})
		.fail(function()
		{
			$('#snack-message').text('Cidade não encontrada.');
			$('.snack').fadeIn(500, function() {
				setTimeout(function() {
					$('.snack').fadeOut('fast');
				}, 3000);
			});
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