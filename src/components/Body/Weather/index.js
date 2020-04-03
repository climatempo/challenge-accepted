import React from 'react';

import {
	Container,
	Header,
	Date,
	Text,
	Body,
	Icon,
	Value,
	Group
} from './styles';

import max from '../../../assets/img/icons/upload.png';
import min from '../../../assets/img/icons/download.png';
import drop from '../../../assets/img/icons/raindrop.png';
import umbrella from '../../../assets/img/icons/umbrella.png';

const dateFormatter = new Intl.DateTimeFormat('pt-BR');

export default function Weather({ date, text, temperature, rain }) {
	const dateFormatted = dateFormatter.format(new window.Date(date));

	return (
		<Container>
			<Header>
				<Date>{dateFormatted}</Date>
				<Text>{text}</Text>
			</Header>
			<Body>
				<Group>
					<Icon src={max} alt="Ícone de temperatura máxima" />
					<Value maxTemperature>{temperature.max}ºC</Value>
				</Group>

				<Group>
					<Icon src={min} alt="Ícone de temperatura mínima" />
					<Value minTemperature>{temperature.min}ºC</Value>
				</Group>

				<Group>
					<Icon src={drop} alt="Ícone de preciptação" />
					<Value>{rain.precipitation}mm</Value>
				</Group>

				<Group>
					<Icon src={umbrella} alt="Ícone de probabilidade" />
					<Value>{rain.probability}%</Value>
				</Group>
			</Body>
		</Container>
	);
}
