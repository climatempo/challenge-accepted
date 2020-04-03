import React, { useCallback } from 'react';

import Container from '../Container';
import Search from './Search';
import Weather from './Weather';
import { Wrapper, Title } from './styles';

export default function Body() {
	const handleSubmit = useCallback(event => {
		event.preventDefault();
		alert('Form submit');
	}, []);

	return (
		<>
			<Search handleSubmit={handleSubmit} />
			<Wrapper>
				<Container>
					<Title>Previsão para Osasco - SP</Title>
					<Weather />
					<Weather />
				</Container>
			</Wrapper>
		</>
	);
}
