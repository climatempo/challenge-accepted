import React from 'react';

import { Container, Logo } from './styles';

import logo from '../../assets/img/logo-white.png';

export default function Header() {
	return (
		<Container>
			<Logo source={logo} />
		</Container>
	);
}
