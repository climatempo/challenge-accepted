import * as S from "./styles"

const Card = () => {
	return (
		<S.Container>
			<S.UpperContainer>
				<S.Date>01/01/2021</S.Date>
				<S.WeatherDescription>
					Sol com muitas nivens durante o dia. Periodos de nublado,
					com chuva a qualquer hora
				</S.WeatherDescription>
			</S.UpperContainer>
			<S.LowerContainer>
				<S.Temperature>
					<S.Wrapper>
						<S.UpArrowIcon />
						<S.MaxTemperature> 20°C</S.MaxTemperature>
					</S.Wrapper>
					<S.Wrapper>
						<S.DownArrowIcon />
						<S.MinTemperature> 10°C</S.MinTemperature>
					</S.Wrapper>
				</S.Temperature>
				<S.Rain>
					<S.Wrapper>
						<S.DropIcon />
						<p> 10mm</p>
					</S.Wrapper>
					<S.Wrapper>
						<S.UmbrellaIcon />
						<p> 50%</p>
					</S.Wrapper>
				</S.Rain>
			</S.LowerContainer>
		</S.Container>
	)
}

export default Card
