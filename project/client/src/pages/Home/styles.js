import styled from "styled-components"

export const Container = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	padding: 2.5rem 2rem;
	gap: 2.5rem;
	> h1 {
		font-size: 2.4rem;
		font-weight: 500;
		color: var(--primary-text-color);
		margin-bottom: 1.5rem;
	}
`
