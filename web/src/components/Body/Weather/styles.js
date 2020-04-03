import styled from 'styled-components';

export const Container = styled.section`
	border-radius: 4px;
	box-shadow: 0px 3px 10px #bbb;
	overflow: hidden;
`;

export const Header = styled.header`
	background-color: #fff;
	padding: 0.75rem;
`;

export const Date = styled.h4`
	font-size: 0.875rem;
	font-weight: normal;
	margin: 0px;
	margin-bottom: 0.5rem;
`;

export const Text = styled.h3`
	font-size: 0.75rem;
	font-weight: normal;
	margin: 0px;
`;

export const Body = styled.div`
	background-color: #eeeeee;
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(2, 1fr);
	padding: 1rem 0.75rem;
`;

export const Icon = styled.img`
	margin-right: 1rem;
	width: 2rem;
`;

export const Value = styled.h4`
	color: ${props =>
		props.maxTemperature
			? '#1565c0'
			: props.minTemperature
			? '#c62828'
			: 'inherit'};
	font-size: 1.25rem;
	font-weight: normal;
	margin: 0px;
`;

export const Group = styled.div`
	align-items: center;
	display: flex;
`;
