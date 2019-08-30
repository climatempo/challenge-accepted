# Challenge Accepted
Aplicação web responsiva para consulta de previsão do tempo para uma semana nas cidades de Osasco e São Paulo.

# Arquitetura
O projeto foi sepado em 2 partes, mas dentro de uma mesma aplicação.
- **Rest API** - Api Rest desenvolvida em **Nodejs** com o framework **Express.js** para servir de end point para consumo dos dados de previsão.
- **Front end** - Desenvolvida em **React** e consumindo e exibindo os dados da api, a renderização das paginas é feita no servidor com server render pelo **Next.js** .
  
- ### Ferramentas
  - [React](https://reactjs.org/)
  - [Next.js](https://nextjs.org/)
  - [Sass](https://sass-lang.com/)
  - [Axios](https://github.com/axios/axios)
  - [Express](https://github.com/expressjs/express)

- ### Requisitos
  - [Node]((https://nodejs.org/en/download/)) > = 8.0
- ### Instalação
    ```
    $ git clone git@github.com:LuizFelipeNeves/desafio-climatempo.git
    $ cd desafio-climatempo
    $ npm install
    ```
- ### Execução
    ```
        $ npm start
    ```
  Acesse: `http://localhost:3000`

# Documentação
## API Methods
   | Method | Endpoint                       | Parameters       | Description                                                                                     
   | `GET`  | */api/locale/:name*            | *name:* `string` | Lista as cidades que possuem dados, Se não for informado o nome de nenhuma cidade, todas as cidades são retornadas.
   | `GET`  | */api/weather/:Id              | *Id:* `int`      | Busca a previsão do tempo para uma determinada cidade, id é obrigatorio informar. 