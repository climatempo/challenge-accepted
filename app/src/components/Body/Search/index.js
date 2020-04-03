import React from 'react';

import { Container, Input, Button, ButtonImage } from './styles';

import search from '../../../assets/img/icons/search.png';

export default function Search() {
	return (
		<Container>
			<Input placeholder="Osasco" />
			<Button>
				<ButtonImage source={search} />
			</Button>
		</Container>
	);
}
