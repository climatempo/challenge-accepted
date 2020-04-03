import styled from 'styled-components/native';

export const Container = styled.ScrollView`
	background-color: #e0e0e0;
	flex: 1;
`;

Container.defaultProps = {
	contentContainerStyle: {
		padding: 16,
	},
};

export const Title = styled.Text`
	font-size: 20px;
	margin-bottom: 16px;
`;
