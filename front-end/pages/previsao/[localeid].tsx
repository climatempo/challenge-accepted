import { GetServerSidePropsContext } from "next"
import Head from "next/head"
import { Header } from "../../components/sections/Header"
import { gql } from '@apollo/client';
import { client } from '../_app'
import { FullCard } from "../../components/ui/FullCard";
import { IFullWeatherInfo } from "../../types/interfaces";
import { LocaleContent } from "../../components/sections/LocaleContent";

const GET_WEATHER_BY_LOCALE = gql`
    query GetFullWeather($name: String!) {
        weatherByLocaleName(name: $name) {
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const localeId = context.query.localeid
    const name = context.query.name
    const { data } = await client.query({ query: GET_WEATHER_BY_LOCALE, variables: { name: "paulo" } })
    return {
        props: {
            ...data.weatherByLocaleName
        }
    }
}

export default function LocaleResults({ weather, period, locale }: IFullWeatherInfo) {
    return (
        <>
            <Head>
                <title>Clima Tempo</title>
                <meta name="description" content="App criado para o desafio do estágio no clima tempo" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <LocaleContent weather={weather} locale={locale} period={period} />
        </>
    )
}

