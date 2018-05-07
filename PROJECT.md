# Climatempo APP

O projeto foi construído utilizando Node.js, Express, Chai e Mocha, no backend. No frontend, foi utilizado a stack clássica com HTML, CSS e JS puro. Toda a aplicação é suportada por um container docker como infraestrutura. O pacote husky foi adicionado à aplicação para que testes fossem realizados antes de todos commits e pushes. As informações do diretório "base" foram inseridas como models em `app/models`.

## Requisitos

* docker
* docker-compose
* node
* yarn

## Como executar o projeto ?

1) Clone esse repositório para algum diretório de fácil acesso
2) Dentro do diretório raiz do projeto, execute: `yarn start`. Isso fará com o container docker instale o projeto e todas as suas dependências
3) Acesse `localhost:3000` para a web-app ou `localhost:3000/api` para a API RESTful
4) Para parar a aplicação, execute: `yarn stop`

> É recomendado a exibição da web-app em modo mobile, em seu navegador.

## Endpoints para API RESTful

* A API foi documentada utilizando Swagger e sua documentação pode ser acessada pelo endereço `localhost:3000/api/docs`

## Testes

* Para testar a aplicação, execute: `yarn test`

## Acessando o container

* Para acessar o container da aplicação, execute: `yarn attach`

## Contato

* Email: giovanni.cruz97@hotmail.com
