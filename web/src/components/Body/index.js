import React, { useCallback, useState } from 'react';

import Container from '../Container';
import Search from './Search';
import Weather from './Weather';
import { Wrapper, Title, Message } from './styles';

import api from '../../services/api';

export default function Body() {
	const [loading, setLoading] = useState(false);
	const [weathers, setWeathers] = useState(null);

	const handleSubmit = useCallback((event) => {
		event.preventDefault();
		setLoading(true);

		const { value } = event.target.querySelector('input');
		api
			.get(`/weather?q=${value}&_page=1&_limit=3`)
			.then(({ data }) => {
				setWeathers(data);
			})
			.catch(() => setWeathers(null))
			.then(() => setLoading(false));
	}, []);

	return (
		<>
			<Search handleSubmit={handleSubmit} />
			<Wrapper>
				{loading ? (
					<Message>Carregando...</Message>
				) : weathers === null || weathers.length === 0 ? (
					<Message>Nenhum resultado encontrado</Message>
				) : (
					<Container>
						{weathers.map((item) => (
							<React.Fragment key={item.locale.id}>
								<Title>
									Previsão para {item.locale.name} - {item.locale.state}
								</Title>

								{item.weather.map((weather) => (
									<Weather
										key={`${item.locale.name}-${weather.date}`}
										{...weather}
									/>
								))}
							</React.Fragment>
						))}
					</Container>
				)}
			</Wrapper>
		</>
	);
}
