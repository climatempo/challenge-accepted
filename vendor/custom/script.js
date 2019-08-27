// Script por Matheus Pavanetti 24-08-2019 

$(document).ready(function(){
    //Previnir o envio do formulario caso aperte enter no input
    $('form input').on('keypress', function(e) {
    return e.which !== 13;
})

// Requisição ajax para carregar nome das cidades, sera utilizado no autocomplete do input form
 var request = $.ajax({
 	type: "GET",
 	url: "api/locales.php",
 	dataType: 'json',
 	 async: false,
         success : function(text)
         {
             response = text;

         }
 })

 // Loop para adicionar o nome das cidades, recebido pelo ajax.
	var names = []
	for (var i = 0; i < response.length; i++) {
	names.push(response[i].name);
	}


// Ao clicar no botão Pesquisar execute:
 $('#sendBtn').click(function(){
   	var value = $('#search').val() // Armazena valor do input na variavel
   		// Verifica se o o input esta vazio
    	if(value == ''){
    		// Adiciona classe invalida se o input estiver vazio
    	$('#search').addClass("is-invalid")
    	$('#invalid').show()

    	} else { // Caso o input nao seja vazio, cotinua
    		// Remove invalid do input, limpa HTML
    		$('#search').removeClass("is-invalid")
    		$('#invalid').hide()
    		$("#conteudo").html("");
    		$("#titulo").html("");

    		// Faz requisição ajax no server side query.php
    		$.ajax({
    		"url": 'api/query.php', // Caminho da api para locales
    		"type": 'POST', // Metodo POST
    		"data": $('#submitForm').serialize(), //Coleta os dados do input valores
    		beforeSend: function() {
             // console.log("Ajax loading...")
           },
    		success: function() {
     		// console.log("Ajax Success")
    		 },
    		complete: function(text) { // Caso complete, recebe a response do server e passa para função
    		// console.log("Ajax Completed !")
    			
    			if(text.responseJSON.status == true ){ // Verifica se o status retornou do server com o status true, se a cidade existir
    				toastr["success"](text.responseJSON.msg, "Sucesso") // retorna a mensagem do server 
    				$('#search').removeClass("is-invalid") // remove classe invalid
    				$('#invalid').hide() // esconde div invalid

    				// Caso até aqui, tudo ocorreu bem, ou seja, a cidade existiu, e não houve nenhuma falha, inicia uma nova requisição ajax para coletar os dados do weather
    				$.ajax({ 
    					"url": 'api/result.php', // Caminho da api para weather
			    		"type": 'POST', // Metodo POST
			    		"data": $('#submitForm').serialize(), // coleta dados do input valores
			    		beforeSend: function() {
			             // console.log("Ajax loading...")
			           },
			    		complete: function(txt) {// Caso complete, recebe a response do server e passa para função

			    			// Escrevendo titulo
			    			$("#titulo").html('<div class="row animated bounceInLeft"><div class="col-lg-12"><h5 id="tituloh5" class="mt-4">Previsão Para ' + txt.responseJSON.locale.name + ' - ' + txt.responseJSON.locale.state + '</h5></div></div>')

			    			// Loop para  Escrever Card	 e renderizar html
			    			var cards = []
								for (var i = 0; i < txt.responseJSON.weather.length; i++) {
									var loop = txt.responseJSON.weather[i];
									$("#conteudo").append('<div class="row animated bounceInLeft"><div class="col-lg-12 mt-3 mb-3"><div class="card shadow"><div class="pl-3 pr-3 pt-3"><h6>'+ loop.date +'</h6><p>'+ loop.text +'</p></div><div class="card-body bg-light"><div class="container"><div class="row"><div class="col-6"><img src="images/icons/upload.png" alt="upload"><span class="text-primary ml-3" style="font-size: 25px;">'+ loop.temperature.max +'ºC</span></div><div class="col-6"><img src="images/icons/download.png" alt="upload"><span class="text-danger ml-3" style="font-size: 25px;">'+ loop.temperature.min +'ºC</span></div></div><div class="row mt-4"><div class="col-6"><img src="images/icons/raindrop-close-up.png" alt="upload"><span class="ml-3" style="font-size: 25px;">'+ loop.rain.precipitation +'</span><span style="font-size: 15px;"> mm</span></div><div class="col-6"><img src="images/icons/umbrella.png" alt="upload"><span class="ml-3" style="font-size: 25px;">'+ loop.rain.probability +' %</span></div></div></div></div></div></div></div>')
									console.log(loop)
								}
			    		},
			    		error: function () { // caso exista algum erro do ajax
				       console.log("Ajax request Error")
				      }

    				})

    			} else {
    				toastr["error"](text.responseJSON.msg, "Falha") // Retorna mensagem de erro do server, se a cidade nao existir
    				$('#search').addClass("is-invalid") // adicionar classe invalid
    				$('#invalid').show() // mostra div invalid
    			}

    			
    		},
    		error: function () {
		       console.log("Ajax request Error")
		      }

    		})
    	}
    }) 

	// Função do jQuery UI autocomplete, para autocompletar com os nome das cidades o input form
    $( "#search" ).autocomplete({
      source: names
    })

});

// Script por Matheus Pavanetti 24-08-2019 