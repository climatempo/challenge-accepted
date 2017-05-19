<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/Q9lCAMF.png" alt="Climatempo" width="300px"/>
  </a>
</p>

___

## Boa noite equipe Climatempo.

Para o desenvolvimento foi utilizado:
- PHP
- NODEJS
- CSS
- HTML
- BOOTSTRAP
- MONGODB


##NODE.JS
Para o desenvolvimento da api foi utilizada a tecnologia node.js com os módulos express, body-parser, fs e mongodb (para manipular os docs json;

Como default a api está configurada para escutar a porta 8080.

A api em nodejs está dentro do diretorio api/nodejs. Dentro desse diretório será possível visualizar o arquivo package.json, api.js e o diretório node_modules.
Via terminal ou cmd execute o comando 'npm install' no diretorio para que os modulos sejam carregados e fiquei disponiveis para uso. (tendo em vista que o nodejs já está instalado na máquina).

Após os modulos carregados, será possivel subir a api.js com o comando 'nodemon api.js'.

OBS: OS RECURSOS GET DA API ESTÃO CONFIGURADOS PARA VALORES DO LOCALHOST:80;

##MONGODB
Será necessário a instalação do mongoDB caso ele não esteja instalado na maquina local.

Tendo em vista a que o mongodb já está instalado, acesse o diretório 'base' que se encontra na raiz e atravel de terminal ou cmd, execute as duas linhas de comando abaixo:

- mongoimport --jsonArray --db clima --collection locales --drop --file locales.json
- mongoimport --jsonArray --db clima --collection weather --drop --file weather.json

Caso seja informado algum erro de banco, vão até o diretório 'api/nodejs' e através do terminal ou CMD levante o servidor com nodemon api.js que o banco será criado, e após isso, repita o processo anterior.


##VIEW
A página principal encontra-se dentro de view/index.php.

##O Desenvolvimento
Dividi o projeto em 3 partes:
- API Node.js (api/nodejs/api.js);
	- Responsável por acessar o mongodb e realizar a busca dos dados referentes a previsão de 'Osasco e São Paulo'.

- VIEW (view/index.php)
	- Tela em que o usuário terá acesso a visualizar a previsão do tempo e fazer a busca entre as cidades de 'Osasco e São Paulo'.
	- A mesma esta preparada para ser visualizada em Mobile, Tablet e PC;

- api_climatempo.class.php (controller/api_climatempo.class.php);
	- Essa classe ficou responsável por fazer a comunicação com a api.js. Através dela conseguimos utilizar o metodo 'getContentsAPIClimatempo($a,$b)' onde podemos estar passando com o caminho da api e qual parametro de busca, no nosso caso atual utilizamos a url 'http://localhost:8080/api_lacale' ou 'http://localhost:8080/api_weather' e como parametro da api_locale utilizamos o nome da cidade 'Osasco / São Paulo' e para a api_weather utilizamos o id da locale '3735 / 3477' (o parametro da api_wheather é passado automaticamente pela classe após o usuário interagir com o campo de busca);

CASO QUEIRA VISUALIZAR OS DADOS JSON RETORNADOS PARA API, BASTA SUBIR O SERVIDOR API.JS (API/NODEJS) COM O COMANDO NODEMON API.JS E ACESSAR 'http://localhost:8080/api_lacale' OU 'http://localhost:8080/api_weather'. PARA REALIZAR A CONSULTA POR PARAMETRO UTILIZE 'http://localhost:8080/api_weather/ID_LOCALES' OU 'http://localhost:8080/api_lacale/CIDADE'.

##CONCLUSÃO
Foi implementado somente a ação GET na API para exemplificar a visualização das previsões em tela com a tecnologia node.js + php utilizando mongoDB como recurso NoSQL.


Desde já agradeço a oportunidade de participar do processo seletivo do Climatempo.

Me coloco totalmente a disposição.


Att,
Willian M. Toledo
williantoledo@gmail.com