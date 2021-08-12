import { Box, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import CloudImage from '../../public/assets/icons/waether/cloudy.png'
import React, { FC } from 'react'
import { FaArrowDown, FaArrowUp, FaCloudRain, FaPercent } from 'react-icons/fa'
import { IWeather, IPeriod, ILocale } from '../../types/interfaces'

export interface IFullCardProps {
    weather: IWeather
    period: IPeriod
    locale: ILocale
}

export const FullCard: FC<IFullCardProps> = ({ weather, locale, period, children }) => {
    return (
        <Stack direction="column" p="5" justify="center" shadow="md" spacing="6" maxW="350px">
            <HStack>
                <Image src={CloudImage} height="75" width="80" />
                <Heading as="h3" fontSize="xl" textAlign="center" fontWeight="semibold">
                    Clima agora em <br /> {`${locale.name} - ${locale.state}`}
                </Heading>
            </HStack>
            <hr />
            <HStack justify="space-between">
                <Text fontWeight="medium">Temperatura</Text>
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
                <Text fontWeight="medium">Chuva</Text>
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
            <hr />
            <Text fontSize="sm">{weather.text}</Text>
        </Stack>
    )
}