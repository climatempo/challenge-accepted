import React from 'react';
import styled from 'styled-components';
import WeatherCard from './WeatherCard';

class Weather extends React.Component {

	getCards() {
		const cards = [1,2,3,4];
		return cards;
	}

	render() {
		return (
			<Container>
				{this.getCards().map((c) => <WeatherCard key={c} />)}
			</Container>
		);
	}
}

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 3em;
	justify-content: space-evenly;
	gap: 3em;
`;

export default Weather;