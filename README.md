<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/Q9lCAMF.png" alt="Climatempo" width="300px"/>
  </a>
</p>

___


## Pastas

Na pasta "apict" está a API em Node(Express).<br/>
Na pasta "ctfront" está o front-end em VueJS

Em cada pasta contém um arquivo README.md explicando como configurar cada projeto.

## Detalhes API

Foi feita uma API em Node utilizando Express para realizar a busca de localidades e climas fazendo a consulta de dados em arquivos JSON.
<br/>
Para essa api, temos as seguintes rotas:

```
[GET] /locale/find/{locale}
Params:
    - locale: string (Busca a ser realizada para achar localidades)
Return:
    - array (array de objetos das localidades encontradas)
```

```
[GET] /weather/{locale-id}
Params:
    - locale-id: int (ID da localização a ser buscada)
Return:
    - array (array de objetos das temperaturas da localidade solicitada)
```

Fiz 2 testes unitários simples para checar se as rotas estão funcionando.
Informações de execução estão no arquivo README.md do projeto.


## Detalhes do Front-end

Foi feito um app utilizando Vue + Vuex para gerenciamento dos dados.
<br/>
Foi feita uma tela com uma busca interativa das localidades, e ao selecionar, é mostrado o resultado do clima daquela cidade retornado da consulta à API.

## Maiores informações

Email: carlosmeloads@gmail.com