import React, { useCallback, useState } from 'react';

import Container from '../Container';
import Search from './Search';
import Weather from './Weather';
import { Wrapper, Title } from './styles';

import api from '../../services/api';

export default function Body() {
	const [weathers, setWeathers] = useState([]);

	const handleSubmit = useCallback(event => {
		event.preventDefault();
		const input = event.target.querySelector('input');
		const value = input.value;
		api.get(`/weather?q=${value}&_page=1&_limit=3`).then(({ data }) => {
			setWeathers(data);
		});
	}, []);

	return (
		<>
			<Search handleSubmit={handleSubmit} />
			<Wrapper>
				<Container>
					{weathers.map(item => (
						<React.Fragment key={item.locale.id}>
							<Title>
								Previsão para {item.locale.name} - {item.locale.state}
							</Title>

							{item.weather.map(weather => (
								<Weather
									key={`${item.locale.name}-${weather.date}`}
									{...weather}
								/>
							))}
						</React.Fragment>
					))}
				</Container>
			</Wrapper>
		</>
	);
}
