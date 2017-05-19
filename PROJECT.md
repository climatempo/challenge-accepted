## Instalação
Para fazer o deploy da aplicação basta seguir os passos abaixo:

- Certificar-se de que possui o [NodeJS](https://nodejs.org/en/) e o [NPM](https://www.npmjs.com/) instalados na máquina.
- Baixar a pasta do projeto para um diretório de sua preferência.
- Acessar através do terminal a pasta do projeto:
```
    cd /seu/diretório
```
- Dentro do diretório basta rodar o seguinte comando para instalar as dependências do projeto:
```
    npm i
```

- Após a instalação das dependências (o que pode levar algum tempo dependendo de sua conexão com a internet) basta executar o seguinte comando para iniciar a aplicação:
```
    npm start
```
- Se tudo correu bem será exibido no terminal a seguinte mensagem para cada núcleo de processamento que sua máquina possuir:
```
Site listening on port 3000!
```
- Para acessar a aplicação basta digitar [http://localhost:3000/](http://localhost:3000/) em seu navegador de preferência.

##### OBS: 
   * A aplicação foi configurada para executar na porta 3000, caso esta 
   porta esteja em uso é necessário parar a aplicação que está utilizando esta porta
   para que seja possível iniciar o sistema aqui proposto.
   
## Test
Para fazer a execução dos testes é necessário que se tenha instalado o [Mocha](https://mochajs.org/) de forma globalmente.
Caso não tenha o [Mocha](https://mochajs.org/) instalado globalmente basta rodar o comando de acordo com o sistema operacional utilizado.

- Windows
```
    npm i -g mocha
```
- Linux ou OS X
```
    sudo npm i -g mocha
```

- Após possuir o mocha instalado basta executar o seguinte comando:
```
    npm run test
```
   
## Coverage
Para verificar a cobertura de código feito pelos testes de unidade, foi utilizado uma ferramenta chamada [Istanbul](https://github.com/gotwarlost/istanbul).
Essa ferramenta pode ser instalada globalmente através do comando:

- Windows
```
    npm i -g istanbul
```
- Linux ou OS X
```
    sudo npm i -g istanbul
```

Após instalada para utiliza-la basta executar o seguinte comando:
```
    npm run cover
```
   
   
## Considerações importantes   

 - Não utilizei nenhum banco de dados pois as consultas que eram necessários poderiam ser facilmente feitas, manipulando os objetos literais
 gerados pela leitura dos arquivos __.JSON__;
 
 - O front-end da aplicação foi escrito utilizando VanillaJS (Javascript puro), pois a importação de alguma lib
 ou frameworks como JQuery, AngularJS, VueJS ou qualquer outro não possui uma justificativa, já que isso iria aumentar drasticamente o tempo de renderização da página, pelo fato
 da adição de uma quantidade de código supérfluo à aplicação.
 
 - Para obter 100% de cobertura de código eu necessitei fazer uma alteração no arquivo __locales.json__, alteração essa que não mudou sua estrutura, essa alteração foi a adição de uma localização
  que não possui previsão, isso foi feito para testar um cenário onde é encontrado a localição, mas não há 
  previsão disponível;
   
    
