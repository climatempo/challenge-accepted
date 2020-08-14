<h1 align="center">Desafio ClimaTempo API</h1>

## O desafio foi desenvolvido utilizando os seguintes recursos:
  
  DevOps
    - Docker

  Banco de dados:
    - PostgreSQL
    - TypeORM

  HTTP:
    - Express
    - Http-status

  Build:
    - Gulp

  Testes:
    - Jest
    - Faker
    - Supertest

  Organização
    - Typescript;
    - Lint
    - Prettier

## Primeiros passos

1. A versão utilizada é Node.js 12
2. É necessário ter o PostgreSQL 10 ou 11 instalado, ou você pode usar o Docker.
3. Instale as dependências com `npm ci`.
4. Faça uma cópia do arquivo `.env.example` com o nome`.env`.
5. Se você tiver uma instalação local do PostgreSQL, crie um database vazio e configure o arquivo `.env` com as informações de acesso.
6. Se não, execute `npm run postgres:start` e `npm run database:create` para criar e configurar um database com Docker.
7. Rode o projeto localmente com `npm run dev`.
8. Execute os casos de teste com `npm test`.
9. Execute `mkdir build` e `npm start` para buildar e rodar o projeto.
10. Ao rodar o projeto pela primeira vez, os dados dos arquivos `locales.json` e `weather.json` serão importados para a base de dados postgreSQL.

## Endpoints
Obter os climas da cidade de Osasco: GET - http://localhost:8000/api/weather/Osasco
Obter as localizações disponíveis: GET - http://localhost:8000/api/locale


## Sobre o desenvolvedor:
  - **Nome:** Daniel Bonfim
  - **E-mail:** daniel.fb88@gmail.com
  - **Site:** http://danielbonfim.com.br
  - **Github:** https://github.com/danielfb88
  - **LinkedIn:** https://www.linkedin.com/in/daniel-bonfim-b730b739/
