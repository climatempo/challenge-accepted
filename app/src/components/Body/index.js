import React from 'react';

import Search from './Search';
import Weather from './Weather';
import { Container, Title } from './styles';

export default function Body() {
	return (
		<>
			<Search />
			<Container>
				<Title>Previsão para Osasco - SP</Title>
				<Weather />
				<Weather />
			</Container>
		</>
	);
}
