<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/Q9lCAMF.png" alt="Climatempo" width="300px"/>
  </a>
</p>

___


## Backend

Olá o backend foi feito em node utilizando a versão 8.0.0. Para rodar basta entrar na pasta do projeto, instalar as dependencias
e utilizar o comando 'npm run dev'.
Obs: Eu tive que subir esse backend no heroku pois como eu fiz um app e utilizei o genymotion como emmulador de android ele tinha uma certa
dificuldade em entender localhost, tinha que passar um número de IP para que ele conseguisse acessar. Porém para cada emualdor é um IP diferente,
como eu não sei qual vocês usam ai, decidi subir o backend no heroku, ele atende os endpoints:
- https://teste-clima-tempo.herokuapp.com/api/locales
- https://teste-clima-tempo.herokuapp.com/api/weathers/:id

### Frontend

Fiz o frontend em React Native, pois é o foco da vaga. Entrar na pasta climaTempo e instalar as dependências utilizando o comando 'yarn'.
O front foi feito com a versão 10.6.0. Outra observação é que para rodar o o projeto em um emulador como genymotion é necessário ir até o arquivo 
android/local.properties e onde está 'sdk.dir = C://Users//Victor Palca//AppData//Local//Android//Sdk', trocar pelo caminho do SDK da máquina
que estiver com o emulados.
Feito isso basta iniciar o projeto com o comando 'react-native run-android'




Qualquer dúvida fico a disposiçãp.
