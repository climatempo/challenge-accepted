import React, { useEffect, useState } from 'react'
import { Box, Container, Input, InputProps, List, ListItem, VStack } from '@chakra-ui/react'
import { ILocale } from '../../types/interfaces'
import { useRef } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

export interface IAutoCompleteSearchProps {
    suggestions: Array<ILocale>,
}

export const AutoCompleteSearch: React.FC<IAutoCompleteSearchProps> = ({ suggestions }) => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [filteredSuggestions, setFilteredSuggestions] = useState<Array<ILocale>>(suggestions)

    const handleFilteredSuggestions = (propsSuggestions: ILocale[], term: string) => {
        setFilteredSuggestions(propsSuggestions ?
            propsSuggestions.filter(suggestion => suggestion.name?.toLowerCase().includes(term.toLowerCase())) : [])

    }

    const handleSearchInput = (event: any) => {
        setSearchTerm(event.target.value)
        handleFilteredSuggestions(suggestions, searchTerm)
    }

    const renderSuggestion = () => {
        if (searchTerm == '' || searchTerm == null) {
            return null
        } else if ((searchTerm != '' || searchTerm != null) && filteredSuggestions.length == 0) {
            return (
                <Box bg="white" position="absolute" left="4" right="0" top="12" borderRadius="md" boxShadow="lg" zIndex="999" maxH="500px" overflow="">
                    <List spacing="2" >
                        <ListItem p="3" mt="0 !important" display="flex" alignItems="center" css={{ gap: '6px' }} cursor="pointer"
                            fontSize="lg" fontWeight="medium" >
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
                                <ListItem
                                    key={index} p="3" mt="0 !important" display="flex" alignItems="center" css={{ gap: '6px' }} cursor="pointer"
                                    fontSize="lg" fontWeight="medium" borderBottom={index < filteredSuggestions.length - 1 ? "#CCCCCC 0.5px solid" : 0} >
                                    <FaMapMarkerAlt />{suggestion.name}
                                </ListItem>
                            )
                        })}

                    </List>
                </Box>
            )
        }

    }


    return (
        <Container position="relative">
            <Input placeholder="Procure por sua cidade..." size="md" flexBasis="50%" type="text" onInput={((e) => handleSearchInput(e))} />
            {renderSuggestion()}
        </Container >

    )
}
