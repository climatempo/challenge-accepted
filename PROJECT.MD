## 🎲 Excutando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/tallesv/challenge-accepted

# Acesse a pasta do projeto no terminal/cmd
$ cd challenge-accepted

# Acesse a pasta do backend da aplicação
$ cd backend

# Instale as dependências do backend
$ yarn

# Execute a aplicação
$ yarn dev:server

# O backend inciará na porta:3333 - acesse <http://localhost:3000/graphql>

# Acesse a pasta do frontend da aplicação
$ cd ../frontend

# Instale as dependências do frontend
$ yarn

# Execute a aplicação
$ yarn start

# O frontend inciará na porta:3000 - acesse <http://localhost:3000>

```

## O Que foi feito

# frontend

O frontend foi feito em react com javascript, também foi utilizado a biblioteca do ant design para ter o input com o autocomplete dos locales vindo do backend. Essa aplicação consiste em uma única página responsiva onde o usuário pode buscar por uma locale cadastrada no backend, e essa busca irá trazer as previsões de tempo para cada dia registrado no backend da locale buscada, cada previsão de tempo irá ser mostrada através de um único card. Também há a opção do usuário alterar as unidades de escala de temperatura e chuva, através dos botões localizados acima dos cards.

# backend

O backend foi feito utilizando o ambiente nodejs com javascript, utilizando graphql para consulta e criação dos dados de locale e weather, para armazenar os esses dados foi utilizado o banco de dados mongodb. 

Locale query:
  query {
    locales {
      name
      state
      latitude
      longitude
    }
  }

Weather query: 
  query {
    weathers {
      period {
        begin
        end
      }
      locale_id
      weather {
        date
        text
        temperature {
          min
          max
        }
        rain {
          probability
          precipitation
        }
      }
    }
  }

Criar locale:
  mutation {
    createLocale (localeInput: {name: "Osasco", state: "SP", latitude: -23.5320, longitude: -46.7920}) {
      name
      state
      latitude
      longitude
    }
  }

Criar weather: 
  mutation {
    createWeather(weatherInput: {
      period: {
        begin: "2017-02-01",
        end: "2017-02-07"
      },
      locale_id: "608a2dfd2fb3b62e9bd61e35",
      weather: [
        {
          date: "2017-02-01",
          text: "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
          temperature: {
            min: 20,
            max: 28
          },
          rain: {
            probability: 60,
            precipitation: 20
          }
        },
        {
          date: "2017-02-02",
          text: "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
          temperature: {
            min: 21,
            max: 30
          },
          rain: {
            probability: 60,
            precipitation: 10
          }
        },
        {
          date: "2017-02-03",
          text: "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
          temperature: {
            min: 22,
            max: 31
          },
          rain: {
            probability: 60,
            precipitation: 25
          }
        },
        {
          date: "2017-02-04",
          text: "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
          temperature: {
            min: 22,
            max: 32
          },
          rain: {
            probability: 60,
            precipitation: 16
          }
        },
        {
          date: "2017-02-05",
          text: "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
          temperature: {
            min: 23,
            max: 32
          },
          rain: {
            probability: 67,
            precipitation: 19
          }
        },
        {
          date: "2017-02-06",
          text: "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
          temperature: {
            min: 22,
            max: 33
          },
          rain: {
            probability: 60,
            precipitation: 8
          }
        },
        {
          date: "2017-02-07",
          text: "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
          temperature: {
            min: 25,
            max: 30
          },
          rain: {
            probability: 60,
            precipitation: 11
          }
        }
      ]
    }) {
    locale_id
  }
}