import React from 'react';
import styled from 'styled-components';
import { WeatherInterface } from '../../store/types';
import { ReactComponent as RainDropSvg } from '../../img/wi-raindrop.svg';
import { ReactComponent as RainMixSvg } from '../../img/wi-rain-mix.svg';
import { ReactComponent as ThermometerSvg } from '../../img/wi-thermometer.svg';
import { ReactComponent as ThermometerExteriorSvg } from '../../img/wi-thermometer-exterior.svg';
import { connect } from 'react-redux';

class WeatherCard extends React.Component<Props, State> {

	constructor(props) {
		super(props);
	}

	render() {
		const { weather, temperature, rain, } = this.props;

		let minTemperature = weather.temperature.min;
		let maxTemperature = weather.temperature.max;
		let rainPrecipitation = weather.rain.precipitation;

		if (temperature === 'F') {
			minTemperature = parseFloat(((weather.temperature.min * 1.8) + 32).toFixed(2));
			maxTemperature = parseFloat(((weather.temperature.max * 1.8) + 32).toFixed(2));
		}

		if (rain === 'inch')
			rainPrecipitation = parseFloat((weather.rain.precipitation / 25.4).toFixed(2));
			

		return <Card>
			<ContainerFirst>
				<div>
					<Date>{ weather.date.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$3/$2/$1') }</Date>
					<Message>{ weather.text }</Message>
				</div>
				<ContainerDegrees>
					<FlexRow>
						<ThermometerExteriorIcon fill="white" />
						<MinDegree>{ minTemperature } °{temperature}</MinDegree>
					</FlexRow>
					<FlexRow>
						<ThermometerIcon fill="white"/>
						<MaxDegree>{ maxTemperature } °{temperature}</MaxDegree>
					</FlexRow>
				</ContainerDegrees>
			</ContainerFirst>
			<ContainerRain>
				<FlexRow>
					<RainDropIcon fill="white"/>
					<Text>{ rainPrecipitation + rain}</Text>
				</FlexRow>
				<FlexRow>
					<RainMixIcon fill="white"/>
					<Text>{ weather.rain.probability }%</Text>
				</FlexRow>
			</ContainerRain>
			
		</Card>;
	}
}

const RainDropIcon = styled(RainDropSvg)`
	width: 50px;
`;

const RainMixIcon = styled(RainMixSvg)`
	width: 50px;
`;

const ThermometerIcon = styled(ThermometerSvg)`
	width: 50px;
`;

const ThermometerExteriorIcon = styled(ThermometerExteriorSvg)`
	width: 50px;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	padding: 1em;
	border-radius: .5em;
	background-color: ${props => props.theme.glassBackground};
	backdrop-filter: blur(7px);
	max-width: 400px;
	box-shadow: ${props => props.theme.glassBoxShadow};
`;

const Text = styled.p`
	font-size: 1.7em;
	color: ${props => props.theme.white};
`;

const ContainerFirst = styled.div`
	display: flex;
	text-justify: justify;
	gap: .8em;
`;

const Date = styled.p`
	margin-bottom: .8em;
	color: ${props => props.theme.white};
	font-weight: bold;
`;

const Message = styled.p`
	color: ${props => props.theme.white};
	max-width: 200px;
`;

const ContainerDegrees = styled.div`
	display: flex;
	flex-direction: column;
	gap: .7em;
`;

const ContainerRain = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	gap: .7em;
`;

const FlexRow = styled.div`
	display: flex;
	align-items: center;
`;

const MinDegree = styled.span`
	font-size: 2em !important;
	color: blue;
	text-shadow: 1px 2px 0px rgba(0,0,0,0.2);
`;

const MaxDegree = styled.span`
	font-size: 2em !important;
	color: red;
	text-shadow: 1px 2px 0px rgba(0,0,0,0.2);
`;

type Props = {
	weather: WeatherInterface;
	temperature: string,
	rain: string,
}

type State = object;

const mapStateToProps = (state) => ({
	temperature: state.settings.temperature,
	rain: state.settings.rain,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);