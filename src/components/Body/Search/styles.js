import styled from 'styled-components';

export const Wrapper = styled.aside`
	background-color: #fff;

	.container {
		padding-bottom: 0.5rem;
		padding-top: 0.5rem;
	}

	form {
		align-items: center;
		display: flex;
		justify-content: space-between;

		input {
			border: none;
			font-size: 1rem;
			width: 100%;
		}

		button {
			background: none;
			border: none;
			padding-left: 0.5rem;

			img {
				width: 1.5rem;
			}
		}
	}
`;
