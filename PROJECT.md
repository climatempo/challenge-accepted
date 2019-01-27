# Aplicação para Previsões Meteorológicas - Climatempo 
```
    Desenvolvimento de uma aplicação que apresenta a previsão para duas cidades:
    	- Osasco
    	- São Paulo
    De acordo com o desafio promovido pela Climatempo.
```
### Sobre o desenvolvimento:
Para desenvolver a aplicação dividi o projeto em 5 partes:
	> Base
	> Controller
	> Routes
	> Static
	> Test
Na Base ficam os .jsons utilizados como "database" para fornecer as informações que serão utilizadas.

No Controller está a lógica que será utilizada pelas rotas para o retorno da requisição.

Em Routes encontram-se as rotas utilizadas para acessar a API, sendo elas:
	> Rota de Weathers
	> Rota de Locales

Em Static estão todos os meus arquivos estáticos (HTML, CSS, JS)  `¯\_(ツ)_/¯`

Para o design do site foram utilizados ícones do [flaticon](https://www.flaticon.com/home) e um template do [html5up](https://html5up.net/).

Em Test encontram-se os testes das funções e das rotas.

Na lógica geral o cliente irá fazer a primeira requisição para a rota de /locales fornecendo o nome da cidade que desejar, nisso a API retornará as informações da cidade especificada e ao receber essas informações o cliente irá fazer uma requisição para a rota de /weather-forecasts utilizando o ID da cidade como parâmetro, sendo o retorno final todas as previsões para à cidade solicitada.
Resolvi utilizar o Hapi.js para a construção do servidor porque é uma ferramenta robusta e de fácil manutenção, pensando na manutenibilidade do projeto como um todo.
O Vue.js no Front-end foi feito em um script .js, não utilizando componentização por conta da simplicidade do projeto.
Os testes foram realizados utilizando a ferramenta Mocha.
A inicialização do servidor se dá pelo arquivo app.js localizado na raiz do projeto :)


### Tecnologias:
	Back-end
	> * Node.js : v8.14.1
	> * npm : 6.4.1
	> * Hapi.js : 18.0.0
	
	Front-end
	> * Vue.js : 2.5.22
	> * Axios : 0.18.0
	
	Test
	> * Mocha : 5.2.0


### Instalação

Clone o projeto em sua maquina

    $ git clone https://github.com/analimazn/challenge-accepted.git

 É necessário instalar o Node na sua máquina, caso ainda não o possua. Recomendo utilizar o [nvm](https://github.com/creationix/nvm), mas caso prefira instalar o Node diretamente [no próprio site](https://nodejs.org/en/)  da plataforma você encontra a melhor forma de instalação para o seu SO :)

### Instalação do nvm (trecho retirado do repositório oficial do nvm).

Para instalar o nvm você pode utilizar o cURL:

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

ou Wget:

```sh
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

<sub>O script clonará o repositório para `~/.nvm` é adicionará o comando ao seu perfil (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).</sub>

### Instalação das dependências
Navegue até o diretório em que o projeto foi clonado.

    $ cd ~/challenge-accepeted
    $ [challenge-accepeted] $ npm install

### Utilizando a aplicação.
    $ [challenge-accepeted] $ npm start

ou:

```
    $ [challenge-accepeted] $ node app.js
```
### Testando a aplicação.
    $ [challenge-accepeted] $ npm test

Acesse pela url [http://localhost:5000/](http://localhost:5000/) :)

> * [Node](https://nodejs.org/en/)
> * [nvm](https://github.com/creationix/nvm)
> * [hapi.js](https://hapijs.com/)
> * [Vue.js](https://vuejs.org/)
> * [Axios](https://github.com/axios/axios)
> * [html5up](https://html5up.net/)
> * [flaticon](https://www.flaticon.com/home)
> * [Mocha](https://mochajs.org/)
