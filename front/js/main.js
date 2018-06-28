(function (win, doc) {
   'use strict';
    
    var $input  = document.querySelector('input[type="text"]');
    var $button = document.querySelector('button[type="submit"]');
    
    function communication(locale){
        var ajax = new XMLHttpRequest(); // Faz a requisição
        ajax.open('GET', 'http://localhost:5000/' + locale); // abre a requisição para obter as informações, ou seja, ele vai consultar a URL e traz o resultado dessa URL
        ajax.send(); // envia a requisição
        
        /*
         - readystatechange para ouvir a requisição
         - ajax.readyState para saber o status da requisição
         0: não enviado / 1: Conexão aberta / 2: Headers recebidos / 3: carregando o corpo do request
         4: Concluído
         - ajax.responseText manipulação da resposta (string)
        */
        ajax.addEventListener('readystatechange', function (e) {
            if (ajax.readyState === 4) {
                //manipulação da resposta do back
                var responseTextParse = JSON.parse(ajax.responseText);
                responseManipulationBack(responseTextParse);
            }

        }, false);
    }
    
    function responseManipulationBack(responseTextParse){
        //tamanho do array
        var size = responseTextParse.length;
        // insere no elemento pelo id name-city o nome da cidade que foi procurada
        $('#name-city').html("Previsão para " + responseTextParse[0]);
        
        //faz iteração a partir do segundo elemento do array
        for(var i = 1; i < size; i++){
            
            // chama a função que formata a data
            var newDate = formatDate(responseTextParse[i].date);
            // insere no card a nova data, texto, temp_min, temp_max, rain_prob, rain_prec
            $('#date-'+i).html(newDate);
            $('#text-'+i).html(responseTextParse[i].text);
            $('#min-'+i).html(responseTextParse[i].temperature_min + "ºC");
            $('#max-'+i).html(responseTextParse[i].temperature_max + "ºC");
            $('#probability-'+i).html(responseTextParse[i].rain_prob + "%");
            $('#precipitation-'+i).html(responseTextParse[i].rain_prec + "mm");
        }
    }
    
    //formata a data retornando a nova no padrão dd/mm/aaaa
    function formatDate(date){
        var split = date.split('-');
        return split[2] + "/" +split[1]+"/"+split[0];    
    }
    
    //evento do botão de busca, só faz a comunicação com o servidor - back se for igual a Osasco ou São Paulo
    $button.addEventListener('click', function(e){
        e.preventDefault();
        var valueInput = $input.value;
        if(valueInput === "Osasco" || valueInput === "São Paulo")
            communication(valueInput);
        else 
            alert("Digite Osasco ou São Paulo");
    });
    
})(window, document);