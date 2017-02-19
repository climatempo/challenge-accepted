# Sobre o projeto

A solução foi desenvolvida como se este fosse o início de um projeto que será continuado, que irá receber várias outras funcionalidades e regras de negócio a ser desenvolvido por uma equipe.

Segue alguns tópicos relevantes sobre o que foi feito:

## Persistência

No requisito foi solicitado somente a leitura de JSON em arquivo, mas como também é requisito a manutenabilidade e desempenho, foi observado os seguintes critérios:

### Desempenho

Em pouco tempo seria um problema o aumento no volume de dados de previsão (o site do Climatempo por exemplo tem milhares de cidades de vários países) o que comprometeria o desempenho. Exemplo: como fazer uma consulta agregando resultados em um JSON de 500Mb? 

### Manutenabilidade

Será definido novas regras de negócio que exigirá consultas de previsão mais elaboradas, por ex.: na página inicial carregar em destaque a cidade do usuário que está acessando o site (baseado no recurso de localização do dispositivo ou do IP), seria complicado implementar manualmente na aplicação consulta geoespacial, algo muito fácil de se fazer com o MongoDB. 

O MongoDB foi escolhido por que a informação tem um formato adequado para NoSQL, já está desnormalizada, por exemplo os dados de localidade dentro do JSON de previsões (dados de localidade muda com pouquíssima frequência), evitando a consulta de 2 tabelas no modelo relacional. 

Como descrito acima, é previsível que tenha lógica na consulta, ainda que a API pudesse acessar estas informações de outro serviço interno seria melhor persistir no banco de uma forma que facilite as consultas e evite dependências para garantir um bom desempenho.

## Separação Backend e Frontend

Foi criado 2 repositórios adicionais e configurados como sub módulo no git (git submodules), isso facilita o controle de versão, deploy, testes, integração contínua, e os membros da equipe pode trabalhar separado evitando conflitos no Git. 

Não exige muito aprendizado sobre este recurso do Git pois é possível baixar separadamente os projetos: 

- [climate-api](https://github.com/viniciusps2/climate-api);
- [climate-ui](https://github.com/viniciusps2/climate-ui).

## Cobertura de testes e Integração contínua

A cobertura de testes unitários de ambos os projetos está acima de 80%. Pode visualizada executando o comando **npm test** em ambos os projetos. Ou visualizando o relatório da integração contínua no Travis: 

- [climate-api](https://travis-ci.org/viniciusps2/climate-api) - [![Build Status](https://travis-ci.org/viniciusps2/climate-api.svg?branch=master)](https://travis-ci.org/viniciusps2/climate-api)


- [climate-ui](https://travis-ci.org/viniciusps2/climate-ui) - [![Build Status](https://travis-ci.org/viniciusps2/climate-ui.svg?branch=master)](https://travis-ci.org/viniciusps2/climate-ui)


## Implementação do Back-end

A API foi desenvolvida em NodeJS para garantir desempenho, por ser "Non-Blocking I/O", suportar muitas requisições concorrentes, rápido desenvolvimento, e ser confiável para muitas grandes empresas (Netflix, GoDaddy, LinkedIn, Paypal, Uber ...).

Foi utilizando o framework Koa p/ Web, por causa da simplicidade e do suporte fácil para Generators (nativo na versão atual do NodeJS LTS, para controle do fluxo assíncrono utilizando "yield" antes de uma Promise), o uso de Generators em produção ainda é mais seguro do que o Async/Await previsto para o ES7, ambos são uma alternativa menos verbosa do que o uso somente de Promise (com infinitos "then" encadeados, que comprometem a manutenabilidade do código).

Foi escolhido o Mongoose para fazer a interface com o MongoDB por causa da facilidade de validar e converter dados em Schemas para serem persistidos no banco. A implementação inclui um Wrapper da classe para utilizar ES6 + Generators sobre Promises. (módulo npm [async-class-co](https://www.npmjs.com/package/async-class-co))

No teste foi utilizado Mocha + Chai. Como lint de código foi adotado o Standard, sem ;. 

Ao inicializar a aplicação um script é executado para ler os arquivos JSON no diretório "base" e salvar os dados no MongoDB.

Para executar a aplicação em produção foi utilizado o **pm2** como gerenciador de processos, garantindo assim que a aplicação fique sempre no ar, mesmo em caso de uma falha crítica que quebre a aplicação a mesma é reiniciada no servidor. NodeJS é single thread, ou seja, utiliza somente um núcleo de CPU, e com o pm2 a aplicação é executada em cluster na máquina com o número de instâncias igual ao número CPU, melhorando o desempenho.

## Implementação do Front-end

Foi escolhido AngularJS 1.5 como framework no front-end para um projeto SPA, por causa da facilidade de implementação, testes, injeção de dependência, e facilidade para encontrar componentes ricos criados pela comunidade.

Como gerenciador de tarefas de desenvolvimento foi escolhido o Gulp. Para testes Karma + Jasmine + PhantomJS + Istambul p/ cobertura. Como lint de código foi adotado o Standard, sem ;. O Gulp minifica JS e CSS no processo de build para otimização do carregamento da página.

## Deploy

A aplicação pode ser facilmente instalada em qualquer ambiente com NodeJS. Para detalhes de como realizar o deploy no Heroku veja o arquivo DEPLOY.md

## Como executar

### Requisitos
- NodeJS
- MongoDB
- Gcc (no Linux), ou [windows-build-tools](https://github.com/nodejs/node-gyp#installation)

Abra cada a pasta de cada um dos projetos (climate-api e climate-ui) em uma tela no terminal, execute **npm start** em cada um deles, e abra o no browser o endereço <http://localhost:3000>

## Possíveis Melhorias

Segue algumas idéias para incrementar a aplicação, a ser discutida com a área de negócios sobre a relevância, tempo, e valor para o usuário final. São suposições levantadas durante o desenvolvimento que guiaram a escolha da arquitetura implementada.

- A API tem o papel de fazer consultas de previsão de tempo, baseado na localidade. Outras aplicações devem ter o papel de **workers** que coleta de tempos em tempos um grande volume de dados de outras fontes (ex.: centros de previsões meteorológicas), trata estes dados para um modelo de dados que facilite a leitura (como já está no JSON), e em seguida grava os dados no MongoDB, ou pública em uma fila (RabbitMQ, sem se preocupar com o volume de dados), e a API escuta a fila e salva no MongoDB de uma forma que não atrapalhe as consultas que estiverem ocorrendo no momento.

- Implementar consulta de proximidade de geo-localização baseada na localização do dispositivo ou IP;

- Salvar somente a previsão do dia atual e dos 10 dias seguidos, apagar os demais dias ao realizar a persistência (recurso "slice" do MongoDB). Os demais dias devem ser salvos em outro lugar para gerar relatórios do histórico, que tem um padrão de consulta diferente;

- Usar CDN para servir arquivos estáticos (css, js, fontes, e imagens);

- Usar HTTP2 para desempenho de carregamento;

- Implementar integração contínua p/ deploy automático;
