import { Box, Button, Container, Input, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import HeaderImage from '../../public/assets/logo-climatempo-stormgeo.svg'
import React from 'react'
import { AutoCompleteSearch } from '../ui/AutoCompleteSearch'
import { ILocale } from '../../types/interfaces'

export const Header: React.FC<{ locales: ILocale[] }> = ({ locales }) => {
    return (
        <Box bg="blue.400" py="5">
            <Container maxW="container.xl">
                <Stack direction="row" justify="space-between" align="center" >
                    <Image src={HeaderImage} />
                    <AutoCompleteSearch suggestions={locales}  />
                    <Button>Menu</Button>
                </Stack>
            </Container>
        </Box>
    )
}