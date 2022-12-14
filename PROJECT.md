<h1 align="center">challenge-accepted</h1>

<!-- Índice -->
<details>
  <summary>Índice</summary>
  <ol>
        <li><a href="#feito-com">Feito com</a></li>
    </li>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#pré-requisitos">Pré requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
        <li><a href="#rodando-o-projeto">Rodando o projeto</a></li>
      </ul>
    </li>
    <li><a href="#ilustrações">Ilustrações</a></li>
    <li><a href="#explicação-do-projeto">Explicação do projeto</a></li>
  </ol>
</details>

### Feito com

-   [NodeJS](https://nodejs.org/en/)
-   [Express](https://expressjs.com/)
-   [React](https://reactjs.org/)
-   [Redux](https://redux.js.org)
-   [Jest](https://jestjs.io/pt-BR/)

<!-- Começando -->

## Começando

### Pré requisitos

#### Node

-   #### Instalação do Node no Windows

    Basta acessar o [site oficial do Node.js](https://nodejs.org/) e baixar o instalador.
    Além disso, certifique-se de ter o `git` disponível em seu PATH, `npm` pode precisar dele (você pode encontrar o git [aqui](https://git-scm.com/)).

-   ##### Instalação do Node no Ubuntu

    Você pode instalar o nodejs e o npm facilmente com o apt install, basta executar os seguintes comandos.

        $ sudo apt install nodejs
        $ sudo apt install npm

-   ##### Outros sistemas operacionais
    Você pode encontrar mais informações sobre a instalação no [site oficial do Node.js](https://nodejs.org/) e no [site oficial do NPM](https://npmjs.org/).

    Se a instalação foi bem-sucedida, você poderá executar o seguinte comando.

        $ node --version
        v16.3.0
    
        $ npm --version
        7.24.0

    Se você precisar atualizar o `npm`, você pode fazê-lo usando o `npm`! Legal, certo? Após executar o seguinte comando,    basta abrir novamente a linha de comando e ser feliz.
    
        $ npm install npm -g



### Instalação

1. Clone o repositório
    ```sh
    git clone https://github.com/christhian12rv/challenge-accepted.git
    ```
2. Vá para a pasta /server e instale os pacotes npm
    ```sh
    npm install
    ```
3. Vá para a pasta /client e instale os pacotes npm
    ```sh
    npm install
    ```

### Rodando o projeto

Primeiro, crie um arquivo .env em /server/src. Em seguida, altere o arquivo .env

```sh
PORT=porta_do_seu_servidor
```

Para executar o front-end e o back-end juntos, vá para a pasta /server e execute

    $ npm start

Para executar o backend, vá para a pasta /server e execute

    $ npm run server

Para rodar o frontend, vá até a pasta /client e execute

    $ npm start

Ou vá para a pasta /server e execute

    $ npm run client
    
Para rodar os testes do backend, vá até a pasta /server e execute

    $ npm run test
    
Para verificar erros de padrão de código (eslint) do frontend, vá até a pasta /server e execute

    $ npm run lint:server
    
Para verificar e corrigir erros de padrão de código (eslint) do frontend, vá até a pasta /server e execute

    $ npm run lint:server:fix
    
Para verificar erros de padrão de código (eslint) do backend, vá até a pasta /server e execute

    $ npm run lint:client
    
Para verificar e corrigir erros de padrão de código (eslint) do backend, vá até a pasta /server e execute

    $ npm run lint:client:fix
    
Para debugar o backend, vá até a pasta /server e execute

    $ npm run debug:server

<!-- USAGE EXAMPLES -->

## Ilustrações

<p align="center">
  <img width="100%" src="https://github.com/christhian12rv/challenge-accepted/blob/master/img/tela_inicial.png" alt="Tela Inicial">
  <img width="100%" src="https://github.com/christhian12rv/challenge-accepted/blob/master/img/previsao.png" alt="Previsão">
  <img width="100%" src="https://github.com/christhian12rv/challenge-accepted/blob/master/img/configuracoes.png" alt="Configurações">
  <img width="100%" height="500px" src="https://github.com/christhian12rv/challenge-accepted/blob/master/img/mobile.png" alt="Mobile">
</p>

## Explicação do projeto
O projeto consiste em uma api para consumir uma base de dados de arquivos json e em um frontend para mostrar a previsão do clima para os dias seguintes em diferentes cidades.

Como na ilustração acima, você pode pesquisar por cidades no input no canto superior direito e ele irá te dar um autocomplete de cidades. Escolhendo a cidade, ele irá te mostrar a previsão do clima nos dias seguintes para essa cidade.

Você também pode customizar se você quer a apresentação em graus Celsius ou Fahrenheit e também a precipitação em mm ou inch.

O projeto é responsivo e totalmente utilizável em dispositivos mobile.