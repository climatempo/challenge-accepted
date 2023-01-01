import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import GlobalStyles from "./GlobalStyles"
import AppProvider from "./providers"
import Router from "./Router"

const App = () => {
	return (
		<AppProvider>
			<GlobalStyles />
			<Router />
			<ToastContainer />
		</AppProvider>
	)
}

export default App
