## Projeto

- O projeto foi desenvolvido e contém a Api e o Frontend que consome esta Api.
- A API E A APLICAÇÃO FRONTEND PODE SER VISTA NOS SEGUINTES LINKS:
-   Api(Heroku): https://previsao-tempo-acn.herokuapp.com/
-   Front(Vercel): https://clima-front.vercel.app/
-   Observação: Para testar a Api do heroku lembre de complemtar a rota com os endpoints da api listados em "Rotas da Api"

### Pré Requisitos

- Certifique-se de ter instalados:
- NodeJS
- NPM
- yarn
- Docker

### O Projeto

- O foi usado no projeto o Docker com o Elasticsearch e o Kibana de imagens.
- A aplicação foi feita em NodeJS e Typescript e não foi "conterenizada"
- Dentro do projeto tem a Pasta "frontend" contendo a aplicação Frontend que consome a Api, foi utilizada o Next.js

### Estrutura de Pastas

    -base
    -frontend (Aplicação Front)
    -src (Aplicação Api)

### Setup do Projeto

-   Primeiro clone o projeto, 
-   Suba o docker com o comando "docker-compose up -d" (Imagens do Elasticsearch e Kibana)
-   Depois instale as depêndencias na raiz do projeto com o comando "yarn"
-   Teste a Api "yarn dev"
-   Para verificar se o elasticsearch está funcionando vá até o Browser e digite "http://localhost:9200"
-   Para verificar se o kibana está funcionando  vá até o Browser e digite "http://localhost:5601"
-   Para verificar se a Api está funcionando  vá até o Browser e digite "http://localhost:3333"
-   Teste as rotas da Api
-   Agora vamos para o Frontend

### Rotas da Api 

-   GET(/clima/locales/findall/) - Retorna os Locales.json
-   GET(/clima/weather/findall/) - Retorna todo o Array do Weather.json
-   GET(/clima/weather/findall?locale=Osasco) - Retorna o Array filtrado do Weather.json

### Frontend

- Como foi informado anteriormente a aplicação Frontend que consume a Api, está na pasta "frontend"
-   No terminal navegue até frontend/clima
-   Instale as dependências com o comando "yarn"
-   Suba o projeto com o comando "yarn dev"
-   Para verificar se a Aplicação está funcionando  vá até o Browser e digite "http://localhost:3000"
-   Na aplicação digite no campo de texto palavras como "Osasco ou São Paulo" e você verá o input de busca que autocompleta de acordo com o que foi digitado. 
Foi utilizado a biblioteca react-search-autocomplete e neste input foi consumida a rota: GET(/clima/locales/findall/) - Retorna os Locales.json
-   Após a cidade ter sido selecionada, clique na lupa de busca e os "Cards" de previsão de tempo da respectiva cidade será renderizado em tela.

### Bônus
-   Os botões de conversões de valores converte:
-   Temparatura
-   Chuva (Precipitação)
-   Api(Heroku): https://previsao-tempo-acn.herokuapp.com/
-   Front(Vercel): https://clima-front.vercel.app/