# Challenge Accepted 
Aplicação para consulta das previsões climáticas nos próximos dias. 

## Começando
* [Pré-requisitos](#pre-requisitos)
* [Instalação](#instalacao)
* [Rodando os testes](#rodando-os-testes)

### Pré-requisitos
* PHP 7.1
* Composer
* Node/NPM

### Instalação
Clone o projeto 
```
git@github.com:Domeniqque/challenge-accepted.git
```
Na pasta do projeto, copie o arquivo **.env.example**, instale as dependências do projeto e inicie a aplicação
```
cp .env.example .env
composer install
npn install
php artisan key:generate
php -S localhost:8000 -t public
```

### Rodando os Testes
Para executar os testes:
```
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

Ela possui como stack:
* [Lumen](https://lumen.laravel.com/), um micro framework php versátil e performático.
* [VueJs](https://vuejs.org/), biblioteca javascript para criação de interfaces usando componentes.

Foi implementado alguns endpoints que são consumidos pela página inicial da própria aplicação.


