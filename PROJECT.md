# Climatempo Challenge Accepted

Desenvolvimento de uma aplicação web/mobile que disponibiliza a previsão do tempo em determinadas cidades - São Paulo e Osasco -. Os dados são obtidos atráves de um arquivo JSON e processados pela aplicação e devolvido em forma gráfica, de modo a facilitar a leitura e compreensão dos dados para o usuário, tornando sua experiência mais intuitiva e agradável.

# Configuração e execução

## Clone do projeto e instalação das dependências via composer e instalação dos modulos do node
> ** É necessário ter instalado o composer e node, dê preferencia a forma global.

```
$ git clone https://github.com/LucasPortoDeDeus/challenge-accepted.git
$ cd challenge-accepted
$ composer install
$ npm install
$ php -S localhost:3000 -t public
```

# Endpoint
Após esses procedimentos é só acessar a rota <b>search-weather/</b>. Ficará da seguinte forma: <strong>localhost:3000/search-weather/</strong>.
É possível informa um terceiro parâmetro: <b>cidade</b>. O parâmetro não é obrigatório.
Caso esse parâmetro exista a aplicação já realizará a busca logo ao acessar a página.
Ex.: <strong>localhost:3000/search-weather/São Paulo</strong>
A busca é realizada através de uma requisição - POST - no seguinte endpoint: /search/weather


## Rodando o gulp
 > ** Talvez seja necessário abrir outro terminal devido a execução do servidor do php. Só será necessário o procedimento abaixo caso haja necessidade de modificação no estilo da aplicação.
```
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

# Template
A aplicação utiliza o PhpRenderer do Slim que facilita a gestão do front-end.
