
Descrição do sistema.

 -> Foi implementado uma API com a linguagem de programação PHP e framework Laravel 6.
 Utilizei o scaffolding do laravel para implementar o front-end com ReactJS.

 -> Após clonar o projeto, você deverá executar o comando os seguintes comandos na raiz do projeto: 
    
    composer install

    npm install

-> O comando ( composer install ) irá instalar todas dependencias do laravel
e o ( npm install ) irá instalar as dependencias para o reactJS.

Executando o projeto:

para executar o projeto, o usuário deverá estar na pasta raiz do projeto e dar o comando : 

php artisan serve. ( Irá executar o servidor embutido do PHP na URL: http://localhost:8000 )

npm run development, ou npm run dev ( Irá compilar o front-end ).

Sobre o sistema

* Dentro da pasta resources/js, estão todos os arquivos de componentes javascript para executar o reactJS.

* Dentro da pasta app/Model, está o modelo que faz a leitura do arquivo .JSON onde estão os dados, e extrai as informações.

* Dentro da pasta app/Http/Controller, está o controlador CityController, onde faz o processamento da requisição e devolve os resultados.

* Dentro pasta storage/app estão os arquivos .JSON onde o laravel utiliza para armazenar arquivos
dentro da aplicação.

A API possui somente uma rota implementata do tipo GET, onde faz a consulta dos dados.

GET: /api/city/{nome_da_cidade}




