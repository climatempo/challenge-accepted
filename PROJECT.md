<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/Q9lCAMF.png" alt="Climatempo" width="300px"/>
  </a>
</p>

___

## Pré requisitos

* Node v >= 8
* NPM v >= 5

## Como subir o projeto
Na pasta raiz do projeto executar
```powershell

  npm install

  npm start
```
Acessar http://localhost:8080

## Executar testes de unidade
```powershell

  npm test
```

## Executar testes de cobertura
Na pasta raiz do projeto executar
```powershell
  npm run coverage
```
Acessar pasta /coverage/index.html para visualizar o resultado dos testes de cobertura.

## Estrutura do projeto
* /src Contém os fontes do projeto.
* /src/view Contém os arquivos da camada de visão do projeto.
* /src/public Pasta publica do projeto.
* /src/index.js Arquivo que realiza o startup do servidor.
* /src/controllers Contém os controladores da api.
* /src/routes Contém o mapeamento das rotas do projeto.
* /tests Contém os testes de unidade do projeto.

## Tecnologias utilizadas
* Front-end
  * VueJS
  * Materialize
  * Webpack
  * SASS
  * ES6

* Backend
  * Nodejs
  * Express
  * Mocha
  * Chai
  * Sinon
  * Babel
  * Nyc
