import { gql } from '@apollo/client'

/**
 * Essa query é usada para obter todos os dados de das localidades presentes no banco de dados da aplicação.
 */
export const GET_LOCALES = gql`
query GetLocales {
  weathers {
    locale {
      id
      name
      state
      latitude
      longitude
    }
  }
}
`

/**
 * Essa query retorna os dados climáticos de uma localidade escolhida como padrão, no caso são paulo
 */
export const GET_WEATHER_DEFAULT_LOCALE = gql`
query GetFullWeather( $temperatureUnit: String!, $rainUnit: String! ) {
  weatherByLocaleNameOrId(name: "são paulo", id: 3477, temperatureUnit: $temperatureUnit, rainUnit: $rainUnit) {
      locale {
          id
          name
          state
          latitude
          longitude
        }
        weather {
          date
          text
          temperature{
              max
              min
          }
          rain {
            probability
            precipitation
          }
        }
      
  }
}
`

/**
 * Essa query retorna os dados climáticos de uma localidade escolhida, sendo possível ainda selecionar as unidades da temperatura e da chuva
 */
export const GET_WEATHER_BY_LOCALE_OR_ID = gql`
    query GetFullWeather( $id: Int!, $name: String!, $temperatureUnit: String!, $rainUnit: String!) {
        weatherByLocaleNameOrId( id: $id, name: $name, temperatureUnit: $temperatureUnit, rainUnit: $rainUnit) {
            locale {
                id
                name
                state
                latitude
                longitude
              }
              period {
                begin
                end
              }
              weather {
                date
                text
                temperature{
                    max
                    min
                }
                rain {
                  probability
                  precipitation
                }
              }
            
        }
    }
`