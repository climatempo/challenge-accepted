<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/Q9lCAMF.png" alt="Climatempo" width="300px"/>
  </a>
</p>

___


## Processo de recrutamento

Olá desenvolvedor, pronto para participar do nosso
processo de recrutamento para vaga de Full-stack (CLT)?


### Tecnologia utilizada

- HTML
- CSS
- Javascript
- NodeJS
- Express

### O Desafio

Um usuário quer saber como vai ficar o 
tempo para os próximos dias em Osasco e São Paulo utilizando
seu smartphone. 

### O que foi feito
 
 - Uma página responsiva para mobile (Qualquer resolução);
 - Um campo para buscar localidades;
 - Um card para cada dia de previsão de chuva, temperatura e o texto para a localidade buscada;
 - Uma API com endpoints para buscar localidades e previsão fazendo leitura dos JSONs no diretório base;
 - Testes (funcionais).
 
Exemplo:

<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/x3z4tYM.png" alt="Climatempo" width="400px"/>
  </a>
</p>
 
### Dados

A API deve fazer a leitura dos dados dos JSONs no diretório base.
Mas para isso não foi necessaria uma função e sim uma abstração("readFileLocales" e "readFileWeather") para fazer a captura dos arquivos sem precisar passar parâmetros, pois são sempre os mesmos arquivos que serião lidos. Assim essas abstrações são chamadas dentro da minha Rota POST, para busca dos dados.

 
### Resultado

A aplicação, apresentou um bom desempenho, os códigos ficaram enxutos, exceto a montagem dinâmica da tela a função searchResult() localizada no arquivo search.js. Conforme o objeto devolvido, ela analisa a quantidade de chaves e dinamicamente estrutura o html em javascript.

### Como executar a aplicação

Baixe o diretório do desafio, acesse a pasta raiz do projeto pelo terminal.
Execute o comando "npm run dev" para iniciar o servidor.
Depois abra o navegador e acesse "localhost:3000" que foi a porta configurada para a aplicação.
Agora é só testar.
