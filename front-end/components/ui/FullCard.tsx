import { Box, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import CloudImage from '../../public/assets/icons/waether/cloudy.png'
import React from 'react'
import { FaArrowDown, FaArrowUp, FaCloudRain, FaPercent } from 'react-icons/fa'

export const FullCard = () => {
    return (
        <Stack direction="column" p="5" justify="center" shadow="md" spacing="6" maxW="350px">
            <HStack>
                <Image src={CloudImage} height="75" width="80" />
                <Heading as="h3" fontSize="xl" textAlign="center" fontWeight="semibold">
                    Clima agora em <br /> Campo Grande/ MS
                </Heading>
            </HStack>
            <hr />
            <HStack justify="space-between">
                <Text fontWeight="medium">Temperatura</Text>
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
                <Text fontWeight="medium">Chuva</Text>
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
            <hr />
            <Text fontSize="sm">Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.</Text>
        </Stack>
    )
}