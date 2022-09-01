import React, { useState } from "react";
import SearchIcon from "../../images/icons/search.png";
import Arrow from "../../images/icons/upload.png";
import { Header } from "../../components/Header";
import { WeatherCard } from "../../components/WeatherCard";
import { ILocale } from "../../types/Locale";
import * as C from "./styles";
import { useApi } from "../../hooks/useApi";
import { IWeather } from "../../types/Weather";

export const Home = () => {
    const [filterSearch, setFilterSearch] = useState<ILocale[]>();
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState<IWeather | null>(null);

    const api = useApi();
    const { locales } = api.getLocales<ILocale[]>("locales");

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const currentValue = event.target.value.replace(/[0-9!@#$%^&*¨()_+\-=\[\]{};':"\\|,.<>\/?]/, '')
        setSearch(currentValue);

        if (currentValue.length > 0) {
            const newFilter = locales?.filter(value => {
                return value.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(
                    search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
                );
            });
            setFilterSearch(newFilter);
        }
    };

    async function handleAutocompleteClick(id: number) {
        let response = await api.getWeather("weather", id);
        response && setWeather(response);
        setSearch('');
    }

    return (
        <C.Container>
            <Header />
            <C.Body>
                <C.Search>
                    <C.Input
                        type="text"
                        placeholder="Busque por uma cidade..."
                        aria-label="Search field"
                        value={search}
                        onChange={handleInputChange}
                    />
                    <C.SearchLogo
                        src={SearchIcon}
                        alt="Search icon"
                    />
                </C.Search>
                <C.AutoCompleteArea>
                    {search.length > 0 &&
                        filterSearch && filterSearch.length > 0 &&
                        filterSearch.map(item => (
                            <C.AutocompleteElement
                                key={item.id}
                                onClick={() => handleAutocompleteClick(item.id)}
                            >
                                <span>{item.name}</span>
                                <img src={Arrow} alt="Arrow icon" />
                            </C.AutocompleteElement>
                        ))
                    }
                </C.AutoCompleteArea>
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