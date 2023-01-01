import { useContext, useState } from "react"
import { toast } from "react-toastify"

import { LocalesContext } from "../../providers/LocalesProvider"
import { WeatherContext } from "../../providers/WeatherProvider"

import * as S from "./styles"

const SearchBar = () => {
	const { locales, setLocales, getLocales } = useContext(LocalesContext)
	const { setWeather, setLocale, getWeather } = useContext(WeatherContext)
	const [search, setSearch] = useState("")

	const handleSearch = value => {
		if (value.length >= 3) {
			getLocales(value)
				.then(({ data }) => {
					setLocales(data)
				})
				.catch(error => {
					console.log(error)
					toast.error(
						"Erro ao buscar localidades, tente novamente mais tarde."
					)
				})
		} else if (value.length === 0) {
			setLocales([])
		}
	}

	return (
		<S.Container searching={locales.length}>
			<S.Wrapper>
				<S.SearchContainer>
					<input
						type="text"
						value={search}
						onChange={e => {
							setSearch(e.target.value)
							handleSearch(e.target.value)
						}}
					/>
				</S.SearchContainer>
				<S.SearchIcon />
			</S.Wrapper>
			<S.SearchResults>
				{locales.map(({ id, name, state }) => (
					<S.Result
						key={id}
						onClick={() => {
							getWeather(id)
								.then(({ data }) => {
									setWeather(data.weather)
									setLocale(data.locale)
									setLocales([])
									setSearch("")
								})
								.catch(error => {
									console.log(error)
									toast.error(
										"Erro ao buscar previsão do tempo, tente novamente mais tarde."
									)
								})
						}}
					>
						{name} - {state}
					</S.Result>
				))}
			</S.SearchResults>
		</S.Container>
	)
}

export default SearchBar
