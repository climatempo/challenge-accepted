import React from 'react'
import { Container, Stack } from '@chakra-ui/react'
import { FullCard } from '../ui/FullCard'
import { MainBanner } from '../ui/MainBanner'

export const Banner = () => {
    return (
        <Container maxW="container.xl" mt="16">
            <Stack direction="row" align="stretch" spacing="10" justify="space-between">
                <FullCard></FullCard>
                <MainBanner></MainBanner>
            </Stack>
        </Container>
    )
}