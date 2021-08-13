import React, { useContext, useEffect } from 'react'
import { Container, Grid, Heading, Stack } from '@chakra-ui/react'
import { IFullWeatherInfo } from '../../types/interfaces'
import { FullCard } from '../ui/FullCard'
import { useQuery } from '@apollo/client'
import { GET_WEATHER_BY_LOCALE_OR_ID } from '../../graphql/queries'
import { useParams } from 'react-router-dom'
import { PreferencesContext } from '../../providers/preferences'

const generateCards = ({ locale, weather }: IFullWeatherInfo) => {
    return (
        weather.map((weather, index) => {
            return <FullCard key={index} weather={weather} locale={locale}></FullCard>
        })
    )
}

type LocaleParam = {
    localeId: string
}

export const LocaleContent = () => {
    const { preferences, setPreferences } = useContext(PreferencesContext)
    let { localeId } = useParams<LocaleParam>();
    const { data, error } = useQuery<{ weatherByLocaleNameOrId: IFullWeatherInfo }>(GET_WEATHER_BY_LOCALE_OR_ID, {
        variables: {
            id: parseInt(localeId), name: '',
            temperatureUnit: preferences.temperatureUnit,
            rainUnit: preferences.rainUnit
        }
    })
    const [weather, setWeather] = React.useState<IFullWeatherInfo>()

    useEffect(() => {
        if (data) {
            setWeather(data.weatherByLocaleNameOrId)
        }

    }, [data, error])

    return (
        <Container maxW="container.xl" mt="10">
            <Stack direction="column">
                <Heading size="lg" mb="8" textAlign={{ base: 'center', lg: 'left' }}>Resultados da previsão de {weather?.locale.name + " - " + weather?.locale.state}</Heading>
                <Grid justifyItems="center" gap="5" gridTemplateColumns="repeat( auto-fill, minmax(275px, 1fr) );">
                    {weather ? generateCards(weather!) : 'loading...'}
                </Grid>
            </Stack>
        </Container>

    )
}

