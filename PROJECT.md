<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/Q9lCAMF.png" alt="Climatempo" width="300px"/>
  </a>
</p>
___

## Execução do projeto

Requisitos de funcionamento:
- Servidor Web, de preferencia Apache
- PHP instalado (versão recomendada 5.6.x)

Coloque a pasta do projeto no diretório do servidor apache.

___

## Processo de solução

1. Arquivo PHP inicial

Primeiramente criei um arquivo PHP (index.php) para satisfazer o processo de submissão dos dados (nome da cidade) e para visualização
das informações para o usuário.

2. Arquivo JavaScript

Esse arquivo foi-se necessário para ser o meio de comunicação entre o arquivo PHP inicial e uma classe PHP. Este arquivo utiliza funções da biblioteca
Jquery.
Nesse arquivo utilizei a função $.ajax para pegar o valor do input de pesquisa para enviar para a classe PHP que retornará os dados da cidade pesquisada.
Quando dados retornados com sucesso, percorre todo o dado retornado e cria os cards de previsão do tempo para visualização do usuário.

3. Classe PHP

Para filtrar os dados enviados pelo arquivo JavaScript, criei uma classe em PHP. A classe consiste nas seguintes propriedades e métodos:

- nameCity: propriedade que guarda o nome da cidade enviado pelo input na página inicial

- codeCity: propriedade que guarda o id da cidade enviada pelo input na página inicial

- __verifyGET: método que verifica se existe a variável $_GET["act"], que quando filtrada e o valor é "search", chama o método doResearch

- doResearch: método que configura o valor da propriedade nameCity com o nome da cidade recebida pelo input.
Abre o arquivo (locales.json) e decodifica o arquivo. Com o arquivo decodificado e em formato array, verifica-se se o nome da cidade existe no arquivo locales.json.
se cidade existe -> configura a propriedade codeCity com o valor do código da cidade, chama método returnData.

- returnData: método que abre arquivo weather.json e o decodifica. Cria uma nova variável do tipo array que futuramente retornará os dados da 
previsão do tempo da cidade com o código da propriedade codeCity codificado em JSON.

4. Arquivo CSS

Esse arquivo foi-se necessário para a estilização do conteúdo da página de visualização de previsão do tempo.
