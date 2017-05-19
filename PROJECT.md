# ESTRUTURA DO PROJETO

O projeto challenge-accepted possui em sua raiz 6 pastas e 2 arquivos. 

As pastas são: 

-app: arquivos de codificação do sistema. Nesta pasta se encontra acesso a banco de dados (nesse caso acesso aos JSONs), as rotas do sistema e os arquivos de visualização HTML; 

-base: arquivos JSONs que são o banco de dados para o sistema;

-config: pasta que contém o arquivo com a configuração das dependências do sistema; 
-node_modules: aqui estão os plugins e ferramentas externas do sistema que foram baixados e instalados no projeto;

-public: arquivos de JS, CSS e imagens publicas que são utilizadas pelo sistema; 
-test: pasta com arquivos utilizados para teste de integração.


Os dois arquivos da raiz são:
-app.js: arquivo de inicialização do projeto. Ele faz o carregamento do módulo de configuração da pasta config e após isso sobe o servidor em localhost, na porta 3000; 
-package.json: este arquivo contém os detalhes sobre o projeto tal como: nome, versão, descrição, autor e etc.



# EXECUTANDO O PROJETO

Para executar o projeto é necessário ter instalado na máquina o NodeJS, preferencialmente na versão 6.9.4, com o Node instalado basta entrar na pasta challenge-accepted onde se encontra o arquivo app.js, pelo terminal, e digitar o seguinte comando:

						nodemon app 
 
O módulo do nodemon já está instalado no projeto, e se encontra na pasta node_modules. A partir disso, o NodeJS estará rodando na máquina no endereço http://localhost:3000.



# DETALHES DO FUNCIONAMENTO

Após entrar no sistema, o usuário deve digitar no campo de pesquisa o nome de uma cidade. A partir daí, o sistema fará o envio do nome digitado para a rota /search onde o servidor NodeJS receberá essa requisição HTTP/GET e verificará no banco se existe previsão de clima para aquela cidade. Independente do resultado da busca, o sistema irá retornar alguma informação para o usuário: caso tenha encontrado, retornará a listagem de climas por data, e em caso negativo retornará com alguma mensagem, relatando problema para buscar a informação. 



# TECNOLOGIAS E FRAMEWORKS

-NodeJS versão 6.9.4; 
-Express; 
-Express-load; 
-Nodemon; 
-Body-parser; 
-EJS; 
-Moment; 
-Mocha 
-CSS3; 
-Bootstrap 3.3.7 
-HTML5; 
