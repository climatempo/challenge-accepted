# Projeto de Previsão do Tempo 

## Visão Geral

Este projeto é uma aplicação web que permite aos usuários verificar a previsão do tempo para Osasco e São Paulo usando seus smartphones. A aplicação é dividida em dois componentes principais: o frontend e o backend.

### Frontend

**Recursos:**

- *Página Responsiva:* A aplicação possui um layout responsivo que se adapta a diferentes tamanhos de tela, proporcionando uma boa experiência de usuário em smartphones.

- *Campo Autocomplete:* Há um campo de pesquisa onde os usuários podem inserir nomes de localidades. O campo autocomplete sugere localidades à medida que o usuário digita, tornando mais fácil a seleção da cidade desejada.

- *Card de Previsão:* Para cada dia da semana, a aplicação exibe um "card" que inclui informações detalhadas sobre a previsão do tempo. Essas informações podem incluir temperatura mínima e máxima, condições climáticas, um ícone representando o clima e outros detalhes relevantes.

### Backend

**Recursos:**

- *Flask Restful API:* O backend disponibiliza uma API que permite aos usuários obter informações sobre localidades e dados de previsão do tempo.

- *Validação de Entradas do Usuário:* O backend valida as entradas do usuário para garantir que os dados inseridos sejam consistentes e precisos. Isso inclui a validação das consultas de pesquisa de localidades.

## Tecnologias Utilizadas

- **Frontend:** Para o frontend, as tecnologias escolhidas foram o framework JavaScript como React.

- **Backend:** O backend foi implementado usando Python com o Flask Restful API.

## Fluxo de Funcionamento

1. O usuário acessa a aplicação através de seu smartphone.

2. Na página inicial, o usuário encontra um campo de pesquisa onde pode inserir nomes de localidades.

3. À medida que o usuário digita, um mecanismo de autocomplete sugere localidades relevantes.

4. O usuário seleciona a localidade desejada.

5. A aplicação faz uma solicitação ao backend para obter dados de previsão do tempo para a localidade escolhida.

6. O backend processa a solicitação, valida os dados e retorna as informações de previsão do tempo.

7. O frontend exibe as informações em "cards" organizados por dia da semana.

8. O usuário pode rolar para baixo na página para ver a previsão do tempo para os próximos dias.

## Documentação da API

**Link API**: 
https://climatempo-talent.rj.r.appspot.com/

### API Endpoints

<details>
<summary>Autocomplete da Cidade</summary>

```http
   GET /autocomplete_city
```

*Method:* GET

*Endpoint:* autocomplete_city

*Parameters:*
* user_input (required: True, String)

*Example:* 

```json
{
  "results":[
    {
      "id":3735,
      "name":"Osasco",
      "state":"SP"
    }
  ]
}
```

**Link:** 
https://climatempo-talent.rj.r.appspot.com/autocomplete_city?user_input=Osas

</details>

<details>
<summary>Previsão do Tempo</summary>

```http
   GET /weatherforecast
```

*Method:* GET

*Endpoint:* weatherforecast

*Parameters:*
* city_id (required: True, Integer)
* unit_temperature (required: True, String, 'fahrenheit' ou 'celsius')
* unit_precipitation (required: True, String, 'inch' ou 'mm')

*Example:*

```json
[
  {
    "locale": {
      "id": 3735,
      "latitude": -23.532,
      "longitude": -46.792,
      "name": "Osasco",
      "state": "SP"
    },
    "period": {
      "begin": "2017-02-01",
      "end": "2017-02-07"
    },
    "weather": [
      {
        "date": "2017-02-01",
        "rain": {
          "precipitation": 0.8,
          "probability": 60
        },
        "temperature": {
          "max": 82,
          "min": 68
        },
        "text": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora."
      },
      {
        "date": "2017-02-02",
        "rain": {
          "precipitation": 0.4,
          "probability": 60
        },
        "temperature": {
          "max": 86,
          "min": 70
        },
        "text": "Sol com muitas nuvens durante o dia. Per\u00edodos de nublado, com chuva a qualquer hora."
      },
      {...},
      {...},
      {...},
      {...},
      {...},
      {...}
    ]
  }
]
```

**Link:** 
https://climatempo-talent.rj.r.appspot.com/weatherforecast?city_id=3735&unit_temperature=fahrenheit&unit_precipitation=inch
</details>


## Conclusão

Este projeto fornece uma solução simples e eficaz para que os usuários obtenham informações atualizadas sobre a previsão do tempo em Osasco e São Paulo usando seus smartphones. O frontend responsivo e o backend robusto garantem uma experiência de usuário agradável e confiável.
