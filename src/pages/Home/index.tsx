import { useEffect, useState } from "react";
import SearchIcon from "../../images/icons/search.png";
import Arrow from "../../images/icons/upload.png";
import { Header } from "../../components/Header";
import { WeatherCard } from "../../components/WeatherCard";
import { ILocale } from "../../types/Locale";
import * as C from "./styles";
import { useApi } from "../../hooks/useApi";
import { IWeather } from "../../types/Weather";

export const Home = () => {
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState<IWeather | null>(null);

    const api = useApi();
    const { locales } = api.getLocales<ILocale[]>("locales");

    const filteredSearch = search.length > 0 ?
        locales?.filter(value => {
            return value.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(
                search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            );
        }) : [];
    //assigns the filteredSearch directly to variable instead useState. Brings optimization and removes unnecessary renders

    async function handleAutocompleteClick(id: number) {
        setWeather(null);
        let response = await api.getWeather("weather", id);
        response && setWeather(response);
        setSearch('');
    };

    return (
        <C.Container>
            <Header />
            <C.SearchArea>
                <C.Search>
                    <C.Input
                        type="text"
                        placeholder="Busque por uma cidade..."
                        aria-label="Search field"
                        value={search}
                        onChange={e => setSearch(e.target.value.replace(/[0-9!@#$%^&*¨()_+\-=\[\]{};':"\\|,.<>\/?]/, ''))}
                    />
                    <C.SearchLogo
                        src={SearchIcon}
                        alt="Search icon"
                    />
                </C.Search>
            </C.SearchArea>
            <C.Body>
                <C.AutocompleteArea>
                    {search.length > 0 &&
                        filteredSearch && filteredSearch.length > 0 &&
                        filteredSearch.map(item => (
                            <C.AutocompleteElement
                                key={item.id}
                                onClick={() => handleAutocompleteClick(item.id)}
                            >
                                <span>{item.name}</span>
                                <img src={Arrow} alt="Arrow icon" />
                            </C.AutocompleteElement>
                        ))
                    }
                </C.AutocompleteArea>
                {weather !== null &&
                    <>
                        <C.Title>Previsão para {weather.locale.name} - {weather.locale.state}</C.Title>
                        <C.CardsArea>
                            {weather.weather.map((item, index) => (
                                <WeatherCard item={item} key={index} />
                            ))}
                        </C.CardsArea>
                    </>
                }
            </C.Body>
        </C.Container>
    );
};