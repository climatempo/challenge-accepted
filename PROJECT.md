# Climatempo Challenge Accepted

Desenvolvimento de uma aplicação web/mobile que disponibiliza a previsão do tempo em determinadas cidades - São Paulo e Osasco -. Os dados são obtidos atráves de um arquivo JSON e processados pela aplicação e devolvido em forma gráfica, de modo a facilitar a leitura e compreensão dos dados para o usuário, tornando sua experiência mais intuitiva e agradável.

# Configuração e execução

## Clone do projeto e instalação das dependências via composer e instalação dos modulos do node
> ** É necessário ter instalado o composer e node, dê preferencia a forma global.

```
$ git clone git@github.com:LucasPortoDeDeus/challenge-accepted.git
$ cd challenge-accepted
$ composer install
$ npm init
$ gulp
$ php -S localhost:3000 -t public
```

## Rodando o gulp
 > **Caso o servidor do php esteja em execução, será necessário abrir outro terminal.
```
$ cd challenge-accepted
$ gulp
```

# Ferramentas utilizadas para auxiliar no desenvolvimento da aplicação, são elas:

 - ### Gulp
    - gulp-sass
    - gulp-rename
 - ### Composer
    - composer install
 - ### Sass
 - ### Slim Framework
    - slim/php-view
 - ### jQuery
    - moment
    - jQuery UI

# Endpoint
Ao acessar o endpoint 'search-weather/[city]' e passar a cidade a busca já será realiza no instante em que a página carregar, o parâmetro não é obrigatório. A busca é realizada através de uma requisição ajax - POST - no seguinte endpoint: /search/weather

# Template
A aplicação utiliza o PhpRenderer do Slim que facilitando a gestão do front-end.
