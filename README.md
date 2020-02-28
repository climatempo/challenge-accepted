# challenge accepted

> O desafio foi feito utilizando nuxt.js, uma framework que utiliza vue.js e node.js para criar os projetos, os códigos relacionados a api estão dentro da pasta server, juntamente com os testes do mesmo.

## Configurações iniciais

#### - Crie o arquivo .env na raiz do projeto se baseando no .env.example

#### - Defina o parametro BASE_URL baseado no dominio utilizado

O base_url normalmente é http://localhost:3000, pois o nuxt executa o servidor nessa porta

## Executando o projeto

``` bash
# Instalando as dependencias
$ yarn install

# Iniciando o servidor de desenvolvimento em localhost:3000
$ yarn dev

# Compilando para produção e executando o servidor do mesmo
$ yarn build
$ yarn start
```

## Executando os testes

```bash
# Instalando o mocha globalmente na máquina
$ npm i -g mocha

# Instalando as dependencias
$ yarn install

# Executando a rotina de testes
$ yarn test-api
```