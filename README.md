# Introdução

Desenvolvido por: **Murilo Esteca Arelhano - UFMS - FACOM**

## Processo de recrutamento

Olá desenvolvedor, pronto para participar do nosso processo de recrutamento para vaga de Full-stack?

**SIM**

## Sobre o App

Aplicativo single page construído com ReactJs, a aplicação consome os dados do de uma API Graphql construída com Nestjs. Na aplicação encontra-se uma pagina inicial que mostra as informações e uma localidade padrão (São Paulo). No topo encontra-se uma barra de pesquisa que retorna o nome das localidades ao enquanto digita, as cidades são filtradas no front-end para economizar requisições a API. No menu ainda existe um botão descrito "menu" que serve para mudar as preferencias de usuário sobre as unidades de medidas que a API retorna.

### O que foi feito

Primeiro foi construído uma API em GraphQL com NestJs para prover os dados base que foram deixar nos arquivos do projeto, utilizando a estrutura e a padronização do NestJs, depois foi implementado os módulos `weather` e `locale` para retornar o clima completo se um local e os locais para pesquisa das cidades, os métodos estão comentados e os testes até o instante momento estão sendo criados. Em seguida, criei um mockup das telas com Figma para ver o design que e imaginar a responsividade, escolhi o React pela facilidade da implementação e dos recursos de reatividade que podem trazer mais dinamicidade ao site, utilizando a lib ChakraUI para agilizar e padronizar o desenvolvimento da interface, dentro do projeto foram usadas features como estados, ContextAPI, roteamento com react-router e consumo da API através do Apollo que salva os resultados em cache em memória.

**Design no figma:** https://www.figma.com/file/dNSYEupliIMeqriw43lu9T/Clima-Tmepo-Challanger?node-id=0%3A1
**As tarefas que realizei estão disponíveis no trello:** https://trello.com/b/bN0wnBXs/clima-tempo-challenge

### Considerações

As escolhas feitas na implementação da aplicação levam em consideração que não conheço a estrutura do clima tempo. Mas em um cenário mais detalhado escolheria melhor o uso das tecnologias.

### Tecnologias usadas

**Back-end**

* NestJs e bibliotecas do NestJs
* API com GraphQL

**Front-end**

* ReactJs
* ChakraUI (semelhante a MaterialUI)
* React Router
* Apollo Client

# Como iniciar a aplicação

### Requisitos

* Docker e Docker Compose
* NodeJs (caso queira executar fora do container)
  
## Instruções com Docker

Primeiro faço o clone do projeto e abra na pasta raiz do projeto, em seguida abra o terminal na pasta raiz e execute o comando do docker compose:

> docker-compose up -d

Durante o processo, será realizado o build das imagens do backend e do frontend partindo dos arquivos `Dockerfile` que estão presentes na raiz de ambos os projetos. Após o build o docker compose fica responsável de subir os containers. Verifique se o serviço está rodando pelo CLI do docker ou alguma interface gráfica de sua escolha. Caso esteja no linux, é possível que precisa acessar o host com o IP do container.

> docker ps

Caso os containers estejam rodando normalmente é possível acessar o `front-end` na URL `http://localhost:3000`. Em caso de falha do container da API será exibido um erro de problema na conexão com o servidor na pagina inicial.

## Instruções sem Docker

Caso queira executar as aplicações separadamente, primeiro vá até a pasta `back-end` e execute no terminal os comandos:

> \> npm install
>
> \> npm run start:dev

Para executar a API com NestJs, lembrando que nesse caso precisamos o NodeJs devidamente instalado. Em seguida abra o diretório `front-end` e execute os comandos:

> \> npm install
>
> \> npm run start

Para iniciar o servidor com ReactJs. O serviço do React está rodando na porta `3000` no localhost e o servidor NestJs na porta `3001`. Para acessar o graphql playground acesse a URL `http://localhost:3001/graphql`. 
