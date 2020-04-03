import React, { useState, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';

import Search from './Search';
import Weather from './Weather';
import { Container, Title, NoMatch } from './styles';

import api from '../../services/api';

export default function Body() {
	const [loading, setLoading] = useState(false);
	const [weathers, setWeathers] = useState([]);

	const handleSubmit = useCallback((ref) => {
		setLoading(true);
		let value = ref.current._lastNativeText;
		value = value ? value.trim() : '';

		api.get(`/weather?q=${value}&_page=1&_limit=3`).then(({ data }) => {
			setWeathers(data);
			setLoading(false);
		});
	}, []);

	return (
		<>
			<Search handleSubmit={handleSubmit} />

			<Container>
				{loading ? (
					<ActivityIndicator size="large" />
				) : weathers.length === 0 ? (
					<NoMatch>Nenhuma previsão encontrada</NoMatch>
				) : (
					<React.Fragment>
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
					</React.Fragment>
				)}
			</Container>
		</>
	);
}
