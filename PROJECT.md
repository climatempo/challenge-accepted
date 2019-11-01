
1.0 - Descrição do sistema e tecnologias utilizadas.

 1.1 - Foi implementado uma API com a linguagem de programação PHP e framework Laravel 6 e
 utilizado o scaffolding do laravel para implementar o front-end com ReactJS.

 1.2 -Faz a consulta no webservice sobre a previsão do tempo para as cidades de 
 Osasco e São Paulo.

2.0 -Instalação e Execução do projeto

 2.1 - Após clonar o projeto, você deverá navegar até a pasta raiz do projeto com o comando exemplo: ( cd C:\Users\seu_usuario\diretorio_do_projeto [ no prompt do dos], ou cd C:/Users/seu_usuario/diretorio_do_projeto caso seja no gitbash) executar os seguintes comandos na pasta raiz do projeto: 
    
    composer install

    npm install

2.2 - O comando ( composer install ) irá instalar todas dependencias do laravel 6
e o ( npm install ) irá instalar as dependencias para o reactJS.

2.3 - Executando o projeto

para executar o projeto, o usuário deverá estar na pasta raiz e executar os comandos : 

php artisan serve. ( Irá executar o servidor embutido do PHP na URL: http://localhost:8000 )

npm run development, ou npm run dev ( Irá compilar o front-end ).

3.0 - Sobre o sistema

3.1 - Dentro da pasta resources/js, estão todos os arquivos de componentes javascript para executar o reactJS.

3.2 - Dentro da pasta app/Model, está o modelo que faz a leitura do arquivo .JSON onde estão os dados, e extrai as informações.

3.3 Dentro da pasta app/Http/Controller, está o controlador CityController, onde faz o processamento da requisição e devolve os resultados.

3.4 - Dentro pasta storage/app/base estão os arquivos .JSON onde o laravel utiliza para armazenar arquivos dentro da aplicação.

A API possui somente uma rota implementata do tipo GET, onde faz a consulta dos dados.

GET: /api/city/{nome_da_cidade}

4.0 - Utilizando o sistema.

    4.1 - Após ter executado o comando php artisan serve, para acessar a página web, basta digitar a URL: http://localhost:8000.

    4.2 - Digite o nome da cidade na barra de pesquisas Osasco ou São Paulo, e precione enter. após isso, o sistema irá carregar os dados referente aquela cidade.