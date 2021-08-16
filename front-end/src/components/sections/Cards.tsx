import React from 'react'
import { Container, Grid } from '@chakra-ui/react'
import { CardPrevisao } from '../ui/CardPrevisao'
import { IWeather } from '../../types/interfaces'

/**
 * Retorna uma lista de cards com as previsões do tempo dependendo da quantidades de dias que forem passados no parâmetro.
 * @param Weather Informações de clima da localidade desejada
 * @returns Vários cards com as informações de clima de todos os dias que foram passados
 */
export const Cards: React.FC<{weather: IWeather[]}> = ({ weather }) => {

    const generateCards = () => {
        return weather.map((info, index) => index < 4 ? <CardPrevisao key={index} weather={info}></CardPrevisao> : '')
    }
    return (
        <Container maxW="container.xl" mt="10">
            <Grid justifyItems={{ base: 'center', lg: "start" }} justifyContent={{ base: 'center', lg: "start" }} gap="5" gridTemplateColumns="repeat(auto-fit, minmax(350px, 400px))"  >
                {generateCards()}
            </Grid>
        </Container>

    )
}