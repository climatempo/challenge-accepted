import React from 'react'
import { Container, Stack } from '@chakra-ui/react'
import { FullCard } from '../ui/FullCard'
import { MainBanner } from '../ui/MainBanner'
import { IFullWeatherInfo } from '../../types/interfaces'

export const Banner: React.FC<IFullWeatherInfo> = ({locale, period, weather}) => {
    return (
        <Container maxW="container.xl" mt="16">
            <Stack direction="row" align="stretch" spacing="10" justify="space-between">
                <FullCard locale={locale} period={period} weather={weather[0]}></FullCard>
                <MainBanner></MainBanner>
            </Stack>
        </Container>
    )
}