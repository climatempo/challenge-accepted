import React from 'react'
import { Container, Stack } from '@chakra-ui/react'
import { FullCard } from '../ui/FullCard'
import { MainBanner } from '../ui/MainBanner'
import { ILocale, IWeather } from '../../types/interfaces'

export const Banner: React.FC<{ locale: ILocale, weather: IWeather }> = ({ locale, weather }) => {
    return (
        <Container maxW="container.xl" mt="10">
            <Stack direction={{ base: "column-reverse", lg: "row" }}  align={{base: "center",lg:"stretch"}} spacing="10" justify="space-between">
                <FullCard locale={locale} weather={weather}></FullCard>
                <MainBanner></MainBanner>
            </Stack>
        </Container>
    )
}