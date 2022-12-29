import styled from "styled-components"
import { Search } from "@styled-icons/fluentui-system-filled/Search"

export const Container = styled.div`
	width: 100%;
	height: 6rem;
	display: flex;
	justify-content: space-between;
	padding: 1rem 1.5rem;
	box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
	background-color: var(--secondary-color);
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

export const SearchIcon = styled(Search)`
	width: auto;
	height: 100%;
	cursor: pointer;
`
