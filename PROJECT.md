<h1 align="center">Teste Clima Tempo</h1>

## O que foi desenvolvido

Foi desenvolvida uma página responsiva com a biblioteca React, 
que consome uma API simples em NodeJs e Express para retornar 
Jsons com informações sobre o clima de determinada região.

## Sobre a organização do projeto

O repositório possui ambas aplicações, porém dividas por seus 
diretórios para organizar cada aplicação com seus arquivos.
A pasta "api" possui todos os arquivos referentes ao web service
da aplicação, a pasta public e src possuem os arquivos referente
ao front-end em React, o arquivo .babelrc possui configurações do 
babel transpiler, responsável pela tradução do código ES6 para ES5,
por fim temos o nosso package.json que é responsável por gerenciar
e baixar os módulos necessários para que ambas aplicações possam 
ser executadas.

## Requisitos necessários

- NodeJs v6+

## Como baixar as dependências

Antes de rodar a aplicação devemos garantir que os requisitos acima
estão devidamente instalados na maquina, caso não tenha o NodeJs
instalado em sua maquina basta acessar o site <nodejs.org> e realizar
o download. Após todos os requisitos devidamente instalados, o primeiro 
passo para rodar a aplicação é executar o comando "npm install" no 
terminal ou prompt de comando dentro do diretório da aplicação, o comando
irá trazer todas as dependências necessárias para a pasta node_modules
na raiz do projeto.

## Como executar a aplicação

Para executar a aplicação devemos apenas executar o comando "npm start"
dentro do terminal ou prompt de comando no diretório da aplicação,
esse comando executará um script contido no nosso package.json, o mesmo
irá executar ambas aplicações, a pagina responsiva na porta 3000 e a api
na porta 3001, por isso é importante se atentar para que ambas portas 
estejam liberadas. Uma janela será aberta no seu navegador padrão e a 
partir daí a aplicação já estará funcionando.

## Sobre os testes

Foram feitos alguns testes na api, a fim de garantir que os endpoints
estejam funcionando e trazendo a resposta esperada para a aplicação.
Os testes se encontram no diretório "test", que se encontra dentro do
diretório "api".
Para executar os testes basta digitar o comando "npm test" e uma saída
vai ser gerada informando o resultado dos testes.




