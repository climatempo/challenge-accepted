## Como executar a aplicação:

Aplicação é um monorepo com um front-end e backend-end. São os seguintes passos para exevutar a aplicação:

1° - Instalar as dependencias utilizando yarn ou npm install na raiz do repositório.

2° - Preencher o .env de cada package seguindo os exemplos em seus respectivos diretórios.

3° - Iniciar os containers dos bancos de dados dentro da pasta do package da api utilizando docker-compose up -d

4° - Executar o comando de build na raiz do projeto com o comando yarn/npm build. Esse script executa o build de ambos os packages.

5° - Iniciar a aplicação executando yarn/npm dev para modo de desenvolvimento ou yarn/npm start para produção.

6° - Inserir as seeds nos bancos dedados com o comando yarn/npm seed dentro do package da api. É importante que pelo menos a api esteja rodando, pois a inserção é feita por meio dela. O processo demora alguns minutos pois além de inserir 5570 cidades, gera randomicamente algumas previsões para cada uma das cidades.

7° - Acessar no ambiente local o cliente através do http://localhost:3000/ ou pela porta configurada no .env

## Considerações a respeito do projeto

### React + Next

- Utilizei o React juntamente com o Next para trazer todos os benefícios de performance que essa biblioteca trás com o Static Site Generator ([leia sobre aqui.](https://nextjs.org/docs/basic-features/pages)). 

### Material UI & Styled Components

- Devido ao prazo de entrega do projeto, escolhi utilizar uma mistura de components prontos do MUI e components específicos pelo Styled Components. 

### Arquitetura da API

- Escolhi utilizar o Nest.js por trazer formas rápidas de construir a api com uma Clean Architecture e com os princípios do SOLID.
- Escolhi utilizar interfaces para servirem de "contrato" entre as diferentes camadas da aplicação, trazendo uma boa escabilidade, segurança e manutenibilidade.

### Cache

- No backend, ele ocorre salvando as requisições no Redis.
- No frontend, ocorre por páginas pré-geradas pelo Next.js. Na primeira vez em que uma página de previsão é acessada, ela faz uma requisição ao backend buscando as previsões e é feito um build do HTML pronto com todos os dados da API e retornado ao usuário. Esse HTML fica salvo no servidor que o Next.js cria no frontend, disponibilizando esse HTML pronto, sem fazer requisições parao backend, para qualquer usuário que acessar a página, até que o tempo de revalidação desses dados ocorra (a duração pode ser configurado pelo .env) ou que se chegue ao fim do dia, trazendo uma performance e uma rapidez incrível.