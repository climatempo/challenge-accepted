 #Challenge Accepted
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
    $ git clone git@github.com:LucasMallman/nchallenge-accepted.git
    $ c dchallenge-accepted/api/
    $ composer install
    ```
- ### Execução
  Dentro do diretório **api**, execute o comando: `php -S localhost:8888 -t public/index.php`

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

# Documentação
## API
- Arquivos de configuração no diretório `api/src/config`
  - `routes.php` - Configuração das rotas da API
  - `settings.php` - Configurações gerais da aplicação. Aqui estão as configurações das dependências, para aplicar o conteito de injeção de dependência.
  - `src/challenge/Controllers` - Controllers da aplicação. São resposáveis por lidar com as requisições Http feitas à API.
  - `src/challenge/Repository` - Design Pattern Repository aplicado para manipular os dados da aplicação.
    - `ILocaleRepository.php` e `IWeatherRepository.php` - *Interfaces* para abstrair a implementação da fonte de dados, para que a troca da fonte de consulta de dados seja mais fácil no futuro.
    - `Json/` - Implementação do *Repository* com a fonte de consulta de dados em Json

  - `src/challenge/Services` - Serviço de previsão de tempo para as cidades de São Paulo e Osasco (SP).

  ### **Api Methods**
   | Method | Endpoint | Parameters | Description |
    | ------ | ------ | ------ | ------ |
    | `GET` | */api/locale/:name* | *name:* `string` | Consulta os locais com nome similar ao que foi passado como parâmetro. |
    | `GET` | */api/locale/:cityId/weather* | *cityId:* `int` | Busca a previsão do tempo de uma semana para uma determinada região.