# Desafio Climatempo

Requisitos:

- Node.js v10.x.x
- Npm v6.4.1

## Aplicação

O Back-end da aplicação foi desenvolvido com o framework **Express.Js** do Node.Js.
Front-end desenvolvido com tecnologias Base (HTML, CSS, JavasSript) e com a biblioteca **JQuery.js**

### Executar aplicação

```
    npm run start:build
```

ou

```
    npm start
```

Por padrão a aplição irá executar em: `http://localhost:3000/`

### Executar testes

```
    npm run test
```

### Rotas

| Rota                        | Método     | Retorno                          |
| --------------------------- | ---------- | -------------------------------- |
| /                           | GET        | Aplicação                        |
| /locales                    | GET        | Lista de cidades                 |
| /locales/:name              | GET        | JSON com dados da cidades        |
| /weathers                   | GET        | Lista de previsões               |
| /weathers/:name             | GET        | JSON com dados da previsão       |
