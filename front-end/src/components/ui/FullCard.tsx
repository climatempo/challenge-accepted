import { Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import CloudImage from '../../assets/icons/waether/cloudy.png'
import React, { FC } from 'react'
import { FaArrowDown, FaArrowUp, FaCloudRain, FaPercent } from 'react-icons/fa'
import { IWeather, ILocale } from '../../types/interfaces'

export interface IFullCardProps {
    weather: IWeather
    locale: ILocale
}

export const FullCard: FC<IFullCardProps> = ({ weather, locale}) => {
    return (
        <Stack direction="column" p="5" justify="center" shadow="md" spacing="6" maxW="400px">
            <HStack justifyContent="space-between">
                <Image src={CloudImage} maxW="85px"  />
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