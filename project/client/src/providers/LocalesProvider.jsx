import { createContext, useState } from "react"

import { localesApi } from "../services"

export const LocalesContext = createContext()

export const LocalesProvider = ({ children }) => {
	const [locales, setLocales] = useState([])

	const getLocales = async search => localesApi.getLocales(search)

	return (
		<LocalesContext.Provider
			value={{
				locales,
				setLocales,
				getLocales,
			}}
		>
			{children}
		</LocalesContext.Provider>
	)
}
