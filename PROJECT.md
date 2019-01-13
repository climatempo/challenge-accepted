## Tudo que fiz foi?

## Backend
Bom, eu construi uma Api com expressJs para servir nos endpoints

## `/locales`
## `/wheather`

utilizando um id passado pela query, caso **null** ele busca todos os resultados.

## Frontend
Para o frontend eu resolvi desenvolver uma aplicação react, utilizei o create-react-app para fazer a base do projeto,
utilizei também um template do html5Up só pra fica mais rápido, mas resolvi customizar tudo no final e acabou que nem usei
muito do template.

A utilização ficou simples, escreveu a cidade certo, aparece só ela, escreveu errado não filtra, apagou o input filtra para todos 
os resultados novamente.

## Instalação

Para fazer a instalação do projeto basta seguir os passos:

- Certifique-se de que tenhs instalado o nodeJS e o npm na máquina
- Faça o download da pasta do projeto como preferir (SSH, HTTPS, FORK...)
- Acesse através do terminal as pastas do projeto:

## Backend

- Entre na pasta /api

```
    cd /api
```

- Execute o comando: 

```
    npm i
```

Após instalar as bibliotecas, você pode executar:

```
    npm start
```

- E pronto, a api está sendo servida na porta especificada no console!

**Atenção:** A aplicação foi configurada para executar na porta 5000, caso esta porta esteja em uso, é necessário 
parar a aplicação que está utilizando esta porta ou alterar a porta configurada no arquivo index.js.

## Frontend

- Entre na pasta /app:

```
    cd ../app
```
- E execute o comando:

```
    npm i
```

- Após instalar as bibliotecas, você pode executar:

```
    npm start
```

E pronto, o app está sendo servido na url [http://localhost:3000/](http://localhost:3000/) em seu navegador de preferência.

**Atenção:**  A aplicação foi configurada para executar na porta 3000, caso esta porta esteja em uso, é necessário 
parar a aplicação que está utilizando esta porta.
