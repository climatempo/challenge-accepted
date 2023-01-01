import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"

import { WeatherContext } from "../../providers/WeatherProvider"

import Card from "../../components/Card"
import MainLayout from "../../layouts/MainLayout"

import * as S from "./styles"

const Home = () => {
	const { weather, setWeather, getWeather, locale, setLocale } =
		useContext(WeatherContext)

	useEffect(() => {
		getWeather()
			.then(({ data }) => {
				setWeather(data.weather)
				setLocale(data.locale)
			})
			.catch(error => {
				console.log(error)
				toast.error(
					"Não foi possível carregar os dados do clima, tente novamente mais tarde."
				)
			})
	}, [])
	return (
		<MainLayout>
			<S.Wrapper>
				<h1>
					Previsão para {locale?.name} - {locale?.state}
				</h1>
				<S.Container>
					{weather?.map(
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
