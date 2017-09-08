# Challenge Accepted 
Aplicação para consulta das previsões climáticas nos próximos dias. 

## Começando
* [Pré-requisitos](#pré-requisitos)
* [Instalação](#instalação)
* [Rodando os testes](#rodando-os-testes)

### Pré-requisitos
* PHP 7.1
* Composer
* Node/NPM

### Instalação
Clone o projeto 
```bash
git@github.com:Domeniqque/challenge-accepted.git
```
Na pasta do projeto, copie o arquivo **.env.example**, instale as dependências do projeto e inicie a aplicação
```bash
cp .env.example .env
composer install
npn install
php artisan key:generate
php -S localhost:8000 -t public
```

### Rodando os Testes
Para executar os testes:
```bash
vendor/bin/phpunit
```

## Documentação

Veja a documentação da API [aqui](documentation.md). 

## Sobre
A aplicação foi desenvolvida para a participação no processo de seleção do Climatempo. 

<p align="center">
  <a href="#">
      <img src="https://i.imgur.com/pj8Csof.png" alt="Climatempo" width="400px"/>
  </a>
</p>

O backend foi desenvolvido com o [Lumen](https://lumen.laravel.com/), um micro framework php versátil e performático.
A escolha dele se deu devido a sua performace, simplicidade, sua estrutura agradável de se trabalhar e ao ambiente 
de testes de features já configurados.

Para a interface foi usado o [VueJs](https://vuejs.org/), um biblioteca javascript para criação de interfaces baseado em componentes. Essa lib é de fácil entendimento e possibilita a criação de telas bem agradáveis e com uma boa manutenibilidade,
devido aos uso de componentes. Além de dar eficiência ao desenvolvimento.

A interface consome alguns endpoints da própria aplicação. 


