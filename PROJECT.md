<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/Q9lCAMF.png" alt="Climatempo" width="300px"/>
  </a>
</p>

[![Twitter Badge](https://img.shields.io/badge/-@gabrielew-6633cc?style=flat-square&labelColor=6633cc&logo=twitter&logoColor=white&link=https://twitter.com/Gabriel75056738)](https://twitter.com/Gabriel75056738)
[![Linkedin Badge](https://img.shields.io/badge/-Gabriel%20Alcântara-6633cc?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-alcântara-bernardes-a50829159/)](https://www.linkedin.com/in/gabriel-alcântara-bernardes-a50829159/)

## Tecnologias

    - [NodeJS](https://nodejs.org/)
    - [ReactJS](https://pt-br.reactjs.org/)

## Biblíotecas Utilizadas

    [Backend]
        - [Cors](https://www.npmjs.com/package/cors)
        - [Express](https://expressjs.com/pt-br/)
        - [Express-async-errors](https://www.npmjs.com/package/express-async-errors)
        - [Jest](https://jestjs.io/)
        - [Helmet](https://helmetjs.github.io/)

    [Frontend]
        - [Axios](https://github.com/axios/axios)
        - [Styled-components](https://styled-components.com/)
        - [React-testing-library](https://testing-library.com/)

## Clonando o projeto

    - [Backend]
        - Entrar na pasta backend e instalar suas dependências
        - npm install ou yarn install

    - [Frontend]
        - Entrar na pasta frontend e instalar suas dependências
        - npm install ou yarn install

## Executando o projeto

    - [Backend]
        - Iniciar backend -> npm run dev:server ou yarn dev:server (Irá executar na porta 3333)
        - Iniciar testes -> npm run test ou yarn test

    - [Frontend]
        - Iniciar frontend -> npm run start ou yarn start (Irá executar na porta 3000)
        - Iniciar testes -> npm run test ou yarn test

## Rotas disponíveis

    - [locales] http://localhost:3333/locales - Retorna todas as cidades
    - [weather] http://localhost:3333/weather/:{id} - Retorna a previsão para determinada cidade
