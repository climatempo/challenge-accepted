import { ThemeProvider } from "styled-components"

const Theme = ({ children }) => {
	const breakpoints = {
		mobile: "480px",
		tablet: "768px",
		desktop: "1024px",
	}

	return <ThemeProvider theme={{ breakpoints }}>{children}</ThemeProvider>
}

export default Theme
