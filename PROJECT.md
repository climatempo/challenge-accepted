# Execução

Para executar siga as instruções primeiro execute o server e depois o web

## Server

entre na pasta server

`cd server`

baixe os pacotes

`yarn`

execute

`yarn dev:server`

## Web

entre na pasta server

`cd web`

baixe os pacotes

`yarn`

execute

`yarn start`

## A pagina

Agora com os dois(server e web) executando acesse `localhost:3000`

# O Desafio

No lado do back-end foi utilizado node com typescript e no lado do front doi utilizado react com typescript

## TODO

### Frontend

[X] Uma página responsiva

[ ] Um campo autocomplete para buscar localidades

[X] Um card para cada dia de previsão

[ ] Permita que o usuário selecione em qual unidade de temperatura e chuva (precipitação) ele quer visualizar os dados.

### Backend

[X] Uma API rest ou graphql para obter localidades e dados de previsão

[X] Validação de entradas do usuário

[ ] Utilizar cache

[ ] Utilizar Elasticsearch ou algum outro software de full-text search para busca de localidades

[ ] Configurar ambiente docker para rodar a aplicação

