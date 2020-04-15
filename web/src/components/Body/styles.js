import styled from 'styled-components';

export const Wrapper = styled.main`
	background-color: #e0e0e0;
	flex: 1;

	.container {
		display: grid;
		grid-gap: 1rem;
	}
`;

export const Title = styled.h2`
	font-size: 1.25rem;
	font-weight: normal;
	margin: 0px;
`;

export const Message = styled.span`
	display: block;
	font-size: 0.875rem;
	margin: 2rem 0px;
	padding: 0px 0.5rem;
	text-align: center;
	width: 100%;
`;
