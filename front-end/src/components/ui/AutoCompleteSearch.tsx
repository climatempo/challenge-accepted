import React, { useEffect, useState } from 'react'
import { Box, Container, Input, InputGroup, InputRightElement, List, ListItem } from '@chakra-ui/react'
import { ILocale } from '../../types/interfaces'
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export interface IAutoCompleteSearchProps {
    suggestions: Array<ILocale>,
}

/**
 * Utilizado para pesquisar as localidades, o componente de pesquisa de localização de um determinado local, contem um input de pesquisa e uma lista de resultados
 * que é exibida quando o usuário começa a digitar, que pode ou não exibir resultados dependendo do input do usuário.
 * @param Suggestions Array com as todas as localidades que serão exibas como sugestão de busca
 * @returns Componente com input de pesquisa para as localidades
 */
export const AutoCompleteSearch: React.FC<IAutoCompleteSearchProps> = ({ suggestions }) => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [filteredSuggestions, setFilteredSuggestions] = useState<Array<ILocale>>(suggestions)

    const handleFilteredSuggestions = () => {
        setFilteredSuggestions(suggestions ? suggestions.filter(suggestion => suggestion.name?.toLowerCase().includes(searchTerm.toLowerCase())) : [])
    }

    const handleSearchInput = (event: any) => {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        handleFilteredSuggestions()
    }, [searchTerm])


    const renderSuggestion = () => {
        if (searchTerm === '' || searchTerm === null) {
            return null
        } else if ((searchTerm !== '' || searchTerm !== null) && filteredSuggestions.length === 0) {
            return (
                <Box bg="white" position="absolute" left="4" right="0" top="12" borderRadius="md" boxShadow="lg" zIndex="999" maxH="500px" overflow="">
                    <List spacing="2" >
                        <ListItem p="3" mt="0 !important" display="flex" alignItems="center" css={{ gap: '6px' }} fontSize="lg" fontWeight="medium" >
                            <FaMapMarkerAlt /> Infelizmente não achamos nenhum resultado
                        </ListItem>
                    </List>
                </Box>
            )
        } else {
            return (
                <Box bg="white" position="absolute" left="4" right="0" top="12" borderRadius="md" boxShadow="lg" zIndex="999" maxH="500px" overflow="">
                    <List spacing="2" >
                        {filteredSuggestions?.map((suggestion, index) => {
                            return (
                                <Link key={index} to={`/previsao/${suggestion.id}`} onClick={() => setSearchTerm('')}>
                                    <ListItem p="3" mt="0 !important" display="flex" alignItems="center" css={{ gap: '6px' }} cursor="pointer"
                                        fontSize="lg" fontWeight="medium" borderBottom={index < filteredSuggestions.length - 1 ? "#CCCCCC 0.5px solid" : 0} >
                                        <FaMapMarkerAlt />{suggestion.name}
                                    </ListItem>
                                </Link>
                            )
                        })}

                    </List>
                </Box>
            )
        }

    }

    return (
        <Container position="relative">
            <InputGroup>
                <Input placeholder="Procure por sua cidade..." size="md" type="text" value={searchTerm} onChange={(e) => { handleSearchInput(e) }} />
                <InputRightElement children={<FaSearch color="#A0AEC0" fontSize="20px" />} />
            </InputGroup>
            {renderSuggestion()}
        </Container >

    )
}
