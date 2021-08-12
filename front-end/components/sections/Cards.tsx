import React from 'react'
import { Container, Grid} from '@chakra-ui/react'
import { IFullWeatherInfo } from '../../types/interfaces'
import { CardPrevisao } from '../ui/CardPrevisao'


export const Cards: React.FC<IFullWeatherInfo> = ({ period, weather, locale }) => {

    const generateCards = () => {
        return weather.map((info, index) => index < 4 ? <CardPrevisao key={index} period={period} weather={info}></CardPrevisao> : '')
    }
    return (
        <Container maxW="container.xl" mt="10">
            <Grid justifyItems={{ base: 'center', lg:"start"}} justifyContent={{ base: 'center', lg:"start"}} gap="5" gridTemplateColumns="repeat(auto-fit, minmax(350px, 400px))"  >
                {generateCards()}
            </Grid>
        </Container>

    )
}