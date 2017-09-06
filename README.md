<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/Q9lCAMF.png" alt="Climatempo" width="300px"/>
  </a>
</p>

___


## Ambiente utilizado

Apache 2.4.23 com PHP 5.6.25.

### Framework e código

- Utilizei Slim 2, acho pequeno e muito útil para rotas, com algumas modificações e adições básicas que escrevi.
- O HTACCESS foi escrito para não haver qualquer problema em uso de quaisquer subdiretórios, mas caso a index não seja encontrada o RewriteBase deve ser definido.

### Etc

- Meu diferencial como desenvolvedor back-end é ter grande conhecimento e experiência com bancos de dados, mas devido à natureza da leitura dos dados isso não pôde ficar em evidência, então acho importante mencionar.
- A aplicação é pequena, usa JSON, e por isso não há muito espaço para otimizações ou índices. Mas procurei mostrar esse cuidado que costumo ter ao fazer a escolha de só ler o weather caso o locale seja encontrado, já que o weather é bem maior.

Teste no celular:
https://youtu.be/IEa22gtjHUA