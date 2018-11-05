### Como foi desenvolvido

- O projeto foi desenvolvido com node js e utilizando o framework express mais o mocha para desenvolvimento de testes;
- A busca por localidades está separado por rotas, cada uma representando seus respectivos dados que estão armazenados no json;


### Passos para a Execução do Projeto

- Certificar de que possua o node js instalado na máquina;
- Com o node instalado, abra o cmd e navegue até a pasta do projeto;
- Na pasta do projeto, execute o comando: node app.js;
- A página estará rodando na porta 3000;
- Para buscar a previsão de uma cidade, basta digitar na url: /osasco ou /sp;


### Execução dos Testes

- Certificar de que possua o mocha instalado na máquina;
- Caso não possua, apenas dar o comando: npm install -g mocha;
- Na pasta do projeto e com o mocha instalado, execute o seguinte comando: mocha;
