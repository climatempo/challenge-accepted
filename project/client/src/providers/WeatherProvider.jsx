import { createContext, useState } from "react"

import { weatherApi } from "../services"

export const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
	const [weather, setWeather] = useState([])
	const [locale, setLocale] = useState({})

	const getWeather = async (
		localeId = 2,
		startDate = "2017-02-01",
		endDate = "2017-02-07"
	) =>
		weatherApi.getWeather(localeId, {
			startDate,
			endDate,
		})

	return (
		<WeatherContext.Provider
			value={{
				weather,
				setWeather,
				getWeather,
				locale,
				setLocale,
			}}
		>
			{children}
		</WeatherContext.Provider>
	)
}
