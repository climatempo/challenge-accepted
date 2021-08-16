import React from 'react'
import { Container, Stack } from '@chakra-ui/react'
import { FullCard } from '../ui/FullCard'
import { MainBanner } from '../ui/MainBanner'
import { ILocale, IWeather } from '../../types/interfaces'

/**
 * O Componente une banner e um card com informações sobre o tempo e o clima
 * @param Locale Localização padrão para informações de clima
 * @param Weather Informações do clima
 * @returns Banner principal do site com card de clima da localização padrão no dia atual
 */
export const Banner: React.FC<{ locale: ILocale, weather: IWeather }> = ({ locale, weather }) => {
    return (
        <Container maxW="container.xl" mt="10">
            <Stack direction={{ base: "column-reverse", md: "row" }} align={{ base: "center", md: "start", lg: "stretch" }} spacing="10" justify="space-between">
                <FullCard locale={locale} weather={weather}></FullCard>
                <MainBanner></MainBanner>
            </Stack>
        </Container>
    )
}