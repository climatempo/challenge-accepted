import styled from "styled-components"

export const Main = styled.main`
	width: 100vw;
	height: calc(100vh - 11rem);
	margin-top: 11rem;
	display: flex;
	flex-direction: column;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		height: calc(100vh - 7rem);
		margin-top: 7rem;
	}
`

export const Container = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
`
