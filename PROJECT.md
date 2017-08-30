Teste de Recrutamento Climatempo - Diego Hideky

# Seja Bem Vindo ao Challenge Accepted #

Abaixo está descrito o passo-a-passo para instalar e executar este projeto
em ambiente de *desenvolvimento* e *produção*

## Instalações e Dependências ##
* Sass:
```shell
sudo apt-get install ruby-sass
sudo apt-get install ruby-listen
```
Ou siga o tutorial [Sass](http://sass-lang.com/install)

Sass é um pré-processador de de arquivos CSS, para que se possa ter 
uma organização, programação, e limpeza melhor dos seus arquivos CSS, 
que te permite criar funções, variáveis, mixins e placeholders.

* Compass:
```shell
sudo apt-get install ruby-compass
```
Ou siga o tutorial [Compass](http://compass-style.org/install/)

Compass é um framework open-source baseado em Sass, onde pode-se 
utilizar/baixar códigos padrões que facilita o desenvolvimento Frontend

* Node JS:
```shell
sudo apt-get update
sudo apt-get install nodejs -g
```
Ou siga tutorial [Node JS](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)

Node JS é utilizado para rodar a aplicação em produção.

* NPM:
```shell
sudo apt-get install npm
```
NPM é um gerenciador de pacotes backend, que auxilia na 
construção do projeto.

* Bower:
```shell
npm install -g bower
```
Bower é o gerenciador de pacotes Frontend, que auxilia na 
construção do projeto 

* Dependências frontend:
```shell
bower update
```
Este comando instala/atualiza as dependências frontend definidas em *bower.json*

* Dependências backend:
```shell
npm install
```
Este comando instala as dependências backend definidas em *package.json*

### Ambiente de desenvolvimento ###
Executar:
```shell
npm run gulp
```
Este comando executa a contrução dos arquivos JS, CSS concatenados e 
minificados para o diretório *app/dist/*, além de minimificar as 
imagens contidas na aplicação, permitindo ao sistema utilizar o 
menor recurso possível.

Executar:
```shell
npm run climatempo
```
Em ambiente de desenvolvimento, é utilizado a ferramenta *Gulp*, que automatiza 
os processos através de tarefas. Você pode encontrar uma melhor definição 
das tarefas em *gulpfile.js*

Ao rodar o comando acima, será aberta uma janela no seu browser padrão em 
*http:localhost:3000*. Este processo permite que a aplicação escute as 
alterações feitas em seus arquivos HTML, JS, SCSS e CSS, atualizando seu 
*browser* ao identificar alguma alteração.

No mesmo instante também é feita uma verificação dos códigos alterados, 
para saber se estão dentro do padrão e normas.

Caso ocorra algum problema de codificação em seus arquivos JS, CSS ou SCSS, 
é possível visualizar qual é o erro em seu terminal.

Isso permite que seja evitado problemas futuros de programação

### Teste ###
Execute: 
```shell
npm run test
```
Este comando aciona a verificação da ferramenta *Karma* que verifica se sua 
aplicação é compatível com os browsers *Chrome* e *Firefox*, porém também é 
possível fazer a verifição de demais browsers, basta adicioná-los em 
*karma.conf.js* no parametro *browsers['Chrome', 'Firefox']*

### Ambiente de produção ###
Executar:
```shell
npm run gulp
```

Executar applicação:
```shell
node index.js
```
Este comando inicia a aplicação em *http://localhost:8081* com os 
arquivos de imagem, css e js minificados.

### [SERVER AUX] matar os processos node ###
killall -9 node


# GitHub
- https://github.com/diegohideky/challenge-accepted

******************************************************************************
Logo na primeira tela existe um campo de busca onde você pode digitar a cidade
do qual retorna os valores de clima da cidade caso ela exista.

Este campo joga o valor na variável 'search' que filtra a lista de 'forecast'
na forecastCtrl.
******************************************************************************

Projet desenvolvido:
* Node JS: Backend
* Angular I: Frontend
* Materialize CSS: Layout
* Sass: Pré-processador de CSS
* Gulp: Gerenciador de tarefas
* Karma: Testes de compatibilidade de Browsers

### Todo ###
* Criar Dockerfile e docker-compose.yml
* Criar variáveis de ambiente