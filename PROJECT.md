# Challenge Accepted
Aplicação web responsiva para consulta de previsão do tempo para uma semana nas cidades de Osasco e São Paulo.

# Arquitetura
O projeto foi dividido em 2 partes distintas.
- **Rest API** - Api Rest desenvolvida em **PHP** e **Slim Framework** para realizar as consultas e retornar os dados de previsão.
- **Site** - *Single Page Application* (SPA) desenvolvida em **React** para interação do usuário e visualiação dos dados.

# Configuração e Instalação
## Rest API
A API se encontra no diretório **challenge-accepted/api/**.
- ### Requisitos
    - PHP >= 7.2
    - [Composer](https://getcomposer.org/download/)
  
- ### Instalação
    ```
    $ git clone git@github.com:LucasMallmann/challenge-accepted.git
    $ cd challenge-accepted/api/
    $ composer install
    ```
- ### Execução
  Dentro do diretório **api** execute o comando: `php -S localhost:8888 -t public/index.php`

## Site
O site se encontra no diretório **challenge-accepted/site/**
- ### Requisitos
  - [Node]((https://nodejs.org/en/download/)) > = 8.0
- ### Instalação
    ```
    $ git clone git@github.com:LucasMallmann/challenge-accepted.git
    $ cd challenge-accepted/site/
    $ npm install
    ```
- ### Execução
  **Observação**: TODO: Colocar o global.js com as variáveis corretas.
  