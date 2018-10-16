Challenge-accepted

Tecnologias utilizadas:

Html
Css
JavaScript
PHP
Jquery
Ajax

Para iniciar o projeto:

Através de um terminal utilize o servidor embutido do php na raiz do projeto na porta 5000: php -S localhost:5000. 

Documentação:

**Servidor** 

Classe Weather_Controller

Optei por criar um controller.

No controller, eu dei preferência por centralizar todos os métodos: searchCity(), searchWeather(), sendData().

searchCity($city):
    - Recebe um argumento do cliente contendo o nome da cidade desejada.
    - Abre o arquivo locales.json e armazena os dados na variável cities.
    - Foi realizado uma iteração e verificado se a cidade iterada e igual a do cliente.
    - Se a variável for igual, será armazenada em setCity() e chamará a função searchWeather();
    - Se não encontrar a cidade dentro do locales.json, retornará para o cliente a mensagem: "Cidade não encontrada".

searchWeather():
    - Abre o arquivo weather.json.
    - Na variável city foi recuperado o valor do atributo city através do método getCity().
    - Declara uma variável contadora para ser iterada no for each.
    - No primeiro for each varre o weather.json até encontrar o nome recebido pelo cliente. 
    - No outro for each para acessar somente os valores correspondentes dessa determinada localidade.
    - Armazena os dados iterados no array cards.

sendData($data):
    - Envia um json para o cliente com os dados popululados do array.

**Cliente**

main.js
- Comunicação foi realizada via Ajax
- Tipo utilizado: post
- Foi usado jQuery para popular os dados recebidos do servidor nos cards
- function nationalPatternDate(date) foi usado para tratar a data, que era exibida em formato internacional.



