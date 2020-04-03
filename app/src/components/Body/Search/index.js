import React, { useRef } from 'react';

import { Container, Input, Button, ButtonImage } from './styles';

import search from '../../../assets/img/icons/search.png';

export default function Search({ handleSubmit }) {
	const inputRef = useRef();

	return (
		<Container>
			<Input ref={inputRef} placeholder="Osasco" />
			<Button onPress={() => handleSubmit(inputRef)}>
				<ButtonImage source={search} />
			</Button>
		</Container>
	);
}
