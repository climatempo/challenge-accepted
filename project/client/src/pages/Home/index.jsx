import Card from "../../components/Card"
import MainLayout from "../../layouts/MainLayout"

import * as S from "./styles"

const Home = () => {
	return (
		<MainLayout>
			<S.Container>
				<Card />
			</S.Container>
		</MainLayout>
	)
}

export default Home
