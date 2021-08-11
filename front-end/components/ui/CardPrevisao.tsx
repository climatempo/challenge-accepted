import { Box, Container, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import CloudImage from '../../public/assets/icons/waether/cloudy.png'
import React from 'react'
import Image from 'next/image'
import { FaArrowDown, FaArrowUp, FaCloudRain, FaPercent } from 'react-icons/fa'

export const CardPrevisao = () => {
    return (
        <Stack direction="row" justify="space-between" align="center" p="4" shadow="md" spacing="10">
            <VStack textAlign="center" justify="center">
                <Box width={70} height={70}>
                    <Image src={CloudImage} layout="responsive" />
                </Box>
                <Text fontWeight="semibold">Hoje</Text>
            </VStack>
            <Stack direction="column" justify="center">
                <HStack justify="space-between">
                    <Text fontWeight="medium" mr="5">Temperatura</Text>
                    <HStack spacing="5">
                        <HStack>
                            <Text>20º</Text>
                            <FaArrowUp color="red" />
                        </HStack>
                        <HStack>
                            <Text>30º</Text>
                            <FaArrowDown color="blue" />
                        </HStack>
                    </HStack>
                </HStack>
                <HStack justify="space-between">
                    <Text fontWeight="medium" mr="5">Chuva</Text>
                    <HStack spacing="5">
                        <HStack>
                            <Text>20</Text>
                            <FaPercent />
                        </HStack>
                        <HStack>
                            <Text>30º</Text>
                            <FaCloudRain />
                        </HStack>
                    </HStack>
                </HStack>
            </Stack>
        </Stack>
    )
}