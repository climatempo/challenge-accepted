import { useEffect, useState } from "react"
import { toast } from "react-toastify"

import { weatherApi } from "../../services"

import Card from "../../components/Card"
import MainLayout from "../../layouts/MainLayout"

import * as S from "./styles"

const Home = () => {
	const [weather, setWeather] = useState([])
	useEffect(() => {
		weatherApi
			.getWeather(1, {
				startDate: "2017-02-01",
				endDate: "2017-02-07",
			})
			.then(({ data }) => {
				setWeather(data)
			})
			.catch(error => {
				console.log(error)
				toast.error(
					"Erro ao buscar dados do clima, tente novamente mais tarde."
				)
			})
	}, [])
	return (
		<MainLayout>
			<S.Wrapper>
				<h1>Previsão para São Paulo - SP</h1>
				<S.Container>
					{weather.map(
						({
							id,
							date,
							conditionText,
							maxTemperature,
							minTemperature,
							rainPrecipitation,
							rainProbability,
						}) => (
							<Card
								key={id}
								date={date}
								text={conditionText}
								maxTemp={maxTemperature}
								minTemp={minTemperature}
								rainPrecipitation={rainPrecipitation}
								rainProbability={rainProbability}
							/>
						)
					)}
				</S.Container>
			</S.Wrapper>
		</MainLayout>
	)
}

export default Home
