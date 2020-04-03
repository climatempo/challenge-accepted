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

export default function Weather({ date, text, temperature, rain }) {
	return (
		<Container>
			<Header>
				<Date>{date}</Date>
				<Text>{text}</Text>
			</Header>
			<Body>
				<Group>
					<Icon source={max} />
					<Value maxTemperature>{temperature.max}ºC</Value>
				</Group>

				<Group>
					<Icon source={min} />
					<Value minTemperature>{temperature.min}ºC</Value>
				</Group>

				<Group mt>
					<Icon source={drop} />
					<Value>{rain.precipitation}mm</Value>
				</Group>

				<Group mt>
					<Icon source={umbrella} />
					<Value>{rain.probability}%</Value>
				</Group>
			</Body>
		</Container>
	);
}
