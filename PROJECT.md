<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/Q9lCAMF.png" alt="Climatempo" width="300px"/>
  </a>
</p>

___


## Challenge done!

Este é o README do meu teste. Para melhor organização, separei o projeto da seguinte maneira:

- [API](api): Back-end;
- [WEB](web): Front-end;

Ambos possuem README detalhado do processo de desenvolvimento, instalação e como rodar.

Para facilitar, dockerizei o projeto. Dessa maneira, para subir toda a _stack_ basta rodar o seguinte comando na raíz do projeto:

> docker-compose up -d

Serão criados os seguintes containers:
- `challengeaccepted_web_1` para o front (servido em [localhost:8080](http://localhost:8080))
- `challengeaccepted_api_1` para o back (servido em [localhost:8000](http://localhost:8000))

PS: necessário o [docker-compose](https://docs.docker.com/compose/) instalado.