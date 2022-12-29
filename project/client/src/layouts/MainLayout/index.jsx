import Header from "../../components/Header"
import SearchBar from "../../components/SearchBar"

import * as S from "./styles"

const MainLayout = ({ children }) => {
	return (
		<S.Container>
			<Header />
			<SearchBar />
			{children}
		</S.Container>
	)
}

export default MainLayout
