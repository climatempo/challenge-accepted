import React from 'react';

import Container from '../Container';
import { Wrapper } from './styles';

import logo from '../../assets/img/logo-white.png';

export default function Header() {
	return (
		<Wrapper>
			<Container>
				<img src={logo} alt="Logomarca da Climatempo" />
			</Container>
		</Wrapper>
	);
}
