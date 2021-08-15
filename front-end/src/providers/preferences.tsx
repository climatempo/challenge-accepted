import React from 'react'
import { useState } from 'react'

export type Preferences = {
    temperatureUnit: 'c' | 'f'
    rainUnit: 'mm' | 'inch'
}

export interface IPreferencesContext {
    preferences: Preferences
    setPreferences: React.Dispatch<React.SetStateAction<Preferences>>
}

const DefaultPreferences: Preferences = {
    temperatureUnit: 'c',
    rainUnit: 'mm'
}

export const PreferencesContext = React.createContext<IPreferencesContext>({ preferences: DefaultPreferences, setPreferences: () => { } })

export const PreferencesProvider = (props: any) => {

    const [preferences, setPreferences] = useState(DefaultPreferences)
    
    return (
        <PreferencesContext.Provider value={{ preferences, setPreferences }}>
            {props.children}
        </PreferencesContext.Provider>
    )
}