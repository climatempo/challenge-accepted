-- Projeto desenvolvido com Angular e Node.js --

1- Instalar o Servidor Node (https://nodejs.org/en/)

2- Acessar a pasta do projeto via linha de comando (CMD) e digitar:
  npm install -save express (enter)
  npm start (enter)

3- Acessar http://localhost:3000

4- Para verificar as Urls do Serviço basta acessar (http://localhost:3000/api/locales e http://localhost:3000/api/weather/Osasco)

5- Bônus: ao clicar no cabeçalho da página "CLIMATEMPO", o sistema alterna entre a caixa de texto e uma caixa de seleção com carregamento utilizando directive do Angular.

-- Detalhes --

O desafio foi realizado utilizando AngularJS, HTML, CSS e Servidor Node.js

Dentro da pasta "public" do projeto foi criado a interface web que roda juntamento com o app no servidor NODE, essa interface foi criada utilizando um modulo simples do Angular onde o controle e a diretiva estão juntos com o módulo, para facil manutenção bastaria separar em arquivos separados e carregar as dependências.

Dentro da raiz temos as pastas do Node, onde separei a estrutura em servidor(index.js), controles, base e app(business). Onde o servidor inicia a aplicação, o controle contém as rotas para o ws, o app contém o negócio e o base contém os arquivos .json. 

Para o estilo foi utilizado o Bootstrap juntamente com a font "font-awesome" e foram necessárias customizações criadas no style.css.

Escolhi utilizar tanto o Angular quanto o Bootstrap para facilitar a manutenção, adaptação em diferentes formatos de tela e desenvolvimento, uma vez que o projeto fica menos verboso. 


