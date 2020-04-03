import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0px;
		padding: 0px;
	}

	body, input, button {
		font-family: 'Roboto', sans-serif;
	}

	#root {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	* {
		box-sizing: border-box;
		outline: none;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	ul {
		list-style: none;
		margin: 0px;
		padding: 0px;
	}

	button {
		cursor: pointer;
	}
`;

export default GlobalStyle;
