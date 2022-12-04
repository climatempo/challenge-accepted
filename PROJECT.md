# Desafio Climatempo

Essa aplicação está divida em dois subsistemas:

-  `API` sendo o backend da aplicação que trata as requisições da API e disponibiliza os dados
-  `WEB` sendo o frontend que o usuário interage e que faz as requisição dos dados para a API

## Sobre o projeto

App Web que exibe a previsão do tempo por cidade pesquisada, consumindo os dados através da API.

-  Análise Lighthouse: 100% Acessível | 100% Boas práticas | 100% SEO

-  [Protótipo da interface](https://www.figma.com/file/t9fJqD8uh0yuXEeHvKsgm1/Layout---Climatempo-app?node-id=0%3A1&t=KzGQzecOwTi9SJlK-1) no Figma.

-  [Documentação da API](https://documenter.getpostman.com/view/14419670/2s8YzMXQhT) no Postman.

#### Funcionalidades

-  Responsividade Mobile, Tablet e Desktop
-  Tratamento de erro caso não obtenha os dados da cidade pesquisada
-  O usuário pode escolher visualizar a temperatura em Celsius ou Fahrenheit (padrão é Celsius) e a precipitação da chuva em Milímetros ou Polegadas (padrão é Milímitros)

#### Melhorias futuras

-  Integrar uma API Pública para obter mais dados
-  Adicionar testes unitários na API e na WEB
-  Melhorar a performace da aplicação

#### Tecnologias utilizadas

-  Typescript
-  Node.js, Express.js, Cors
-  React.js, Styled-components, RadixUI, Phosphor-react, Zod, React-hook-form, Axios

## Testando locamente

Primeiro, instalamos as dependências do backend e iniciamos o servidor da API

```bash
cd api/ # entra na pasta api

npm install && npm run dev # instala as depedências e inicia o servidor do backend
```

Depois, instalamos as dependências do frontend e iniciamos um servidor para visualizar a página web

```bash
cd .. && cd web/ # volta uma pasta e entra na pasta web

npm install && npm run dev # instala as depedências e inicia o servidor web
```

⚠️ A API estará rodando na porta **3000** e a página web estará rodando na porta **5173**.
