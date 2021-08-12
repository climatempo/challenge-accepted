import { gql } from '@apollo/client'

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

export const GET_WEATHER_DEFAULT_LOCALE = gql`
query GetFullWeather {
  weatherByLocaleNameOrId(name: "são paulo", id: 3477) {
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



export const GET_WEATHER_BY_LOCALE_OR_ID = gql`
    query GetFullWeather( $id: Int!, $name: String!) {
        weatherByLocaleNameOrId( id: $id, name: $name) {
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