# Challenge Accepted - Gabriel Veloso

## Stack utilizada

O projeto foi montado em um workspace do Nx, tomei essa decisão pois precisava de um monorepo (contendo tanto a API e o front-end) e o Nx atende exatamente a stack que estava planejando em utilizar.

- Workspace/Monorepo: Nx: [Site](https://nx.dev/) / [Repo](https://github.com/nrwl/nx)
- Front-end: Angular 7: [Site](https://angular.io/) / [Repo](https://github.com/angular/angular)
- Back-end: NestJS: [Site](https://nestjs.com/) / [Repo](https://github.com/nestjs/nest)
- Tests: Jest: [Site](https://jestjs.io/) / [Repo](https://github.com/facebook/jest)
- E2E: Cypress: [Site](https://www.cypress.io/) / [Repo](https://github.com/cypress-io/cypress)

## O que foi feito

### Back-end

Aplicação NestJS contendo duas rotas:

    /locales/filter/:text

Filtra as localidades por nome, usando o slug para limpar o texto recebido e comparar de forma case-insensitive

    /weather/locale/:localeId
Recebe os dados climáticos de uma localidade (passando seu id)

#### Como executar

Para iniciar a aplicação back-end é necessário ter clonado o repositório e executar:

    npm ci

Isso instalará as dependências necessárias para o projeto, após instaladas, execute:

    npm run start api

Este comando iniciará a aplicação, por padrão na porta `3000`, mas é possível parametrizar usando a variável de ambiente `PORT`

Após inicializada, você poderá acessar `/api`, para ter acesso ao Swagger e poderá fazer requisições teste por ele.

    http://localhost:3000/api

### Front-end

Aplicação SPA Angular 7, utilizando [Angular Material](https://material.angular.io/) e [Bootstrap](https://getbootstrap.com.br/). Possui 5 componentes:

#### AppComponent
Faz o bootstrap da aplicação, define a estrutura do grid, e adiciona o `WeatherListComponent`
    
#### HeaderComponent
Apenas um *presentational component*, com o layout do cabeçalho do app

#### WeatherListComponent
Possui um `SearchBoxComponent`. Havendo o usuário selecionado uma localidade, possui também uma lista de `WeatherCardComponent`

#### SearchBoxComponent
Um input com autocomplete que permite ao usuário selecionar uma cidade

#### WeatherCardComponent
Um card com os dados climáticos (*presentational component*)

---
A aplicação também possui um pequeno serviço para realizar as chamadas XHR `ApiService`. 

Grande parte da aplicação utiliza-se de `Observables` e seus `operators` para sua lógica assíncrona.

#### Como executar 

Com as depedências já instaladas, basta executar:

    npm run start webapp

A URL da qual a aplicação utiliza para as chamadas ao back-end pode ser encontrada em `apps/webapp/src/environments/environment.ts`, por padrão ela se conecta à http://localhost:3000, que é a URL padrão do back-end.

Portanto, com o back-end e front-end iniciados, é possível acessar http://localhost:4200 para verificar a aplicação funcionando.

### Testes

Os testes unitários foram escritos tanto para o front-end quanto para o back-end, utilizando o framework Jest.

Para executar os testes do front-end:

    npm run test webapp

E os do back-end podem ser executados com:

    npm run test api

### E2E

O Cypress é um framework de testes E2E, um dos motivos dos quais a instalação das depedências possa ter demorado em sua máquina é o download do Cypress (caso ele não esteja em cache).

Ele vem ganhando muita popularidade pois sua API é de fácil uso e bem completa.

Como a aplicação é pequena, toda lógica de testes E2E está no arquivo `apps/webapp-e2e/src/integration/app.spec.ts`.

#### Como executar

Para iniciar o E2E da aplicação, basta executar:

    npm run e2e webapp-e2e -- --watch

Isso iniciará o Cypress em modo watch. Após iniciado, você verá um botão `Run all specs`, o que fará com que os testes iniciem no browser. Você poderá acompanhar os testes e os resultados nessa janela.

É importante salientar que a API não precisa estar executando para os testes E2E, uma vez que toda interação com o back-end pode ser mockada dentro do próprio Cypress. 

