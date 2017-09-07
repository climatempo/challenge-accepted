# Documentação

## Locale
* [Get Todas as Localizações](#get-todas-as-localizacoes)

###  GET Todas as Localizações

> http://localhost/api/locales

Este endpoint `api/locales` retorna uma lista com as localidades disponíveis.

##### Request básico

```bash
curl -X GET 'http://localhost/api/locales'
```
##### Resposta

```json
[
  {
    "id": 3735,
    "name": "Osasco",
    "state": "SP",
    "latitude": -23.532,
    "longitude": -46.792
  },
  {
    "id": 3477,
    "name": "São Paulo",
    "state": "SP",
    "latitude": -23.548,
    "longitude": -46.636
  }
]
```

## Weather
* [Get Todas as Previsões](#get-todas-as-previsoes)

### GET Todas as Previsões

> http://localhost/weather

Este retorna uma lista com todas as previsões.

##### Request básico

```bash
curl -X GET 'http://localhost/api/weather'
```
##### Resposta

```json
[
  {
    "period": {
      "begin": "2017-02-01",
      "end": "2017-02-07"
    },
    "locale": {
      "id": 3735,
      "name": "Osasco",
      "state": "SP",
      "latitude": -23.532,
      "longitude": -46.792
    },
    "weather": [
      {
        "date": "2017-02-01",
        "text": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
        "temperature": {
          "min": 20,
          "max": 28
        },
        "rain": {
          "probability": 60,
          "precipitation": 20
        }
      },
      {
        "date": "2017-02-02",
        "text": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
        "temperature": {
          "min": 21,
          "max": 30
        },
        "rain": {
          "probability": 60,
          "precipitation": 10
        }
      }
    ]  
  },
  
  //Others periods
]  
```





