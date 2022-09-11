# ClimaTempo challenge-accepted
## Frontend
### O que foi feito

Primeiro foi criado um prototype no **figma** de como seria estruturada as telas:
![Prototipo das telas do frontend](prototipo/prototypeClima.png)

Depois foram criados os seguintes componentes: 

- Header: foi criado um cabeçalho com a logo da Clima. 

- Search: foi criado um input autocomplete para pesquisa das localidades, ele utiliza a api do backend para buscar as localidades.

- NameCity: foi criado um componente para identificar a localidade selecionada.

- Card: foi criado um componente para mostrar os dados meteorologicos da localidade que são fornecidos pela api do backend.

### Como rodar?

Para rodar a aplicação siga os passos abaixo: 

- Entre na pasta do projeto: `cd frontend` 

- Instale as dependências: `npm install`

- Inicie a aplicação: `npm start`

## Backend
### O que foi feito
O backend tem duas rotas que podem ser utilizadas que são elas:

- `/locales?filter=<string>`: rota tipo `GET` que retorna todas as localidades. Essa rota permite um parametro opcional na url chamado `filter`, que filtra as localidades que contenham o texto informado no seu nome.

- `/forecast?id=<number>`: rota tipo `GET` que retorna os dados meteorológicos da cidade selecionada pelo `id` que é um parametro obrigatório na url. Caso o id não seja informado ou não haja previsão para a cidade representada por esse id um erro será retornado.

### Como rodar?

Para rodar a aplicação siga os passos abaixo:

- Entre na pasta do projeto: `cd backend`

- Instale as dependências: `npm install`

- Inicie a aplicação: `npm start`
