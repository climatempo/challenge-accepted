# Teste Climatempo

Olá!

O projeto foi dividido em duas partes:

  - API
  -- Nodejs e restify
  - App (front-end)
  -- Meteor

# Afinal, o que eu fiz?

Busquei alguma forma diferente e simples para fazer este teste. Pensei em fazê-lo com React ou Vue.js, mas durante uma breve pesquisa decidi usar o [Meteor](https://www.meteor.com/) que ja tem o React nativo. É uma platafoma bacana para este contexto, que me permitiu prototipar a single-page muito rápido. E para o layout utilizei um template da [Html5up](https://html5up.net/), sem novidades.

Para a API não pensei muito e escolhi o Node combinado com o Restify.

O Meteor utiliza do conceito de progamação reativa, que nos permite criar um app escalável e com um tempo de execução lindo, e claro, com poucas linhas. Ele possui integração nativa com o Mongodb, acredito que neste caso eliminaria a necessidade de uma api. Mas como foi solicitado, busquei os dados da API.

#### Como funciona o meu projeto:

Primeiro o componente Select é alimentado pela API com a lista de locais, assim que o mesmo é renderizado.

Na primeira vez que a página é carregada, ela busca a previsão do tempo para todos os locais. Como são apenas duas localidades fiz desse jeito, caso contrário, afim de não impactar a performance do app, poderia usar o serviço de localizaçao do browser por exemplo e ja entregar os dados de acordo com a localização do usuário.

# Como executar o projeto
### Requisitos
- Node js v4+
- Meteor
- Npm

### Instalando o meteor
- Basta seguir a instalação de acordo com o seu OS através deste [link](https://www.meteor.com/install)

### Como rodar o projeto
##### Depois de instalar o Node e o Meteor:

## Api
Navegue até a pasta api e execute o comando
```sh
$ npm install
```
Quando acabar de baixar as dependências execute o seguinte
```sh
$ node start.js
```
a API  ja está rodando na porta 5000, mas ainda precisamos subir o meteor

## Meteor
Navege até a pasta *app* e execute os seguintes comandos:
```sh
$ meteor npm install --save moment
$ npm install --save babel-runtime
$ meteor add http && meteor add fortawesome:fontawesome && meteor add session && meteor add mizzao:bootstrap-3    
```

```sh
$ meteor
```
As dependências serão baixadas e o app irá rodar no na porta 3000.

Agora é só acessar a url http://localhost:3000 :)
