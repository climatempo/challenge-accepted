## Deploy no Heroku

Crie uma conta no Heroku e no mLab. Crie um banco gratuito e um usuário. Copie a url do MongoDB.

Observação: É importante executar na sequência demonstrada abaixo, primeiro o Climate-API (Back-end) e em seguida Climate-UI (Front-end) para definir corretamente as variáveis de ambiente.

### Deploy Climate-API

Abra no terminal a pasta do repositório **climate-api** e execute os comandos:

```sh
export MONGODB_HEROKU="coloque aqui a URL do MongoDB no mLab"

heroku login

heroku apps:create
export CLIMATE_API_HEROKU=$(heroku info -s | grep web_url | cut -d= -f2)

heroku config:set CLIMATE_MONGODB=$MONGODB_HEROKU
git push heroku master
```

### Deploy Climate-UI

Abra no terminal a pasta do repositório **climate-ui** e execute os comandos:

```sh
heroku apps:create

heroku config:set CLIMATE_API_URL=$CLIMATE_API_HEROKU
git push heroku master
```

