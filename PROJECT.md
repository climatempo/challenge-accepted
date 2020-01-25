# Climatempo Challenge

Esse arquivo está dividido em duas partes: Backend e Frontend.

## Backend - Climatempo Challenge

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/d3ad0f07047600f4be66)

O Backend foi desenvolvido utilizando Node.js e Express.

### Requerimentos

- Node.js >= 10
- Yarn

No arquivo .nvmrc está a versão usada para o projeto.

### Bibliotecas usadas

| Nome do pacote                                                       |                                        Descrição                                        |
| -------------------------------------------------------------------- | :-------------------------------------------------------------------------------------: |
| [cors](https://www.npmjs.com/package/cors)                           |                             Pacote usado para tratar o CORS                             |
| [dotenv](https://www.npmjs.com/package/dotenv)                       |                 Carrega variáveis de ambiente a partir de arquivos .env                 |
| [express](https://www.npmjs.com/package/express)                     |                    Framework web usado para construção de APIs REST                     |
| [express-validator](https://www.npmjs.com/package/express-validator) |                     Validação de dados dos _requests_ com o Express                     |
| [helmet](https://www.npmjs.com/package/helmet)                       | Seta headers de segurança para tratar alguns problemas conhecidos como por exemplo XSS. |
| [morgan](https://www.npmjs.com/package/morgan)                       |               Middleware que faz o log de cada _request_ feito ao express               |
| [serialize-error](https://www.npmjs.com/package/serialize-error)     |                        Serializa e desserializa erros em objetos                        |

_Dependências de Desenvolvimento:_

- Usadas para verificar a sintaxe e formatação em relação a um _style guide_:

```
    eslint, eslint-config-airbnb-base, eslint-config-prettier, eslint-plugin-import, eslint-plugin-prettier
```

- Cria _hooks_ para facilitar o fluxo de trabalho. Particularmente utilizo para chamar o eslint, testes e prettier antes de um commit:

```
    husky
```

- Framework de testes para o Node.js:

```
    jasmine
    jasmine-console-reporter
```

- Monitora mudanças em seu app e reinicia automaticamente

```
    nodemon
```

- Formatador de código. Normalmente costumo usar o `editor.formatOnSave` do VSCode:

```
    prettier
    pretty-quick
```

- Usado para realizar requisições a API durante os testes:

```
    supertest
```

### Como rodar?

1. Instale as [dependências necessárias](#requerimentos). Para o Node.js eu recomendo usar o [NVM](https://github.com/nvm-sh/nvm).

2. Instale os pacotes necessários usando:

```bash
    yarn install
```

3. Inicie a API usando:

```bash
    yarn start
```

4. Para rodar os testes use:

```bash
    yarn test
```

5. Para verificar o _lint_ do código use:

```bash
    yarn lint
```

### Endpoints

Os _endpoints_ desta API estão documentados abaixo.

#### Obter os dados do clima de uma cidade

**URL**

- /weather?city=name

**Método HTTP:**

- GET

**Parâmetros de Query:**

- **city(texto)**: nome da cidade.

**Parâmetros no cabeçalho**

Nenhum

**Respostas**

Código: 200 OK
Conteúdo de retorno: Dados de clima da cidade fornecida

Código: 400 Bad Request
Motivo: Cidade inválida ou ausente

Código: 404 Not Found
Motivo: Não existe a cidade ou dados de clima.

**Exemplo de chamada**

```bash
    curl http://localhost:3000/weather\?city\=Osasco
```

Resultado:

```json
{
  "period": {
    "begin": "2017-02-01",
    "end": "2017-02-07"
  },
  "locale": {
    "id": 3735,
    "name": "Osasco",
    "state": "SP",
    "latitude": -23.532,
    "longitude": -46.792
  },
  "weather": [
    {
      "date": "2017-02-01",
      "text": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
      "temperature": {
        "min": 20,
        "max": 28
      },
      "rain": {
        "probability": 60,
        "precipitation": 20
      }
    },
    ...
  ]
}
```

### Comentários sobre decisões e ideias de trabalhos futuros

- Se os arquivos(locales.json e weather.json) mudassem seria necessário adotar outra abordagem de leitura:
  - Ex: load inicial no BD e ficar "escutando" quando houvesse atualizações.
- Os dados do endpoint de "weather" poderiam ser serializados, ou seja, trazer somente o necessário para o consumo do cliente;
- Não usei _cache_ dos dados, pois os mesmos estão carregados na memória. Em outros casos, o _cache_ deveria ser feito para evitar operações desnecessárias de consulta ao BD ou em alguns casos API Externas. Claro que analisar a aplicação de _cache_ dos dados envolve verificar a frequência de mudança de dados. Por fim, para _cache_ sugiro utilizar o [Redis](https://redis.io/);
- Alguns dados de precipitação estavam como `string`. Alterei o tipo para número para estar igual aos demais.

## Frontend - Climatempo Challenge

TODO
