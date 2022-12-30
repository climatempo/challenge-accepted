import ThemeProvider from "./ThemeProvider"

const AppProvider = ({ children }) => {
	return <ThemeProvider>{children}</ThemeProvider>
}

export default AppProvider
