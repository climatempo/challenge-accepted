import GlobalStyles from "./GlobalStyles"
import AppProvider from "./providers"
import Router from "./Router"

const App = () => {
	return (
		<AppProvider>
			<GlobalStyles />
			<Router />
		</AppProvider>
	)
}

export default App
