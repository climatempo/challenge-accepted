## Requisitos para rodar a aplicação:

### NodeJS, de preferência na versão LTS

## Como executar:

### Basta instalar as dependências no diretório root do projeto, utilizando o seguinte comando:

```js
    npm i
```

### Após instalar as dependências, use o seguinte comando para iniciar a aplicação:

```js
    npm start // esse comando inicia tanto a aplicação, quanto o server
```

### Para rodar os testes, use o seguinte comando:

```js
    npm test
```

# Sobre o projeto

## Ferramentas utilizadas:

### ReactJS

### TypesScript

### JSON Server

### Axios

### Jest

### Styled-Components

## O que foi feito:

### Uma SPA de rota única.

### Na primeira renderização, a aplicação recebe a lista com as localidades, para evitar futuros re-renders desnecessários.

### O campo de busca, só permite entrada de caracteres a-Z, com acentos ou não.

### Assim que o usuário digita no input, é sugerido o autocomplete da localidade de acordo com o que foi digitado.

### Ao clicar no autocomplete, é feito o request, para obter o clima da localidade selecionada, e renderizado os cards com todos os dados dos 7 dias.

### Ao clicar nos campos de temperaturas o valor é convertido para °F ou vice versa. O mesmo acontece com o campo de precipitação, que é convertido de mm para inch ou vice versa.

### Foram feitos testes unitários, para assegurar a renderização e funcionamento de todos os elementos da aplicação.
