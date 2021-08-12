import { Box, Container, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import CloudImage from '../../public/assets/icons/waether/cloudy.png'
import React from 'react'
import Image from 'next/image'
import { FaArrowDown, FaArrowUp, FaCloudRain, FaPercent } from 'react-icons/fa'
import { IPeriod, IWeather } from '../../types/interfaces'

export interface ICardPrevisaoProps {
    weather: IWeather
    period: IPeriod
}

export const CardPrevisao: React.FC<ICardPrevisaoProps> = ({ period, weather, children }) => {
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
                            <Text>{weather.temperature?.max}</Text>
                            <FaArrowUp color="red" />
                        </HStack>
                        <HStack>
                            <Text>{weather.temperature?.min}</Text>
                            <FaArrowDown color="blue" />
                        </HStack>
                    </HStack>
                </HStack>
                <HStack justify="space-between">
                    <Text fontWeight="medium" mr="5">Chuva</Text>
                    <HStack spacing="5">
                        <HStack>
                            <Text>{weather.rain?.probability}</Text>
                            <FaPercent />
                        </HStack>
                        <HStack>
                            <Text>{weather.rain?.precipitation}</Text>
                            <FaCloudRain />
                        </HStack>
                    </HStack>
                </HStack>
            </Stack>
        </Stack>
    )
}