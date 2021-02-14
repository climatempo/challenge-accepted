import { gql } from '@apollo/client'

const GET_LOCALES = gql`
    query getLocales {
        locales {
            id name state
        }
    }
`

const GET_FORECAST = gql`
    query getForecast($locale: String) {
        forecast(locale: $locale) {
            period { 
                begin 
                end 
            } 
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
                minTemperatureC
                maxTemperatureC
                minTemperatureF
                maxTemperatureF
                rainProbability
                rainPrecipitationMM
                rainPrecipitationInch
            }
            message
        }
    }
`
export {
    GET_LOCALES,
    GET_FORECAST,
}