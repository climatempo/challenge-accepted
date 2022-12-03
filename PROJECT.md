# Desafio Climatempo

Essa aplicação está divida em dois subsistemas:

-  `API` sendo o backend da aplicação que trata as requisições da API e disponibiliza os dados
-  `WEB` sendo o frontend que o usuário interage e faz as requisição dos dados para a API

## Testando locamente

Primeiro, instalamos as dependências do backend e iniciamos o servidor da API

```bash
cd api/ # entra na pasta api

npm install && npm run dev # instala as depedências e inicia o servidor
```

Depois, instalamos as dependências do frontend e iniciamos um servidor para visualizar a página web

```bash
cd .. && cd web/ # volta uma pasta e entra na pasta web

npm install && npm run dev # instala as depedências e inicia um servidor web
```
