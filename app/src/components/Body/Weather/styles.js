import styled from 'styled-components/native';

export const Container = styled.View`
	border-radius: 4px;
	elevation: 5;
	margin-bottom: 20px;
	overflow: hidden;
`;

export const Header = styled.View`
	background-color: #fff;
	padding: 12px;
`;

export const Date = styled.Text`
	font-size: 14px;
	margin-bottom: 8px;
`;

export const Text = styled.Text`
	font-size: 12px;
`;

export const Body = styled.View`
	background-color: #eeeeee;
	padding: 16px 12px;
	flex-flow: row wrap;
`;

export const Icon = styled.Image`
	height: 32px;
	margin-right: 16px;
	width: 32px;
`;

export const Value = styled.Text`
	color: ${(props) =>
		props.maxTemperature
			? '#1565c0'
			: props.minTemperature
			? '#c62828'
			: '#000'};
	font-size: 20px;
`;

export const Group = styled.View`
	align-items: center;
	flex-direction: row;
	margin-top: ${(props) => (props.mt ? '32px' : '0px')};
	flex-basis: 50%;
`;
