import { Box, Button, Heading, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import { FaCloudSun } from 'react-icons/fa'
import BannerImage from '../../public/assets/satelite-climatico.jpeg'
import LogoClimaTempoImage from '../../public/assets/logo-climatempo-stormgeo.svg'
import React from 'react'

export const MainBanner = () => {
    return (
        <Stack direction="row" shadow="md">
            <Stack direction="column" alignItems="start" p="10" flex="1 1 50%" alignSelf="center">
                <Heading mb="5">Soluções meteorológicas para seu negócio</Heading>
                <Button leftIcon={<FaCloudSun />}>Saiba Mais</Button>
            </Stack>
            <Box position="relative" width="100%" flex="1 1 50%">
                <Image src={BannerImage} layout="fill" />
                <Box position="absolute" bottom="6" right="8">
                    <Image src={LogoClimaTempoImage} />
                </Box>
            </Box>
        </Stack>
    )
}