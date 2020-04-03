import React from 'react';

import Container from '../../Container';
import { Wrapper } from './styles';

import search from '../../../assets/img/icons/search.png';

export default function Search({ handleSubmit }) {
	return (
		<Wrapper>
			<Container>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Osasco" />
					<button type="submit">
						<img src={search} alt="Ícone de busca" />
					</button>
				</form>
			</Container>
		</Wrapper>
	);
}
