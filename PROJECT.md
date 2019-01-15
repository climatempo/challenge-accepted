# ClimaTempo - Desafio

1. [Rodando com Docker](#rodando-com-docker)
2. [Rodando local](#rodando-local)
3. [Rodando testes](#testes)
4. [Ecossistema do projeto](#ecossistema-do-projeto)
5. [Porque o desenvolvi assim?](#porque-o-desenvolvi-assim?)

## Rodando com Docker

```bash
docker build -t climatempo-challenge .
```

```bash
docker run -p 5000:80 -t climatempo-challenge
```

Aguarde até o boot do php-fpm...

Pronto, basta acessar http://localhost:5000 no seu navegador.

## Rodando Local

Requisitos:

- PHP7
- Composer

Após o clone do projeto, instale as dependências com o composer.
```bash
composer install
```

Agora basta entrar na pasta de rodar
```bash
php -S 0.0.0.0:5000 -t public/
```

## Rodando testes

Basta entrar na pasta após o composer install e rodar:

```bash
composer test-api
```

## Ecossistema do projeto

- `helpers` com funções de uso global.
- `core` com Classes inicializadoras sendo `AppCapsule` uma classe de interface Container.
- `bootstrap` com o arquivo `app.php` sendo o main da aplicação
- `routes` sendo as classes que mostra as rotas da aplicacao, sendo `api.php` prefixada com /api
- `src` contém algumas classes que servem de DesignPattern da aplicação, como Repositories, Models, Services
- `views` contendo as paginas a serem referenciadas pelo helper `view()`

## Porque o desenvolvi assim?

Por ser um amante das arquiteturas de frameworks como Laravel, Slim resolvi criar um sistema simples, e de fácil usabilidade

Criei os Endpoints da api dentro de `routes/api.php` porém não julguei necessário utiliza-los, por se tratar de um sistema simples, mas criei de forma escalável, caso seja necessário dar load nos dados via ajax, é possível.

Os Repositories e Models, são uma abstração partindo do presuposto que os dados seriam pegos do banco de dados. Porém, como são carregados via JSON, decidi criar essa arquitetura escalável. Claro... caso seja conectado um banco de dados, apenas algumas configurações deverão ser feitas no core da aplicação, de fácil manutenção.

Dentro de `bootstrap/app.php` criei alguns ServicesProvides sem mesmo criar tal arquitetura por se tratar de um projeto pequeno. Caso o mesmo cresça, basta adicionar alguma pasta de ServiceProvider e dar boot no `app.php`.

