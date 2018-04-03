# Processo seletivo Climatempo / Full Stack Developer
## Willian Oki <willian.oki@gmail.com>

# Overview
O desenvolvimento da aplicação para consumo de API's de serviço de clima, conforme orientação
do assignment consistiu de dois sistemas:
1. Serviço de backend para exposição das API's de clima.
2. Webapp para consumo e apresentação das API's acima.

# Serviço de backend, API
O serviço foi desenvolvido em Node.js e expõe as API's de clima solicitadas em estilo REST. Os recursos
são:
1. Locales (locations): GET /api/location - retorna os locations presentes em locales.json.
2. Weather: GET /api/weather - retorna os dados de clima presentes em weather.json.
3. Weather específico de location - GET /api/weather/:location - retorna dados de clima específicos de um location.

# Webapp
A aplicação web foi desenvolvida em Angular 4 utilizando a identidade visual sugerida no
assignment. Trata-se de um aplicação SPA (single page application) que pode apresentar um dos seguintes
conteúdos, conforme o critério de busca:
1. Inicial / Busca vazia - Informa o usuário a forma de uso da aplicação.
2. Busca de location existente na base, conforme resposta do backend - Apresenta os dados de clima
recebidos para a location.
3. Busca de location inexistente na base, conforme resposta do backend - Apresenta conteúdo
sugerindo nova busca.

# Dependências
## Backend
1. Node.js - runtime para o serviço REST.
2. Express.js - Web framework para a implementação do serviço.
3. Cors-js - gerenciamento de cross-origin.
4. jsonpath - query dos arquivos de dados JSON contendo locations e clima.

## Frontend
1. Angular 4 e Angular CLI.
2. Daemonite Material - material design para o Bootstrap 4.
3. Bootstrap 4.

## Versões mínimas para Node, Npm e Angular
Conforme requisitos mínimos para o Angular 4:
1. Node.js >= 6.9.x.
2. Npm >= 3.x.x.

# Instruções para execução em ambiente local
1. Instalar Node.js e Npm conforme instruções para seu SO em <https://nodejs.org>.
2. Instalar o nodemon (utlizado na execução concomitante do serviço de backend):
   `npm i -g nodemon`.
3. Ir para o diretório raiz da aplicação e executar em console:
   `npm install` (instala todas as dependências conforme package.json) e
   `npm start` (inicia o backend na porta 4199 e o frontend em 4200).

# Execução dos testes end-to-end (E2E)
1. Ir para o diretório raiz da aplicação e executar em console:
   `npm start` (inicia o backend na porta 4199 e o frontend em 4200).
2. Ir para o diretório raiz da aplicação e executar em outra console:
   `npm run e2e`

# Notas:
Tanto para execução local quanto dos testes E2E é necessário conectividade com a Internet, visto que há
recursos no frontend sendo supridos por CDN.
