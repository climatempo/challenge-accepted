<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/Q9lCAMF.png" alt="Climatempo" width="300px"/>
  </a>
</p>

<!-- PROJECT LOGO -->
<br />
<p align="center">
    <h3 align="center">Climatempo FrontEnd Challenge</h3>

  <p align="center">
    Este é um desafio para a vaga FrontEnd para o cliente Climatempo
    <br />
    <a href="https://github.com/climatempo/challenge-accepted">Aqui está o desafio original</a>
    <br />
    <a href="https://github.com/phfdonda/challenge-accepted/pulls">Reporte algum Bug</a>
    ·
    <a href="https://github.com/phfdonda/challenge-accepted/request_feature">Se quiser uma feature</a>
  </p>
</p>

---

# Desafio Front-End - Pedro Donda

> Este site é resultado de um desafio para a vaga FrontEnd da contratadora Hypesoft, para o cliente Climatempo.

## Versão Online

Se quiser ver a versão em tempo real, aqui está o link:
[Live Version](https://challenge-accepted-ozywryjlu-phfdonda.vercel.app/)

### Screenshots do projeto

O site em sua página inicial parece assim:
![screenshot](public/images/mobile.png)

### Loom explicando o projeto

Gravei um pequeno video explicando o projeto e mostrando ele em ação.
![Video explicativo](https://www.loom.com/share/e72f84f14d05467894f216dec7e10743)

## Index

- [Sobre o projeto](#sobre-o-projeto)
  - [Restrições](#restrições)
  - [Objetivos](#objetivos)
  - [Instalação](#instalação)
  - [Feito com](#feito-com)
  - [Testando](#testando)
- [Contato](#contato)

## Sobre o Projeto

Esse é um requisito para contratação na vaga

### Restrições

1. O que se espera:

- Uma página responsiva;
- Um campo autocomplete para buscar localidades;
- Um card para cada dia de previsão;

2. Desafio Extra:

- Permita que o usuário selecione em qual unidade de temperatura e chuva (precipitação) ele quer visualizar os dados.

Conversão dos valores:
Temperatura:

> de °C pra °F: (valor _ 1.8) + 32
> de °F pra °C: (valor - 32) / 1.8
> Chuva:
> de mm pra inch: (valor / 25.4)
> de inch pra mm: (valor _ 25.4)

### Objetivos

1. O objetivo deste teste é avaliar:

- Performance de busca e renderização;
- Segurança;
- Testes;
- Manutenibilidade;
- Usabilidade;
- Boas práticas;

2. Não era necessário reproduzir o exemplo exatamente, apenas utilizá-lo como referência.

## Instalação

Este projeto necessita de Node.js e npm instalados na máquina. Siga estes passos para instalá-los: [Node - Installation Guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Você pode baixa o código [repo](https://github.com/phfdonda/challenge-accepted/archive/heads/master.zip) ou cloná-lo colando o seguinte código no terminal `git clone git@github.com:phfdonda/challenge-accepted.git` usando SSH ou `git clone https://github.com/phfdonda/challenge-accepted.git` usando HTTPS.

Abra o terminal e cd para a pasta desejada onde instalou o projeto, algo assim: `User/<folder>/frontend-challenge/`. Depois disso, rode `npm install` para instalar todas as dependências.

Este projeto não requeria que um banco de dados fosse instalado, então é bem simples. É um projeto Next, então por padrão a porta para acessá-lo é a 3000. Digite no seu terminal `npm start`. No navegador, digite `http://localhost:3000`.

Aproveite!!!

### Feito com

- Next.js
- SCSS para estilização
- VsCode
- Cypress para testes.

## Testando

Para testar utilizei o `Cypress` para testes e2e. Escolhi este método ao invés de unitário porque ele vai testar mais componentes ao mesmo tempo, mesmo que não com toda a precisão. O teste e2e também é ótimo como documentação e demonstração de funcionamento de um site, o que é bem o propósito deste projeto.

O Cypress trabalha melhor com Chrome, então é bom que use este navegador.

Para testar você deve primeiro colocar o servidor online, digitando `npm run dev`. Então pode rodar o teste, digitando no terminal `npm test`.

Isto deve abrir uma janela no Chrome. Os testes rodam ao vivo, e são em intuitivos.

Não deu para testar o projeto inteiramente, mas espero que seja o suficiente para demonstrar conhecimentos.

## Contato

Pedro Henrique Ferreira Donda

Github - [@phfhdonda](https://github.com/phfdonda)

LinkedIn - [PedroDonda](https://www.linkedin.com/in/pedro-donda-808621bb/)
