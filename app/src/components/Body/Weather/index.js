import React from 'react';

import {
	Container,
	Header,
	Date,
	Text,
	Body,
	Icon,
	Value,
	Group,
} from './styles';

import max from '../../../assets/img/icons/upload.png';
import min from '../../../assets/img/icons/download.png';
import drop from '../../../assets/img/icons/raindrop.png';
import umbrella from '../../../assets/img/icons/umbrella.png';

export default function Weather() {
	return (
		<Container>
			<Header>
				<Date>01/02/2017</Date>
				<Text>
					Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a
					qualquer hora
				</Text>
			</Header>
			<Body>
				<Group>
					<Icon source={max} />
					<Value maxTemperature>20ºC</Value>
				</Group>

				<Group>
					<Icon source={min} />
					<Value minTemperature>10ºC</Value>
				</Group>

				<Group mt>
					<Icon source={drop} />
					<Value>10mm</Value>
				</Group>

				<Group mt>
					<Icon source={umbrella} />
					<Value>50%</Value>
				</Group>
			</Body>
		</Container>
	);
}
