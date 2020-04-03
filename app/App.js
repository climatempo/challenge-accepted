import React from 'react';
import { StatusBar } from 'react-native';

import Header from './src/components/Header';
import Body from './src/components/Body';

export default function App() {
	return (
		<>
			<StatusBar hidden={true} />
			<Header />
			<Body />
		</>
	);
}
