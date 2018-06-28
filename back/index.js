'use strict';

var express = require('express'); //framework para aplicativo da web do Node.js 
var cors = require('cors'); // para o módulo compartilhamento de recursos de origem cruzada
var fs = require('fs'); // para o módulo file-system
var app = express(); // executa o express

app.use(cors());

app.get('/', function (request, response) {
    response.send('<h1>Climatempo</h1>');
});

/*
- app.get: quando a requisição for get executa a função de callback
- request: dados que vem do front
- response: responsta que vai devolver para o servidor

/:locale : deixa dinâmico, pode ser Osasco ou São Paulo

*/
app.get('/:locale', function (request, response){
    
    // var local recebe o Estado que vem pela url
    var local = request.params.locale;

    // var jsonDataParse chama a função que abre o arquivo, onde o retorno é um jsonDataParse
    var jsonDataParse = openFile();
    
    if(local === "Osasco" || local === "São Paulo"){        
        var weather = [];  
        //faz uma iteração na var jsonDataParse 
        jsonDataParse.forEach(function(item){
            //verifica se a variavel da url é igual ao locale.name que está sendo iterado
        if(item.locale.name === local){
                // se for igual ele adiciona no array
                weather.push(item.locale.name);
            //faz uma iteração para pegar os 7 dias de acordo com o nome da url
            item.weather.forEach(function(data){
                //insere no array os dados date, text, temp_min, temp_max, rain_prop e rain_prec
                weather.push({
                    date: data.date,
                    text: data.text,
                    temperature_min: data.temperature.min,
                    temperature_max: data.temperature.max,
                    rain_prob: data.rain.probability,
                    rain_prec: data.rain.precipitation
                });
            });
        }    
        });
        // coloca no header de resposta que está retornando um JSON
        response.header("Content-Type",'application/json');
        response.status(200).send(weather); // vai devolver para o servidor o Json com o status 200
    }
    //se não encontrar no arquivo algum local diferente de Osasco ou São Paulo retorna um erro 404 e not found
    else
        response.status(404).send("Not found");        
});

/* 
- abre o arquivo weather.json com o módulo file system na pasta base
*/
function openFile(){
    var jsonData = fs.readFileSync("base/weather.json", "utf8");  
    return JSON.parse(jsonData);
}

app.listen(5000); // ouvir na porta 5000