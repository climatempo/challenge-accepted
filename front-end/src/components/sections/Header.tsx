import { Box, Button, Container, Image, Stack, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import HeaderImage from '../../assets/logo-climatempo-stormgeo.svg'
import React, { useEffect } from 'react'
import { AutoCompleteSearch } from '../ui/AutoCompleteSearch'
import { ILocale } from '../../types/interfaces'
import { GET_LOCALES } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import { ModalPreferences } from '../ui/PreferencesModal'

/**
 * Componente do header do site, com campo de busca e botões de opções
 * @returns Componente do cabeçalho da página
 */
export const Header = () => {
    const { data } = useQuery<{ weathers: Array<{ locale: ILocale }> }>(GET_LOCALES);
    const [locales, setLocales] = React.useState<ILocale[]>()
    const [isMobile] = useMediaQuery("(max-width: 465px)")
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => { setLocales(data?.weathers.map(locale => locale.locale)) }, [data])
    return (
        <>
            <Box bg="blue.400" py="5">
                <Container maxW="container.xl">
                    <Stack direction="row" justify="space-between" align="center" >
                        <Link to="/"><Image src={HeaderImage} /></Link>
                        {isMobile ? '' : <AutoCompleteSearch suggestions={locales!} />}
                        <Button onClick={onOpen}>Menu</Button>
                    </Stack>
                </Container>
                <ModalPreferences isOpen={isOpen} onClose={onClose} onOpen={onOpen}></ModalPreferences>
            </Box>
            {isMobile ?
                <Box margin="auto" mt="6">
                    <AutoCompleteSearch suggestions={locales!} />
                </Box> : ''}
        </>
    )
}