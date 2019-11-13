# Challenge Accepted

## Pré-requisitos
* PHP 7.2 ou superior
* A extensão php-sqlite3

## Como instalar
Abra o terminal e execute os comandos na ordem abaixo:

1. composer install 
2. chmod +x install.sh
3. ./install.sh
4. php artisan migrate
5. php artisan db:seed
6. php artisan serve

Abra uma nova aba no terminal faça:

1. cd resources/reactjs/
2. npm install
3. npm start

<br/>
<br/>

<br/>
Para testar o PHP, após o processo de instalação, é só abrir a raiz do projeto e executar o seguinte comando:

* ./vendor/bin/phpunit

Para testar o React é só abrir a pasta resources/reactjs/ e executar:

* npm test
* Digitar "a"