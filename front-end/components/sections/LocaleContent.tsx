import { Container, Grid, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { IFullWeatherInfo, ILocale, IPeriod, IWeather } from '../../types/interfaces'
import { FullCard } from '../ui/FullCard'

const generateCards = (locale: ILocale, period: IPeriod, weather: IWeather[]) => {
    return (
        weather.map((weather, index) => {
            return <FullCard weather={weather} period={period} locale={locale}></FullCard>
        })

    )
}

export const LocaleContent: React.FC<IFullWeatherInfo> = ({ locale, period, weather, children }) => {
    return (
        <Container maxW="container.xl" mt="10">
            <Stack direction="column">
                <Heading size="lg" mb="8" textAlign={{ base: 'center', lg: 'left' }}>Resultados da previsão de {locale.name + " - " + locale.state}</Heading>
                <Grid justifyItems="center" gap="10" gridTemplateColumns="repeat( auto-fill, minmax(275px, 1fr) );">
                    {generateCards(locale, period, weather)}
                </Grid>
            </Stack>
        </Container>

    )
}

