import React from 'react'
import { Container, Grid } from '@chakra-ui/react'
import { CardPrevisao } from '../ui/CardPrevisao'
import { IWeather } from '../../types/interfaces'

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