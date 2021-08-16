import { Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import CloudImage from '../../assets/icons/waether/cloudy.png'
import React, { FC } from 'react'
import { FaArrowDown, FaArrowUp, FaCloudRain, FaPercent } from 'react-icons/fa'
import { IWeather, ILocale } from '../../types/interfaces'

export interface IFullCardProps {
    weather: IWeather
    locale: ILocale
}

/**
 * Card mais completo que exibi um texto de descrição alem da previsão do tempo
 * @param Weather Informações do tempo de um dia especifico 
 * @implements {IFullCardProps}
 * @returns Card com as informações do tempo de um dia especifico
 */
export const FullCard: FC<IFullCardProps> = ({ weather, locale }) => {
    return (
        <Stack direction="column" p="5" justify="center" shadow="md" spacing="6" maxW="400px" borderRadius="md">
            <HStack justifyContent="space-between">
                <Image src={CloudImage} maxW="85px" />
                <VStack>
                    <Heading as="h3" fontSize="xl" textAlign="center" fontWeight="semibold">
                        Clima em <br /> {`${locale.name} - ${locale.state}`}
                    </Heading>
                    <Text size="sm" mt="0 !important">{weather.date}</Text>
                </VStack>
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