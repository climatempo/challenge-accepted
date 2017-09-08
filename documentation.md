# Documentação

## Locale

###  GET Todas as Localizações

> http://localhost:8000/api/locales

Este endpoint `api/locales` retorna uma lista com as localidades disponíveis.

##### Request básico

```bash
curl -X GET 'http://localhost:8000/api/locales'
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

### GET Todas as Previsões

> http://localhost:8000/weather

Este retorna uma lista com todas as previsões.

##### Request básico

```bash
curl -X GET 'http://localhost:8000/api/weather'
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

### GET Previsões por localidade
___

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

## Estrutura e principais diretórios
### App\
Neste diretório se concentra as partes principais da aplicação, como as models e os controllers.

<img src="https://i.imgur.com/Xn4b1dU.png" alt="Climatempo" width="200px"/>

### resources\
Aqui se encontra todas as views, os assets não compilados, como os arquivos SASS e javascript, 
o nosso frontend, bem como os arquivos do diretório `base\` usados no desafio.

<img src="https://i.imgur.com/7Scf4sk.png" alt="Climatempo" width="200px"/>

### routes\ e tests\
O arquivo de rotas `web.php` contém todas as rotas do sistema.

Os testes unitátios estão em `tests\Unit\` e os testes de recursos, em `tests\Feature`.

<img src="https://i.imgur.com/L5wYp64.png" alt="Climatempo" width="200px"/>

## Principais classes
### SourceData::class
Essa classe é responsável por converter e possibilitar a interação das Models com os aquivos fonte de dados.

Ao extender essa classe, sua model terá acesso ao seu arquivo que está no diretório `resources\base`. 
Ela assume o arquivo  possui o mesmo nome da classe. Por exemplo, a model `ProductsAvailable.php` 
terá acesso aos dados de `products_available.json`. 

Se desejar alterar o arquivo de origem acrescente em sua model a propriedade `protected $source_file="seu_arquivo.json";`. Caso queira alterar o diretório origem, `protected $path_origin = "outro/diretorio";`.

Os dados do arquivo fonte estarão disponíveis à model na propriedade `protected $data`, como uma instância de `Illuminate\Support\Collection`, para facilitar a interação com os dados. Seus métodos podem ser chamados dinâmicamente 
da model, por exemplo:

```php
$products = new Products;

$response = $products->map(function ($item) {
  return ["name" => ucfirst($item->name)];
});

//[
// ["name" => "Geladeira"],
// ["name" => "Televisor"]
//[
```
