import Card from "../../components/Card"
import MainLayout from "../../layouts/MainLayout"

import * as S from "./styles"

const Home = () => {
	return (
		<MainLayout>
			<S.Wrapper>
				<h1>Previsão para São Paulo - SP</h1>
				<S.Container>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</S.Container>
			</S.Wrapper>
		</MainLayout>
	)
}

export default Home
