import { Button, Container, Stack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useState } from 'react'
import { PreferencesContext } from '../../providers/preferences'

export const ChangeValueUnit = () => {

    const { preferences, setPreferences } = useContext(PreferencesContext)

    const handleTemperatureUnit = (unit: 'c' | 'f') => {
        setPreferences({ temperatureUnit: unit, rainUnit: preferences.rainUnit })
    }
    const handleRainUnit = (unit: 'mm' | 'inch') => {
        setPreferences({ rainUnit: unit, temperatureUnit: preferences.temperatureUnit })
    }

    return (
        <Container maxW="container.xl">
            <Stack direction="row" mt="10">
                <Button variant={preferences.temperatureUnit === 'c' ? "solid" : 'outline'} size="lg" p="5" mr="3" shadow="md" onClick={() => handleTemperatureUnit('c')}>Cº</Button>
                <Button variant={preferences.temperatureUnit === 'f' ? "solid" : 'outline'} size="lg" p="5" shadow="md" onClick={() => handleTemperatureUnit('f')}>Fº</Button>
            </Stack>
        </Container>
    )
}