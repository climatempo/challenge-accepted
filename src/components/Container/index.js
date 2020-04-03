import styled from 'styled-components';

const Container = styled.div`
	margin: auto;
	max-width: 576px;
	padding: 1rem;
`;

Container.defaultProps = {
	className: 'container'
};

export default Container;
