import styled from "styled-components"

export const Wrapper = styled.div`
	width: 100%;
	height: auto;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	padding: 2.5rem 2rem;

	> h1 {
		font-size: 2.4rem;
		font-weight: 500;
		color: var(--primary-text-color);
		margin-bottom: 2.5rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		align-items: center;
	}
`

export const Container = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	gap: 2.5rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		align-items: center;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		flex-direction: row;
		justify-content: center;
		align-items: stretch;
		flex-wrap: wrap;
	}
`
