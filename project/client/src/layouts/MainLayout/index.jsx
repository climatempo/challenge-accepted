import Header from "../../components/Header"
import SearchBar from "../../components/SearchBar"

import * as S from "./styles"

const MainLayout = ({ children }) => {
	return (
		<S.Main>
			<S.Container>
				<Header />
				<SearchBar />
			</S.Container>
			{children}
		</S.Main>
	)
}

export default MainLayout
