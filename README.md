<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/Q9lCAMF.png" alt="Climatempo" width="300px"/>
  </a>
</p>

___


## Como executar testar a aplicação:

Aplicação é um monorepo com um front-end e backend-end. São os seguintes passos para exevutar a aplicação:

1° - Instalar as dependencias utilizando yarn ou npm install na raiz do repositório.

2° - Preencher o .env de cada package seguindo os exemplos em seus respectivos diretórios.

3° - Iniciar os containers dos bancos de dados dentro da pasta do package da api utilizando docker-compose up -d

4° - Executar o comando de build na raiz do projeto com o comando yarn/npm build. Esse script executa o build de ambos os packages.

5° - Iniciar a aplicação executando yarn/npm dev para modo de desenvolvimento ou yarn/npm start para produção.

6° - Inserir as seeds nos bancos dedados com o comando yarn/npm seed dentro do package da api. É importante que pelo menos a api esteja rodando, pois a inserção é feita por meio dela. O processo demora alguns minutos pois além de inserir 5570 cidades, gera randomicamente algumas previsões para cada uma das cidades.

7° - Acessar no ambiente local o cliente através do http://localhost:3000/ ou pela porta configurada no .env

## Considerações a respeito do projeto

### Cache

- No backend, ele ocorre salvando as requisições no Redis.
- No frontend, ocorre por páginas pré-geradas pelo Next.js. Na primeira vez em que uma página de previsão é acessada, ela faz uma requisição ao backend buscando as previsões e é feito um build do HTML pronto com todos os dados da API e retornado ao usuário. Esse HTML fica salvo no servidor que o Next.js cria no frontend, disponibilizando esse HTML pronto, sem fazer requisições parao backend, para qualquer usuário que acessar a página, até que o tempo de revalidação desses dados ocorra (a duração pode ser configurado pelo .env) ou que se chegue ao fim do dia, trazendo uma performance e uma rapidez incrível.

### Material UI & Styled Components

- Devido ao prazo de entrega do projeto, escolhi utilizar uma mistura de components prontos do MUI e components específicos pelo Styled Components. 

### Arquitetura da API

- Escolhi utilizar o Nest.js por trazer formas rápidas de construir a api com uma Clean Architecture e com os princípios do SOLID.
- Escolhi utilizar interfaces para servirem de "contrato" entre as diferentes camadas da aplicação, trazendo uma boa escabilidade, segurança e manutenibilidade.

___

## Processo de recrutamento

Olá desenvolvedor, pronto para participar do nosso processo de recrutamento para vaga de Full-stack?

### Sobre a Vaga

- Home Office
- Flexibilidade no horário de trabalho
- Sede: Parque Tecnológico - São José dos Campos (http://www.pqtec.org.br)

### Requisitos para a vaga

Bons conhecimentos em:

- Javascript
- NodeJS
- PHP
- SQL
- RESTful
- ReactJS
- HTML
- CSS

Desejável:

- GraphQL
- NoSQL
- Docker

### O Desafio

Um usuário quer saber como vai ficar o 
tempo para os próximos dias em Osasco e São Paulo utilizando
seu smartphone. 

O que esperamos:
 
 ##### Frontend:
 - Uma página responsiva;
 - Um campo autocomplete para buscar localidades;
 - Um card para cada dia de previsão;
 ##### Backend:
 - Uma API rest ou graphql para obter localidades e dados de previsão;
 - Validação de entradas do usuário;
 
 Diferenciais:
 
 - Utilizar cache;
 - Utilizar Elasticsearch ou algum outro software de **full-text search** para busca de localidades;
 - Configurar ambiente docker para rodar a aplicação;
 
 ###### uso de bibliotecas é livre.

### Desafio Extra (opcional)
  
  Permita que o usuário selecione em qual unidade de temperatura e chuva (precipitação) ele quer visualizar os dados.
  
  ###### Design livre.
  
  ##### Conversão dos valores:
  
  - Temperatura:
    - de **°C** pra **°F**: (`valor` * 1.8) + 32
    - de **°F** pra **°C**: (`valor` - 32) / 1.8
  - Chuva:
    - de **mm** pra **inch**: (`valor` / 25.4)
    - de **inch** pra **mm**: (`valor` * 25.4)
  

### Avaliação

O que vamos avaliar:

- Performance de busca e renderização;
- Segurança;
- Testes;
- Manutenibilidade;
- Usabilidade;
- Boas práticas;

Exemplo:

<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/x3z4tYM.png" alt="Climatempo" width="400px"/>
  </a>
</p>

**Atenção:**  Não se preocupe em reproduzir o exemplo, use apenas como referência.
 
### Dados
 
Localidades:
    
    base/locales.json
 
| Propriedade   | Tipo   | Descrição                           |
| ------------- |:------:| ------------------------------------|
| `id`          | Number | Id da localidade                    |
| `name`        | String | Nome da localidade                  |
| `state`       | String | Sigla do estado da localidade       |
| `latitude`    | Number | Latitude do centro da localidade    |
| `longitude`   | Number | Longitude do centro da localidade   |
 
 
Previsão:
 
    base/weather.json
    
**period: Object**
 
| Propriedade        | Tipo   | Descrição                                  |
| ------------------ |:------:| -------------------------------------------|
| `period.begin`     | String | Data início da busca no formato AAAA-MM-DD |
| `period.end `      | String | Data fim  da busca no formato AAAA-MM-DD   |

**locale: Object**
 
Os mesmos dados do JSON de localidades.
 
**weather: Object**
 
| Propriedade                     | Tipo   | Descrição                                  |
| ------------------------------- |:------:| -------------------------------------------|
| `weather.date`                  | String | Data da previsão no formato AAAA-MM-DD     |
| `weather.text`                  | String | Texto sobre a previsão do dia              |
| `weather.temperature.min`       | Number | Temperatura mínima em graus celsius (°C)   |
| `weather.temperature.max`       | Number | Temperatura máxima em graus celsius (°C)   |
| `weather.rain.probability`      | Number | Probabilidade de chuva em porcentagem (%)  |
| `weather.rain.precipitation`    | Number | Precipitação de chuva em milímetros (mm)   |

### Comece

O processo do desafio deve ser:

1. Faça o fork do desafio.

2. Crie um **PROJECT.md** com a explicação de como devemos executar o projeto e com o máximo de detalhes possível do que foi feito.

3. Após concluir faça um pull request, preencha o [formulario](https://docs.google.com/forms/d/e/1FAIpQLSfPIwojh04iSxIrrOJSyrMvYcStLpoO3luR11ZxBY_pkWsjGA/viewform)


___


Qualquer dúvida entre em contato com nossa equipe.
