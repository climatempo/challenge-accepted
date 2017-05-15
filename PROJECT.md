# Climatempo Challenge Accepted

Desenvolvimento de uma página web responsiva que permite ao usuário saber como ficará o tempo nas cidades de São Paulo e Osasco, através da leitura dos dados em um arquivo JSON.

# Configuração e execução

  > Lembrando da necessidade de instalação e configuração do Composer para acesso global

  ```
  $ git clone git@github.com:denilsonraimundo/challenge-accepted.git
  $ cd challenge-accepted
  $ composer install
  $ php -S localhost:9000 -t public
  ```    

# Ferramentas utilizadas

  - ### Gulp
    - gulp-sass
    - gulp-concat
  - ### jQuery
    - moment.js

# api.php
  
  Ao submeter o formulário, é feita uma requisição ajax para ***api.php***, que por sua vez é reponsável por obter e retornar os dados do JSON relacionados a cidade buscada.

# Interface
  
  - Página web simulada em smartphone

  ![Configure the URL](/images/iphone.JPG) 
