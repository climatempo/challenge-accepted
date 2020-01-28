# Agradecimento

Primeiramente, gostaria de agradecer a oportunidade de fazer esse desafio.

# Considerações

Para o desafio, considerei utilizar algumas bibliotecas, que cumprissem seu papel, de acordo com os requisitos do desafio. A principal, (Express)[http://expressjs.com/], para servir de framework, e o (Jest)[https://jestjs.io/] para testes.

Busquei resolver da forma mais simples possível, sem utilizar *TypeScript* ou *Flow*. Também, não fiz uso de **Promise**, por ser desnecessário, afinal, estamos trabalhando com base de dados em arquivo.

Pensei, inicialmente, em desenvolver um script *dockerfile*, mas como não há nada de extraordinário no desafio, desisti.

Foi desenvolvido uma API, com duas rotas:
- (Pesquisa de Cidades)[http://localhost:3000/api/locale?term=Osasco], onde precisa enviar um parâmetro do tipo query, com o nome "term", e o nome da cidade que deseja pesquisar. O retorno pode ser `404`, em caso de não ser localizada, ou `200`, contendo os dados solicitados.
- (Informações do Tempo)[http://localhost:3000/api/weather/3477], onde precisa enviar um parâmetro com o código da cidade, que foi retornado na URL anterior. Em caso de sucesso, retorna o status `200` contendo os dados, ou `404` caso não seja localizado.

Foi desenvolvido também, a interface, ambos usando o mesmo ambiente (Express), mas com rotas diferentes, simulando o ambiente que o desafio exigia. Utilizei (Bootstrap 4)[https://getbootstrap.com] e (jQuery)[http://jquery.com], para cumprir todos os requisitos do desafio, em termos de *layout* e funcionalidades.

No código temos algumas pastas, organizando e simulando o ambiente, e respeitando o padrão MVC:
- Models, onde estão localizados os modelos e regras de negócio.
- Views, onde estão localizados os *templates*.
- Controllers, onde estão localizados os controladores.
- Public, onde estão localizados os arquivos públicos.
- Routes, onde estão localizados as regras de rotas, contendo tanto as rotas da API, como as rotas HTTP.
- Base, onde estão localizadas a base de dados proposta no desafio, e que é consumida pelo nossos *models*.

# Instalação

## Requisitos

- (NodeJS)[https://nodejs.org/], é obrigatório.
- (Yarn)[https://yarnpkg.com/], não é necessário, apenas se preferir, em vez do **NPM**, que é instalado por padrão juntamente com o **NodeJS**. Caso prefira, nos comandos abaixo, troque `npm` por `yarn`.

## Instalação

No diretório raiz, execute o comando:

`npm install`

# Uso

## Ambiente de Desenvolvimento

Para o ambiente de desenvolvimento, desenvolvi os comandos abaixo, de acordo com o desejo:

### Testes

`npm test`

### Servidor de Desenvolvimento

`npm dev`

## Ambiente de Produção

`npm start`

# Considerações Finais

Mais uma vez, agradeço a oportunidade desse teste.

:)