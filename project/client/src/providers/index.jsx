import ThemeProvider from "./ThemeProvider"
import { WeatherProvider } from "./WeatherProvider"
import { LocalesProvider } from "./LocalesProvider"

const AppProvider = ({ children }) => {
	return (
		<ThemeProvider>
			<LocalesProvider>
				<WeatherProvider>{children}</WeatherProvider>
			</LocalesProvider>
		</ThemeProvider>
	)
}

export default AppProvider
