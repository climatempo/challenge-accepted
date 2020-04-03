import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Body from './components/Body';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Body />
		</>
	);
}
