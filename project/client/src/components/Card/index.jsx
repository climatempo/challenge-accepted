import { formatDate } from "../../utils/dateUtils"

import * as S from "./styles"

const Card = ({
	date,
	text,
	maxTemp,
	minTemp,
	rainPrecipitation,
	rainProbability,
}) => {
	return (
		<S.Container>
			<S.UpperContainer>
				<S.Date>{formatDate(date)}</S.Date>
				<S.WeatherDescription>{text}</S.WeatherDescription>
			</S.UpperContainer>
			<S.LowerContainer>
				<S.Temperature>
					<S.Wrapper>
						<S.UpArrowIcon />
						<S.MaxTemperature> {maxTemp}°C</S.MaxTemperature>
					</S.Wrapper>
					<S.Wrapper>
						<S.DownArrowIcon />
						<S.MinTemperature> {minTemp}°C</S.MinTemperature>
					</S.Wrapper>
				</S.Temperature>
				<S.Rain>
					<S.Wrapper>
						<S.DropIcon />
						<p> {rainPrecipitation}mm</p>
					</S.Wrapper>
					<S.Wrapper>
						<S.UmbrellaIcon />
						<p> {rainProbability}%</p>
					</S.Wrapper>
				</S.Rain>
			</S.LowerContainer>
		</S.Container>
	)
}

export default Card
