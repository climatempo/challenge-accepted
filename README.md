# Documentação
* [Rodando aplicação](#inicio)
* [Locale](#locale)
* [Weather](#weather)
* [Estrutura e principais diretórios](#estrutura-e-principais-diretórios)
* [Principais Classes](#principais-classes)

##inicio

Após fazer o clone do repositório, rodar o segunte comando:

```bash
php artisan serve
```

## Locale

###  GET Todas as Localizações

> http://localhost:8000/api/locales

Retorna uma lista com as localidades disponíveis.


## Weather

### GET Todas as Previsões

> http://localhost:8000/weather

Este retorna uma lista com todas as previsões.


### GET Previsões por localidade

> http://localhost:8000/api/weather/locale/{locale_id}

Visualise os dados de um produto com seu id único como parâmetro.

##### Request básico
```bash
curl -X GET 'http://localhost:8000/api/weather/locale/3735'
```

##### Resposta
```
{
  "period": {...},
  "locale": {
    "id": 3735,
    "name": "Osasco",
    "state": "SP",
    "latitude": -23.532,
    "longitude": -46.792
  },
  "weather": {...}
{
```
