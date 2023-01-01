import { useState } from "react"
import { toast } from "react-toastify"

import { localesApi } from "../../services"

import * as S from "./styles"

const SearchBar = () => {
	const [search, setSearch] = useState(false)
	const [locales, setLocales] = useState([])

	const handleSearch = value => {
		if (value.length >= 3) {
			setSearch(value)
			localesApi
				.getLocales(value)
				.then(({ data }) => {
					console.log(data)
					setLocales(data)
				})
				.catch(error => {
					console.log(error)
					toast.error(
						"Erro ao buscar localidades, tente novamente mais tarde."
					)
				})
		} else if (value.length === 0) {
			setSearch(false)
			setLocales([])
		}
	}

	return (
		<S.Container searching={locales.length}>
			<S.Wrapper>
				<S.SearchContainer>
					<input
						type="text"
						onChange={e => handleSearch(e.target.value)}
					/>
				</S.SearchContainer>
				<S.SearchIcon />
			</S.Wrapper>
			<S.SearchResults>
				{locales.map(({ id, name, state }) => (
					<S.Result key={id}>
						{name} - {state}
					</S.Result>
				))}
				{/* <S.Result>Osasco - SP</S.Result>
				<S.Result>Osasco - SP</S.Result>
				<S.Result>Osasco - SP</S.Result>
				<S.Result>Osasco - SP</S.Result> */}
			</S.SearchResults>
		</S.Container>
	)
}

export default SearchBar
