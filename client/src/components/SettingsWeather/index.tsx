import React from 'react';
import styled, { css } from 'styled-components';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import { setRain, setTemperature } from '../../store/actions/settings';
import { connect } from 'react-redux';
import device from '../../styles/device';

class SettingsWeather extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.onSettingsClick = this.onSettingsClick.bind(this);
		this.onChangeTemperature = this.onChangeTemperature.bind(this);
		this.onChangeRain = this.onChangeRain.bind(this);

		this.state = {
			containerShow: false,
		};
	}

	onSettingsClick() {
		this.setState({
			containerShow: !this.state.containerShow,
		});
	}

	onChangeTemperature(e) {
		console.log(e.target.value);
		this.props.setTemperature(e.target.value);
	}

	onChangeRain(e) {
		this.props.setRain(e.target.value);
	}

	render() {
		const { containerShow, } = this.state;
		const { temperature, rain, } = this.props;

		return (
			<SettingsWeatherDiv>
				<ThreeDotsContainer containerShow={containerShow} onClick={this.onSettingsClick}>
					<ThreeDotsIcon />
				</ThreeDotsContainer>
				
				{containerShow && (
					<SettingsContainer>
						<Text>Temperatura</Text>
						<RadioContainer>
							<RadioButton type="radio" name="temperature" value="C" onChange={this.onChangeTemperature} checked={temperature === 'C'}/>
							<TextRadioButton >°C</TextRadioButton>
						</RadioContainer>
						<RadioContainer>
							<RadioButton type="radio" name="temperature" value="F" onChange={this.onChangeTemperature} checked={temperature === 'F'}/>
							<TextRadioButton >°F</TextRadioButton>
						</RadioContainer>
						<hr />
						<Text>Chuva</Text>
						<RadioContainer>
							<RadioButton type="radio" name="rain" value="mm" onChange={this.onChangeRain} checked={rain === 'mm'}/>
							<TextRadioButton >mm</TextRadioButton>
						</RadioContainer>
						<RadioContainer>
							<RadioButton type="radio" name="rain" value="inch" onChange={this.onChangeRain} checked={rain === 'inch'}/>
							<TextRadioButton >inch</TextRadioButton>
						</RadioContainer>
					</SettingsContainer>
				)}
			</ SettingsWeatherDiv>
		);
	}
}

const SettingsWeatherDiv = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: .2em;
	align-items: center;
	justify-content: center;
	box-shadow: ${props => props.theme.glassBoxShadow};
	z-index: 2;
`;

const ThreeDotsContainer = styled.div<State>`
	display: flex;
	padding: .2em;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: .3s;
	background-color: ${props => props.containerShow ? props.theme.white : css`rgba(255, 255, 255, 0.3)`};
	border-radius: ${props => props.theme.glassRadius} !important;

	&:hover {
		background-color: ${props => props.theme.white};
	}
`;


const ThreeDotsIcon = styled(MoreHoriz)`
	
`;

const SettingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: .5em;
	position: absolute;
	top: 35px;
	min-width: 150px;
	left: 0;
	padding: 1em;
	background-color: ${props => props.theme.white};
	border-radius: ${props => props.theme.glassRadius} !important;
	box-shadow: ${props => props.theme.glassBoxShadow};
`;

const RadioContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1em;
`;

const TextRadioButton = styled.label`
	
`;

const Text = styled.p`
	font-size: .95em;
`;

const RadioButton = styled.input`
	&:after {
		width: 15px;
		height: 15px;
		border-radius: 15px;
		top: -2px;
		left: -1px;
		position: relative;
		background-color: #8e8e8e;
		content: '';
		display: inline-block;
		visibility: visible;
		border: 2px solid white;
	}

	&:checked:after {
		width: 15px;
		height: 15px;
		border-radius: 15px;
		top: -2px;
		left: -1px;
		position: relative;
		background-color: blue;
		content: '';
		display: inline-block;
		visibility: visible;
		border: 2px solid white;
	}
`;

type Props = {
	temperature: string,
	rain: string,
	setTemperature: (temperature: string) => void;
	setRain: (rain: string) => void;
};

type State = {
	containerShow: boolean;
}

const mapStateToProps = (state) => ({
	temperature: state.settings.temperature,
	rain: state.settings.rain,
});

const mapDispatchToProps = { setTemperature, setRain, };

export default connect(mapStateToProps, mapDispatchToProps)(SettingsWeather);