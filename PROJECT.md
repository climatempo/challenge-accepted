v<h1 align="center">
ClimaTempo Project
</br>
<a href="http://i.imgur.com/Q9lCAMF.png" target="_blank"> ><img src="https://img.shields.io/badge/Version-1.0.0-blue.svg" alt="Version"><
</a>

</h1>
<div align="center">

  <h3>Built With</h3>

  <img alt= "typescript logo" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img alt= "node.js logo" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" height="30px"/>
  <img alt= "express logo" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" height="30px"/>
  <img alt= "react logo" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="30px"/>
  <img alt= "styled components logo" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" height="30px"/>
  <img alt= "postgresql logo" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img alt= "prisma logo" src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img alt= "jest logo" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" height="30px"/>
  <img alt= "docker logo" src="https://img.shields.io/badge/Docker-228FE1?style=for-the-badge&logo=docker&logoColor=white" height="30px"/>
  <img alt= "nginx logo" src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" height="30px"/>
  <img alt= "heroku logo" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <img alt= "vercel logo" src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description

ClimeTempo is a project that shows the weather forecast for the next 7 days in a city of your choice.

</br>

## Features

-   Search for a city
-   See the weather forecast for the next 7 days

</br>

## API Reference

#### Get Locates

```http
GET /locates
```

#### Request:

| Query    | Type     | Description                    |
| :------- | :------- | :----------------------------- |
| `search` | `string` | **min length: 3** **Required** |

#### Response:

```json
[
	{
		"id": 1,
		"name": "Osasco",
		"state": "SP",
		"latitude": -23.532,
		"longitude": -46.792
	}
]
```

#

#### Get Weather Forecast

```http
GET /weather/:id
```

#### Request:

| Parameter | Type     | Description  |
| :-------- | :------- | :----------- |
| `id`      | `number` | **Required** |

| Query       | Type     | Description                         |
| :---------- | :------- | :---------------------------------- |
| `startDate` | `string` | **Format: YYYY-MM-DD** **Required** |
| `endDate`   | `string` | **Format: YYYY-MM-DD** **Required** |

#### Response:

```json
{
	"locale": {
		"id": 1,
		"name": "Osasco",
		"state": "SP"
	},
	"weather": [
		{
			"id": 1,
			"date": "2017-02-01T00:00:00.000Z",
			"conditionText": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
			"minTemperature": 20,
			"maxTemperature": 28,
			"rainProbability": 60,
			"rainPrecipitation": 20
		}
	]
}
```

</br>

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

##### Without Docker:

##### back-end (api):

`DATABASE_URL = postgres://username:password@hostname[localhost]:port[5432]/databasename`

`PORT = 5000 or any port you want [optional]`

##### front-end (client):

`VITE_API_URL = http://localhost:port[5000]`

#

##### With Docker:

##### back-end (api):

`DATABASE_URL = postgres://postgres:postgres@postgres-db:5432/climatempo`

`POSTGRES_USER = postgres`

`POSTGRES_PASSWORD = postgres`

`POSTGRES_DB = climatempo`

##### front-end (client):

`VITE_API_URL = http://localhost:8080/api`

</br>

## Run Locally

> Remember to create a .env file with the environment variables in /api and /client folders.

##### Without Docker:

Clone the project

```bash
  git clone git@github.com:LucasAlvsz/challenge-accepted-climatempo.git
```

Go to the project directory

```bash
  cd challenge-accepted-climatempo/project/
```

Go to the back-end directory

```bash
  cd api/
```

Install the dependencies

```bash
  npm install
```

Build the project

```bash
  npm run build
```

Start the server

```bash
  npm run start
```

Go to the front-end directory

```bash
  cd ../client/
```

Install the dependencies

```bash
  npm install
```

Build the project

```bash
  npm run build
```

Start the client

```bash
  npm run preview
```

> The app will be running on http://localhost:4173/ by default.

#

##### With Docker:

Clone the project

```bash
  git clone git@github.com:LucasAlvsz/challenge-accepted-climatempo.git
```

Go to the project directory

```bash
  cd challenge-accepted-climatempo/project/
```

Run the app

```bash
  docker-compose up
```

> The app will be running on http://localhost:8080/ by default.

</br>

## Authors

-   [@LucasAlvsz](https://www.github.com/LucasAlvsz) 🪐

<br/>

#

<a  href="mailto:contato.lucasalv@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg"></a>
