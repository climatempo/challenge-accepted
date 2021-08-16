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

/**
 * Contexto de preferências do usuário
 * @implements {IPreferencesContext} 
 */
export const PreferencesContext = React.createContext<IPreferencesContext>({ preferences: DefaultPreferences, setPreferences: () => { } })

export const PreferencesProvider: React.FC<{}> = ({ children }) => {

    const [preferences, setPreferences] = useState(DefaultPreferences)

    return (
        <PreferencesContext.Provider value={{ preferences, setPreferences }}>
            {children}
        </PreferencesContext.Provider>
    )
}