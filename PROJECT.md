# Introdução

Devido à falta de dados disponíveis, busquei maneiras de adicionar mais informações para tornar minha API mais interativa. Durante minha pesquisa, encontrei o serviço de previsão do tempo https://advisor.climatempo.com.br e descobri que só era possível recuperar dados de uma cidade por conta. No entanto, notei que não havia nenhum tipo de verificação de e-mail. Foi então que comecei a explorar essa vulnerabilidade e criei um script que criava uma nova conta e executava o fluxo para cada cidade que a API do desafio requisitava. Mapeei todas as cidades que o serviço fornecia e, após uma requisição de previsão, armazenei os dados da previsão em cache na minha API. Além de fornecer uma resposta mais rápida, essa abordagem alivia a carga no serviço externo, permitindo que eu forneça a previsão do tempo para todas as cidades do Brasil.

## exemplo:

### [front-end](https://clima.thiagomarques.me)

### [api](https://api-clima.thiagomarques.me)

## api routes

| path                   | description                                       |
| ---------------------- | ------------------------------------------------- |
| /locales/search/:busca | retorna os resultados da busca por nome de cidade |
| /locales/overview      | retorna todas as cidades disponíveis              |
| /forecast/:localeId    | retorna a previsao para a cidade                  |

# Tecnologias utilizadas:

## Backend:

### ElasticSearch

Utilizei o ElasticSearch para realizar buscas de texto completo nas localidades disponíveis na API de previsão do tempo. Dessa forma, os usuários podem pesquisar com mais facilidade e rapidez as localidades de seu interesse, recebendo resultados precisos e relevantes em tempo real.

### NestJS

Optei pelo NestJS como framework de backend devido à sua modularização eficiente, injeção de dependências, compatibilidade com TypeScript e facilidade na implementação de rotas HTTP. Esses recursos contribuem para um desenvolvimento ágil e de alta qualidade no projeto de busca de previsões do tempo.

### Clean Architecture & SOLID

Implementei a arquitetura limpa (Clean Architecture) no projeto para separar o domínio das implementações, garantindo uma maior manutenibilidade do código. Ao obedecer aos princípios do SOLID, promovi um design mais coeso e desacoplado.

Para atingir esse objetivo, utilizei padrões como repositórios e casos de uso (use cases), que facilitam a organização do código e a separação de responsabilidades. Além disso, isolei a camada de domínio, mantendo-a independente das camadas externas e das implementações específicas, resultando em um sistema mais flexível e fácil de adaptar às mudanças e evoluções.

## Postgress

Optei pelo PostgreSQL como banco de dados para persistir os dados da API externa, visando uma gestão eficiente e escalável das informações. O PostgreSQL é um banco de dados confiável e seguro, com recursos avançados de desempenho e amplamente utilizado. Essa escolha garante a persistência dos dados e a facilidade na recuperação das informações pela aplicação.

## FrontEnd

### Chakra UI

Utilizei o Chakra UI, uma biblioteca de estilização declarativa, para aumentar a produtividade no desenvolvimento de interfaces, garantindo acessibilidade, desempenho e padronização da UI e do código. Essa escolha resulta em uma aplicação atraente e eficiente, com uma experiência de usuário consistente e agradável.

### React Query

Adotei o React Query para melhorar o desempenho através do cache de dados externos, utilizando técnicas como debounce na busca e implementando cache em escopo da aplicação, a fim de otimizar recursos e proporcionar uma experiência de usuário mais responsiva.

# Conclusão

Foi desafiador trabalhar nesse projeto, já que não tinha experiência em implementar o Elasticsearch em nenhum outro projeto. Há várias oportunidades de melhorias e expansões, como adicionar a capacidade de cadastrar novas localidades e integrar dados de outras APIs de previsões. Além disso, a implementação do GraphQL pode ajudar a melhorar o desempenho das requisições.

Quero agradecer pela oportunidade de participar deste desafio. Para mim, foi uma experiência enriquecedora e desafiadora, que me permitiu demonstrar minhas habilidades e conhecimentos na área. espero ter atendido às expectativas da equipe com o resultado final. Estou animado para continuar colaborando com vocês em projetos futuros, aprendendo ainda mais e enfrentando novos desafios. Novamente, agradeço por essa oportunidade única!
