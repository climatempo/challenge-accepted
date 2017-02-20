<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/Q9lCAMF.png" alt="Climatempo" width="300px"/>
  </a>
</p>

___


## Para rodar o projeto
Basta instalar todas as dependencias dando `npm i` na pasta principal e também na
pasta `public` e depois rodar o comando `npm run start` na pasta principal e `npm run ionic:serve`
na pasta `public`. É necessário que você tenha o Ionic instalado globalmente na sua máquina. 

## Para rodar os testes

Simplesmente rode `npm run test` na pasta principal, você também terá um report da cobertura dos testes.

## Como funciona o projeto

Dentro da pasta `lib` existe um parser, que recebe os dados de `weather`
e um locale que foi pesquisado pelo cliente. Ele usa essas duas informações para devolver o `weather` correspondende ao local procurado
