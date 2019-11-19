# ClimaTempo Teste

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Documentação para executar o teste de Erick Batista para ClimaTempo

### Tech

Foram usadas as seguintes bibliotecas neste teste

- [NestJs] - Framework Node para construção sólida de API
- [ReactJS] - Biblioteca JavaScript para criação fácil de interfaces web e mobile
- [AntDesing] - Biblioteca de componentes para uso com as principais frameworks do mercado
- [Parcel] - Empacotador para deploy de projetos web com bibilotecas like React
- [node.js] - Motor V8 do chrome para uso do JavaScript em server-side
- [JestJS] - Testes unitários para linguagem JavaScript

### Installation

Requer [Node.js](https://nodejs.org/) v12+ para iniciar.

O teste foi feito com dois projetos sendo um back-end "API" e um front-end "View"
Foi utilizado o NestJs para a construção da API e o projeto foi dividido em Módulos, como temos somente o módulo de pesquisa somente esse existirá na pasta src. A API foi dividida principalment em: controllers, repositories e service. Os dados do teste estão mocados nos repositories que são os reponsáveis por manter os dados da aplicação. Todas as requisições são validadas e encapsuladas em DTOs "Data Transfer Object" para assegurar a integridade das informações da requisição. Mais informação em https://docs.nestjs.com

Para iniciar a API siga os passos abaixo:

```sh
$ cd API
$ npm install -g @nestjs/cli -> Para acesso do cli do NestJS via console
$ npm install ou yarn
$ npm start ou  yarn start
```

Os endpoints estão disponíveis para teste em http://localhost:3000
Post: http://localhost:3000/weather/location Payload:{"location": "São Paulo"}
Get: http://localhost:3000/weather/condition/:id ->id do Locale

Foram feitos testes unitários nos Services que são onde está a regra do negócio, após instalar as dependências para executar os testes unitários faça:

```sh
$ cd API
$ npm test ou yarn test
```

A View foi feita em um projeto a parte da API com a biblioteca React, a mesma se encontra na pasta View, foi utilizado o mobx-state-tree para arquitetura de fluxo de dados da view junto com React, para iniciar a view é necessário instalar o Parcel e posteriormente as dependências para que se possa executar uma intância da aplicação:

```sh
$ cd VIEW
$ npm install -g parcel-bundler
$ npm install ou yarn
$ npm start ou  yarn start
```

para mais informações acesse:
https://pt-br.reactjs.org/docs/getting-started.html
https://github.com/mobxjs/mobx-state-tree
https://parceljs.org
  
Após iniciar a API e a VIEW você poderá abrir seu navegador e acessar o endereço para uso: http://localhost:1234

Qualquer dúvida entrar em contato comigo via e-mail erickstryck@hotmail.com ou tel:062982664467
