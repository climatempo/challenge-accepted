import { Box, Button, Heading, Image, Stack } from '@chakra-ui/react'
import { FaCloudSun } from 'react-icons/fa'
import BannerImage from '../../assets/satelite-climatico.jpeg'
import LogoClimaTempoImage from '../../assets/logo-climatempo-stormgeo.svg'
import React from 'react'

export const MainBanner = () => {

    const redirectToClimaTempo = () => {
        window.location.href = 'https://climatempo.com.br/'
    }

    return (
        <Stack direction={{ base: "column-reverse", lg: "row" }} shadow={{ base: 'none', md: "md" }} align="center" borderRadius="md">
            <Stack direction="column" alignItems={{ base: "center", md: "start" }} p="10" flex="1 1 50%" alignSelf="center" textAlign={{ base: "center", md: "left" }}>
                <Heading mb="5">Soluções meteorológicas para seu negócio</Heading>
                <Button leftIcon={<FaCloudSun />} onClick={() => redirectToClimaTempo()}>Saiba Mais</Button>
            </Stack>
            <Box position="relative" width="100%" flex="1 1 50%" alignSelf="stretch">
                <Image src={BannerImage} height="100%" />
                <Image src={LogoClimaTempoImage} position="absolute" bottom="6" right="8" />
            </Box>
        </Stack >
    )
}