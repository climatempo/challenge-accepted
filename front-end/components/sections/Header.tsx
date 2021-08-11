import { Box, Button, Container, Input, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import HeaderImage from '../../public/assets/logo-climatempo-stormgeo.svg'
import React from 'react'

export const Header = () => {
    return (
        <Box bg="blue.400" py="5">
            <Container maxW="container.xl">
                <Stack direction="row" justify="space-between" align="center" >
                    <Image src={HeaderImage} />
                    <Input type="text" size="md" placeholder="Procure por sua cidade..." flexBasis="50%"/>
                    <Button>Menu</Button>
                </Stack>
            </Container>
        </Box>
    )
}