import { Container, Stack } from '@chakra-ui/react'
import React from 'react'
import { CardPrevisao } from '../ui/CardPrevisao'

export const Cards = () => {

    const generateCards = () => {
        const num = ['', '', '']
        return num.map(info => <CardPrevisao></CardPrevisao>)
    }
    return (
        <Container maxW="container.xl" mt="10">
            <Stack direction="row" justify="space-between" align="center" >
                {generateCards()}
            </Stack>
        </Container>

    )
}