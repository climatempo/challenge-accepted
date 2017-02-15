# Climatempo - Desafio de recrutamento

## Requisitos

- NodeJS v6.x
- Browser atualizado (sugiro o Chrome ou o Firefox em suas últimas versões.)

## Come executar

Clone o projeto em um diretório da sua máquina.

Dentro do diretório do projeto execute o comando:

```bash
npm install
```

Isso vai instalar todos os módulos NPM no diretório do projeto. Talvez demore um pouco dependendo da sua conexão com a Internet, mas geralmente é bem rápido.

Execute o comando:

```bash
$ node app.js
```

Pronto! Agora só acessar a http://localhost:3000

## Sobre o desenvolvimento

### Backend (server-side)

O backend foi feito em NodeJS utilizando o framework ExpressJS. A escolha do ExpressJS foi feito pois se trata de uma aplicação muito pequena e fácil de resolver com um framework minimalista.

O backend possui basicamente três urls acessíveis. Um obviamente é o root, o qual carrega a página HTML do frontend. Os outros dois se tratam de enpoints para acesso ao banco de dados fictício que são os arquivos JSON dentro do diretório "base".

### Backend (client-side)

O frontend é um pouco mais elaborado pois ele utiliza alguns frameworks e bibliotecas. Se trata de uma SPA (Single Page Application), então não existe refresh de páginas. 

- Materialize - Um framework para desenvolvimento de interfaces HTML seguindo os padrões de layout do Material Design do Google.
- jQuery - Um framework para manipulação do DOM HTML.
- MomentJs - Uma biblioteca para manipulação e formatação de datas.
- Mustache - Uma biblioteca para trabalhar com renderização de templates no JS.

### Testes

Os testes foram feitos utilizando uma biblioteca para NodeJS chamada SuperTest https://github.com/visionmedia/supertest. Essa biblioteca faz testes em requisições HTTP. Eu utilizei ela para testar todas as urls acessíveis do projeto.

Eu coloquei um detalhe legal. Se a temperatura máxima for maior ou igual à 30°C, o card fica vermelho!

## Considerações finais!

Espero que vocês gostem!