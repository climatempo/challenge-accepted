import Card from "../../components/Card"
import MainLayout from "../../layouts/MainLayout"

import * as S from "./styles"

const Home = () => {
	return (
		<MainLayout>
			<S.Container>
				<h1>Previsão para São Paulo - SP</h1>
				<Card />
				<Card />
				<Card />
			</S.Container>
		</MainLayout>
	)
}

export default Home
