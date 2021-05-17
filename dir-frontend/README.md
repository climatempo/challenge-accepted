# Desafio para a vaga Fullstack

Esse Projeto refere-se ao frontend do desafio. O projeto pode ser acessado pela [URL](http://35.199.81.230)

## Descrição

- Aplicação ReactJs utilizando o Apollo Client para realizar as requisições em GraphQL.
- Para o AutoComplete foi utilizado o componente AutoComplete do pacote antd.


## Banco de Dados

- Tomei a liberdade de criar um banco de dados onde inseri os dados do arquivo locales.json.
- Foi criado o model Locale.js pelo sequelize, sincronizado o banco e utilizado esse model para realizar solicitações ao banco.
- Adicionei as duas cidades pelo playground do GraphQL através da mutation CreateLocale que está no schema e resolver. 
- Os dados de Cidades (do autoComplete) estão sendo resgatados do banco de dados já os dados de Previsão (weather) estão sendo puxados de um arquivo .json no backend pois por conta da correria do final de semestre, acabei não tendo tempo de desmembrar esses dados em tabelas relacionais.

## Servidor

- O servidor está rodando em um VM no Google Cloud Platform e pode ser acessado através do IP que será enviado por email.
- Tanto o frontend quando o backend estão rodando no servidor controlados pelo pm2.
- Utilizei nginx para redirecionar os acessos para as portas que as aplicações rodam.

