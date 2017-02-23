# CLIMATEMPO DEMO APP

Link para demonstração: https://climatempo-demo.herokuapp.com/

## Tecnologias utilizadas

* NodeJS - Server-side
* ReactJS - Client-side

### Back-end

Foi utilizado `Express` para estruturação das rotas da REST API e do server em geral.

Testes foram aplicados utilizando o framework `mocha` juntamente com as bibliotecas `chai` e `chai-http`.

### Front-end

Juntamento com `React`, foi utilizado `Redux` para estruturação do fluxo de dados do aplicativo, atualizando o estado da página sempre que uma nova pesquisa bem sucedida for executada.

Para o visual da página, foi utilizado `Bootstrap` e CSS disponível em `css/style.css` para os retoques necessários.

## Rodando a aplicação

Certifique-se de primeiro dar `npm install` para obter todas bibliotecas necessárias.

Após isso, basta utilizar `npm run dev` e após webpack compilar todos os arquivos necessários, uma mensagem de `Listening on port 3000...` deve aparecer, e então é só abrir o browser na porta 3000 do localhost.