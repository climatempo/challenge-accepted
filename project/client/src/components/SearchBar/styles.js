import styled from "styled-components"
import { Search } from "@styled-icons/fluentui-system-filled/Search"

export const SearchIcon = styled(Search)`
	width: auto;
	height: 100%;
	cursor: pointer;
`

export const Container = styled.div`
	width: 100%;
	height: 6rem;
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 1rem 1.5rem;
	box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
	background-color: var(--secondary-color);

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		max-width: 50rem;
		height: 4rem;
		position: fixed;
		top: 1.5rem;
		right: 1.5rem;
		border-radius: ${({ searching }) =>
			searching ? "0.5rem 0.5rem 0 0" : "0.5rem"};
	}
`

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`

export const SearchContainer = styled.div`
	width: 100%;
	height: 100%;
	input {
		width: 100%;
		height: 100%;
		font-size: 2rem;
		color: var(--secondary-text-color);
	}
`

export const SearchResults = styled.div`
	width: 100%;
	height: auto;
	max-height: 30rem;
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 6rem;
	left: 0;
	overflow-y: auto;
	border-radius: 0 0 0.5rem 0.5rem;
	box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
	/* background-color: var(--secondary-color); */
	background-color: red;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		top: 4rem;
	}
`

export const Result = styled.div`
	width: 100%;
	height: 3rem;
	padding: 0.5rem 1rem;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
	background-color: #f5f5f5;

	font-size: 1.5rem;

	:hover {
		background-color: #f1f1f1;
	}
`
