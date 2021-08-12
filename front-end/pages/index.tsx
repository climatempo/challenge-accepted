import { gql } from '@apollo/client'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { Banner } from '../components/sections/Banner'
import { Cards } from '../components/sections/Cards'
import { Header } from '../components/sections/Header'
import { IFullWeatherInfo, ILocale } from '../types/interfaces'
import { client } from './_app'

const GET_WEATHER_DEFAULT_LOCALE = gql`
    query GetWeathers {
      weathers {
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
          temperature {
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

export interface IHomeProps extends IFullWeatherInfo {
  locales: ILocale[]
}


export async function getServerSideProps(context: GetServerSidePropsContext) {

  const { data } = await client.query({ query: GET_WEATHER_DEFAULT_LOCALE })
  return {
    props: {
      ...data.weathers[0],
      locales: data.weathers.map((w: { locale: ILocale }) => w.locale)
    }
  }
}

export default function Home({ locale, period, weather, locales }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Clima Tempo</title>
        <meta name="description" content="App criado para o desafio do estágio no clima tempo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header locales={locales} />
      <Banner locale={locale} weather={weather} period={period} />
      <Cards locale={locale} weather={weather} period={period} />

    </>
  )
}