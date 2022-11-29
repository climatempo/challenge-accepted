## Challenge resolution
###### [Versão em português](PROJECT.md)

[![Video](https://img.youtube.com/vi/1B_0Zs2_3VA/0.jpg)](https://www.youtube.com/watch?v=1B_0Zs2_3VA)

### How to run using Docker
Go to the challenge root source and run:
```shell
docker-compose up
```
or, if you have npm available
```shell
npm run docker
```

### How to run locally
###### Requirements
* Elastic search ^8 running without TLS
* Node.js ^19 installed
* npm ^8 installed

Set the following environment variables
* `ELASTIC_HOST=[elastic address with port]`
* `ELASTIC_USER=[elastic user]`
* `ELASTIC_PASSWORD=[elastic password]`

You can create a `.env` file on the `/server` folder to declare these variables in.

Go to challenge root and type:
```shell
npm install
npm start
```

### How to run tests
Go to challenge root and type:
```shell
npm install
npm run test
```

## Approach
#### Server
First I started understanding the [dummy data](base) offered on the repo. As the data was too outdated I started searching if the data was available publicly, I find out the [Clima Tempo Advisor API](https://advisor.climatempo.com.br/), which only let limited search of one city per token per 24hs.

I saw the [Clima Tempo site](https://www.climatempo.com.br/) offers weather of any city on the base for free, so I decided to implement *web scrapping* to dynamically collect weather data. That is what [`ClimaTempo.engine`](server/src/Engines/ClimaTempo/ClimaTempo.engine.ts) does.

So the [used dummy data](server/src/dummy.json) is updated with real data of the period from 26/11/2022 to 10/12/2022 of the following cities:

- Osasco, SP (Brasil) *
- São Paulo, SP (Brasil) *
- Juiz de Fora, MG (Brasil) **
- Chácara, MG (Brasil) **
- Fortaleza, CE (Brasil)
- Gramado, RS (Brasil)
- Porto de Galinhas, PE (Brasil)
- Rio de Janeiro, RJ (Brasil)
- Curitiba, PR (Brasil)
- Arraial do Cabo, RJ (Brasil)
- Natal, RN (Brasil)
- Campos do Jordão, SP (Brasil)
- Belo Horizonte, MG (Brasil)
- Angra dos Reis, RJ (Brasil)

###### * Required city on the challenge
###### ** Cities that I'm on

When the server is started first time the dummy data is indexed on elastic to be ready available to the user search.

The server will automatically fall back any request to the ClimaTempo engine and index the response making elastic act like a cache. If elastic has the data already, it will be quickly sent to the client and posteriorly fall back to the ClimaTempo engine to update elastic data. 

##### The available endpoint are:
```shell
GET /search/[string] # to search cities by name
GET /ping # To ping-pong the server
GET /city/[id] # To get city's basic info
GET /city/[id]/now # To get current weather
GET /city/[code]/weather # To get the current day weather
GET /city/[code]/weathers # To get the current and next 14 days weather
```

#### Frontend
The frontend is using [MUI](https://mui.com/) design kit and [Tailwindcss](https://tailwindcss.com/) for style, it's designed responsively for desktop, tablet and mobile. On the header you can:
* Search the city with dynamic auto complete options
* Switch between dark and light mode (it first will follow system default, and cache option if you manually change it)
* Switch between °C and °F units (default is °C, it caches if you manually change it)
* Switch between *mm* and *inch* units (default is *mm*, it caches if you manually change it)

### The web scraping data format:

###### [City basic info](server/src/Models/Locale.model.ts)
```yaml
id: number # The city's id
name: string # The city's name
uf: string # The city's state
city: number # The city's code
region: string # The city's region
acronym: string # The city's country acronym
```

###### [City detailed info](server/src/Models/DetailedLocale.model.ts)
```yaml
idlocale: number # The city's id
idcity: number # The city's code
capital: boolean # If city is a capital
idcountry: number # The country's id
ac: string # The country's acronym
country: string # The country's name
uf: string # The city's state
city: string # The city's name
region: string # The city's region
seaside: boolean # If it's a coast city
latitude: number # The city's latitude
longitude: number # The city's longitude
tourist: boolean # If it's a tourism city
agricultural: boolean # If it's a agricultural city
base: string # Looks like city's collection name
searchPoints: number # How likely its desired
```

###### [Instant Weather info](server/src/Models/InstantWeather.model.ts)
```yaml
idlocale: number # The city's id
temperature: number # The current temperature
icon: string # The alias for weather icons
condition: string # A description of the current weather
humidity: number # The current humidity level
sensation: number # The current temperature sensation
windVelocity: number # The current wind velocity
pressure: number # The current atmospheric pressure
date: string # The date and time of this weather info
```

###### [Daily Weather info](server/src/Models/InstantWeather.model.ts)
```yaml
idcity: number # The city's code
moon: string[] # The day's list of moons
rainbow: string # The description of probability of a rainbow
description: string # The day's Weather resume
date: string # The day's date
temperature:
  min: number # The day's minimum temperature
  max: number # The day's maximum temperature
rain:
  precipitation: number # The day's rain preciptation
  probability: number # The day's raining probabilily
wind:
  compass: string # The wind direction in cartesian
  velocity: number # The wind average velocity
humidity:
  min: number # The minimum humidity of the day
  max: number # The maximum humidity of the day
sun:
  morning: string # The sunshine hour
  afternoon: string # The sunrise hour
```