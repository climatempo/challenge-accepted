import {  BeachAccessRounded, NorthRounded, OpacityRounded, SouthRounded } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

class WeatherCard extends React.Component {

	render() {
		return <Card>
			<ContainerFirst>
				<div>
					<Date>01/12/2022</Date>
					<Message>Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.</Message>
				</div>
				<ContainerDegrees>
					<FlexRow>
						<SouthArrowIcon />
						<MinDegree>22°C</MinDegree>
					</FlexRow>
					<FlexRow>
						<NorthArrowIcon />
						<MaxDegree>39°C</MaxDegree>
					</FlexRow>
				</ContainerDegrees>
			</ContainerFirst>
			<ContainerRain>
				<FlexRow>
					<OpacityIcon />
					<Text>10mm</Text>
				</FlexRow>
				<FlexRow>
					<UmbrellaIcon />
					<Text>50%</Text>
				</FlexRow>
			</ContainerRain>
			
		</Card>;
	}
}

const Card = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	padding: 1em;
	border-radius: .5em;
	background-color: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(7px);
	max-width: 400px;
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
	color: red;
	text-shadow: 1px 2px 0px rgba(0,0,0,0.2);
`;

const MaxDegree = styled.span`
	font-size: 2em !important;
	color: blue;
	text-shadow: 1px 2px 0px rgba(0,0,0,0.2);
`;

const SouthArrowIcon = styled(SouthRounded)`
	font-size: 2.5em !important;
	color: ${props => props.theme.white};
`;

const NorthArrowIcon = styled(NorthRounded)`
	font-size: 2.5em !important;
	color: ${props => props.theme.white};
`;

const OpacityIcon = styled(OpacityRounded)`
	font-size: 3em !important;
	color: ${props => props.theme.white};
`;

const UmbrellaIcon = styled(BeachAccessRounded)`
	font-size: 3em !important;
	color: ${props => props.theme.white};
`;

export default WeatherCard;