## Pré Requisitos

- NodeJS (v12+ recomendada) com NPM
- ElasticSearch funcionando na porta 9200 (`http://localhost:9200`)

## Executando o projeto

Para que o projeto funcione é necessário executar a API e o App.

## Executando a API

Para executar a API, primeiro vá até o diretório correspondente (/api) e execute o seguinte comando em um terminal (cmd, gitbash, etc.) para instalar as dependências:

    npm install

Em seguida, execute o comando para importar as bases de dados json para o mongoDB e ElasticSearch:

    npm run dbset

Uma vez que as dependências tenham sido instaladas e as bases de dados importadas, sempre que desejar executar a API, utilize o comando:

    npm run start

A API funciona, por padrão, na porta **8080** (`http://localhost:8080`).

## Executando o App

Para executar o App, vá até o diretório correspondente (/app) e execute o seguinte comando para instalar as dependências:

    npm install

Agora, para iniciá-lo, utilize o comando:

    npm run start

\*Certifique-se de que a API está funcionando corretamente na porta 8080 para que o aplicativo opere adequadamente.

O ambiente de desenvolvimento será inicializado e o aplicativo poderá ser acessado na porta 3000 (`http://localhost:3000`).

Caso prefira, é possível gerar e executar uma versão otimizada do aplicativo para produção.

Para gerar a versão, com o aplicativo inoperante, execute:

    npm run build

A versão otimizada é gerada para ser implantada diretamente no ambiente de produção. Mas, é possível obter uma prévia, em ambiente de desenvolvimento, utilizando o _serve_.

Caso não tenha o _serve_ instalado, é necessário instalá-lo globalmente:

    npm install -g serve

Após a instalação ser concluída, execute:

    serve -s build

O aplicativo será disponibilizado, em sua versão otimizada, na porta 3000 (`http://localhost:3000`).

---

# O Projeto

O projeto é composto por uma API e um App, conforme proposto pelo desafio.

## A API

A API foi desenvolvida utilizando o Express, framework web que funciona através do NodeJS, no padrão arquitetural REST. Ela possui 2 endpoints que fornecem dados de localidades e previsões climáticas para as mesmas.

A estrutura de diretórios e arquivos, se assemelha, propositalmente, a convenções utilizadas por outros frameworks amplamente conhecidos, como o Asp.Net Core e o SpringBoot.

Para persistência dos dados, foi utilizado o MongoDB adjunto do ElasticSearch, através das bibliotecas mongoose e mongoosastic.

### Por que NodeJS?

Porque é acessível e prático. Requer pouquíssima configuração e lhe permite começar o desenvolvimento rapidamente. Também possui inúmeras bibliotecas, para os mais diversos fins, que podem ser facilmente instaladas e configuradas. Sem falar do enorme conteúdo disponível gratuitamente na web e da força da comunidade.

### Por que Express?

Para agilizar o desenvolvimento. O Express é simplista e requer pouquíssima configuração inicial. Com apenas 1 arquivo e um par de dezenas de linhas, é possível disponibilizar uma aplicação. A API proposta tem um contexto muito limitado, o que minimiza os eventuais problemas causados pela flexibilidade estrutural que o Express oferece. Em resumo, o prazo e o contexto limitado me levou a escolhê-lo.

### Por que REST?

Porque é amplamente conhecido e utilizado no mercado. GraphQL talvez seria interessante caso o projeto envolvesse uma troca de dados muito grande ou contasse com dados mais estruturados. Tomando como base o pensamento moderno de que o software deve ser desenvolvido utilizando-se de táticas para facilitar a manutenção posterior, estruturas conhecidas funcionam muito melhor.

### Por que MongoDB?

Porque é normalmente utilizado na stack junto com o NodeJS. Assim, desenvolvedores NodeJS terão facilidade em realizar manutenções posteriores. O Mongo é ágil e posso armazenar nossa base json sem precisar tratá-la para disponibilizá-la em uma base relacional.

### Sobre os Endpoints

Dois endpoints GET, método padrão para obtenção de recursos. As buscas são filtradas através de parâmetros query, enquanto que parâmetros necessários (como o id) são passados na url.

### Pontos adicionais

- Nem todos os campos de locale foram definidos para a indexação no ElasticSearch, e sim, apenas aqueles que são necessários para o autocomplete no front-end. Assim conseguimos otimizar ainda mais o processo de busca.

- Uma vez que o ElasticSearch possui todos os dados necessários para o autocomplete, não preciso ir ao Mongo para obter o documento completo. Dessa forma os dados são servidos muito mais rapidamente.

- Já que weather pertence a um locale, o endpoint para obtenção das previsões fica ‘dentro’ de locale. Ou seja, weather não tem muita utilidade sem o locale para o identificar.

- Os demais padrões de arquivos, diretório e código foram definidos pensando com base na minha experiência pessoal e na convenção utilizada no desenvolvimento web.

## O App

O App é um SPA desenvolvido utilizando o ReactJS e algumas bibliotecas que o compõem. Ele possui uma única rota e seu layout é amplamente inspirado no layout do site do [Climatempo](https://www.climatempo.com.br/). A proposta é que o layout seja visualmente interessante ao usuário, sem adicionar complexidade em sua experiência.

### Por que ReactJS?

Confesso que estou muito mais habituado ao Vue e ao Angular. Voltar ao React depois de um tempo me proporcionou uma surpresa ao perceber o quanto o ‘framework’ evoluiu nos últimos anos. Ele proporciona a reutilização de código e possui um market share muito interessante. Também possui diversas bibliotecas que auxiliam no desenvolvimento ágil. Além de contar com soluções próprias para recursos utilizados pelos desenvolvedores que não trabalham com frameworks, o que facilita a imersão dos mesmos neste ciclo.

### O layout é Ctrl+C, Ctrl+V do site do Climatempo (Grrr…)

Padrões visuais são importantes no mundo web, muito mais do que imaginamos. Manter uma padronização em produtos digitais diferentes de uma mesma empresa é uma tática excelente para aumentar a aceitação de um novo produto, além de trazer claros benefícios à UX, uma vez que o usuário já está habituado com produtos semelhantes e, portanto, sua imersão no novo produto é altamente facilitada. Pessoalmente, todo o layout e os elementos do site do Climatempo me pareceram muito harmoniosos e permitiam que a informação fosse exibida de forma clara e bonita. _Perfect match!_

### Pontos adicionais

- Aqui também procurei me aproximar das estruturas utilizadas pelos demais frameworks front-end. A estrutura de diretórios e termos dos arquivos vai lembrar muito o Angular. Lamento não ter tido tempo hábil de utilizar o typescript aqui, mas fui vencido pelo prazo, uma vez que não estou tão habituado ao React e a re-imersão me custou um tempo.
