<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/Q9lCAMF.png" alt="Climatempo" width="300px"/>
  </a>
</p>

---

## Resumo

Conforme o esperado o usuário pode efetuar uma pesquisa entre as cidades de São Paulo e Osasco digitando pelo nome da cidade ou as selecionando numa lista que é carregada previamente ao iniciar a aplicação; Selecionando a cidade é então carregado um menu do tipo Accordion dividindo as informações sobre a previsão por data, sendo exibilido os últimos 7 dias.

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:

1. Backend (pasta server)
2. Frontend (pasta client)

💡 O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/kinucris/challenge-accepted.git

# Acesse a pasta do projeto no terminal/cmd
$ cd challenge-accepted

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:9000

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Volte a pasta raiz do projeto
$ cd ..

# Acesse a pasta do projeto no seu terminal/cmd
$ cd client


# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

### Entrypoints

```bash
/api/locales/
# Lista todos os locales, usado para popular os registros encontrados no Select no início da aplicação

/api/weather/
#Lista todas as previsões disponíveis no servidor

/api/weather/:id
#Filtra apenas a previsão de acordo com o ID passado via get
```

##### Frontend:

-   Página responsiva SPA;
-   Utilizado Material-UI

##### Backend:

-   API rest rodando em Node (minha primeira experiência com o mesmo rs)

## 💻 Sobre o projeto

Muito obrigado pela oportunidade de participar de tal processo seletivo e ter um belo vislumbre da densidade de dados que passam por vocês diariamente.

[![climatempo-21-06-2021-03-21-02.gif](https://s6.gifyu.com/images/GIF-21-06-2021-03-21-02.gif)](https://gifyu.com/image/1okI)

---

### Autor

---

<a href="https://www.linkedin.com/in/elvis-moraes/">
 <img style="border-radius: 50%;" src="https://instagram.fqcj2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/174424542_464963584624718_4037314511517003129_n.jpg?tp=1&_nc_ht=instagram.fqcj2-1.fna.fbcdn.net&_nc_ohc=BTAmY8JetxcAX_8_ptj&edm=AP_V10EBAAAA&ccb=7-4&oh=9edf1d0e24a42b002aab750eda40943b&oe=60CBCCE8&_nc_sid=4f375e" width="100px;" alt="Elvis Moraes"/>
 <br />
 <sub><b>Elvis Moraes</b></sub></a> <a href="https://www.linkedin.com/in/elvis-moraes/" title="linkedin">🚀</a>

Feito com ❤️ por Elvis Moraes 👋🏽 Entre em contato!

[![Twitter Badge](https://img.shields.io/badge/-@kinucris-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/kinucris)](https://twitter.com/kinucris) [![Linkedin Badge](https://img.shields.io/badge/-Elvis-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/elvis-moraes/)](https://www.linkedin.com/in/elvis-moraes/)
[![Gmail Badge](https://img.shields.io/badge/-elvismoraes@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:elvismoraes@gmail.com)](mailto:elvismoraes@gmail.com)

## License

[MIT](https://choosealicense.com/licenses/mit/)
