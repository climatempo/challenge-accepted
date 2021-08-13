import { Button, Container, Stack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { PreferencesContext } from '../../providers/preferences'

export const ChangeValueUnit: React.FC<{ variant: 'modal' | 'page', unitType: 'temperature' | 'rain' }> = ({ unitType, variant }) => {

    const { preferences, setPreferences } = useContext(PreferencesContext)

    const handleTemperatureUnit = (unit: 'c' | 'f') => {
        setPreferences({ temperatureUnit: unit, rainUnit: preferences.rainUnit })
    }

    const handleRainUnit = (unit: 'mm' | 'inch') => {
        setPreferences({ rainUnit: unit, temperatureUnit: preferences.temperatureUnit })
    }


    if (unitType === 'rain') {
        return (
            <Container maxW="container.xl">
                <Stack direction="row" mt={variant === "modal" ? "5" : "10"}>
                    <Button variant={preferences.rainUnit === 'mm' ? "solid" : 'outline'}
                        size={variant === "modal" ? "md" : "lg"}
                        p={variant === "modal" ? "none" : "5"}
                        mr="3"
                        shadow="md"
                        onClick={() => handleRainUnit('mm')} >
                        mm
                    </Button>
                    <Button variant={preferences.rainUnit === 'inch' ? "solid" : 'outline'}
                        size={variant === "modal" ? "md" : "lg"}
                        p={variant === "modal" ? "none" : "5"}
                        shadow="md"
                        onClick={() => handleRainUnit('inch')}>
                        inch
                    </Button>
                </Stack >
            </Container >
        )
    }

    return (
        <Container maxW="container.xl">
            <Stack direction="row" mt={variant === "modal" ? "5" : "10"}>
                <Button variant={preferences.temperatureUnit === 'c' ? "solid" : 'outline'}
                    size={variant === "modal" ? "md" : "lg"}
                    p={variant === "modal" ? "none" : "5"}
                    mr="3"
                    shadow="md"
                    onClick={() => handleTemperatureUnit('c')} >
                    Cº
                </Button>
                <Button variant={preferences.temperatureUnit === 'f' ? "solid" : 'outline'}
                    size={variant === "modal" ? "md" : "lg"}
                    p={variant === "modal" ? "none" : "5"}
                    shadow="md"
                    onClick={() => handleTemperatureUnit('f')}>
                    Fº
                </Button>
            </Stack >
        </Container >
    )

}