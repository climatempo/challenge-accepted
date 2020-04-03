import React, { useState, useCallback } from 'react';

import Search from './Search';
import Weather from './Weather';
import { Container, Title } from './styles';

import api from '../../services/api';

export default function Body() {
	const [weathers, setWeathers] = useState([]);

	const handleSubmit = useCallback((ref) => {
		let value = ref.current._lastNativeText;
		value = value ? value.trim() : '';

		api.get(`/weather?q=${value}&_page=1&_limit=3`).then(({ data }) => {
			setWeathers(data);
		});
	}, []);

	return (
		<>
			<Search handleSubmit={handleSubmit} />

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
		</>
	);
}
