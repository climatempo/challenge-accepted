import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { WeatherDetailsInterface } from '../../store/types';
import SettingsWeather from '../SettingsWeather';
import WeatherCard from '../WeatherCard';

class Weather extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.getCards = this.getCards.bind(this);
	}

	getCards() {
		return this.props.weatherDetails.weather;
	}

	render() {
		const { weatherDetails, } = this.props;

		if (!weatherDetails) {
			return (
				<Container>
					<WeatherNotFoundText>Selecione uma localidade...</WeatherNotFoundText>
				</Container>
			);
		}

		const { locale, } = weatherDetails;

		return (
			<WeatherDiv>
				<HeaderDiv>
					<Title>Previsão para {locale.name} - {locale.state}</Title>
					<SettingsWeather />
				</HeaderDiv>
				<Container>
					{this.getCards().map((w, i) => <WeatherCard key={i} weather={w} />)}
				</Container>
			</ WeatherDiv>
		);
	}
}

const WeatherDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const HeaderDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	justify-content: center;
	align-items: flex-start;
	padding: 2em;
`;

const WeatherNotFoundText = styled.h1`
	color: ${props => props.theme.white};
	text-shadow: 1px 2px 0px rgba(0,0,0,0.2);
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 3em;
	justify-content: center;
	gap: 3em;
`;

const Title = styled.h1`
	font-size: 1.8em;
	color: white;
`;

type State = object;

type Props = {
	weatherDetails: WeatherDetailsInterface;
}

const mapStateToProps = (state) => ({
	weatherDetails: state.weather.weatherDetails,
});

export default connect(mapStateToProps)(Weather);