import React, { useEffect, useState } from 'react';

import isMobile from 'ismobilejs';

import WeatherService from '../../services/weather.service';
import LocaleService from '../../services/locale.service';

import { 
  Container,
  Header,
  Logo,
  Search,
  Title,
  WeatherList,
  WeatherCard
} from './styles';

import { Suggestion } from '../../components';
import Data from './Data'

import { Images } from '../../assets'

import './search.css'

export default function Weather() {
  const [name, setName] = useState('');
  const [locales, setLocales] = useState([]);
  const [suggestionId, setSuggestionId] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await searchLocales(name);
    }

    fetchData();
  }, []);

  async function searchLocales(name) {
    try {
      const { data } = await LocaleService.getLocale(name);
      setLocales(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function searchWeather(id) {
    try {
      const { data } = await WeatherService.getWeather(id);
      setWeather(data)
    } catch (error) {
      console.log(error);
    }
  }

  function handleSuggestion(e) {
    setSuggestionId(e.id)
    return e.name
  }

  function handleSuggestionSelected(e, { suggestion }) {
    searchWeather(suggestion.id)
  }

  function renderSuggestion(suggestion) {
    return <Suggestion suggestion={suggestion}/>;
  }

  function formattDate(date) {
    return new Date(date).toLocaleDateString('pt-BR')
  }

  function renderWeather() {
    const { locale, weather: weathers } = weather[0]
    console.log(weather)
 
    return (
      <>
        <Title>{`Previsão para ${locale.name}, ${locale.state}`}</Title>
        <WeatherList>
          {weathers.map((w, key) => (
            <WeatherCard 
              index={key}
              title={formattDate(w.date)} 
              subtitle={w.text}
            >
              <Data weather={w}/>
            </WeatherCard>
          ))}
        </WeatherList>
      </>
    )
  }

  return (
    <Container>
      <Header>
        <Logo src={Images.logo}/>
      </Header>

      <Search
        suggestions={locales}
        onSuggestionsFetchRequested={(e) => searchLocales(e.value)}
        onSuggestionsClearRequested={() => setLocales([])}
        focusInputOnSuggestionClick={!isMobile}
        getSuggestionValue={handleSuggestion}
        onSuggestionSelected={handleSuggestionSelected}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: 'Buscar...',
          value: name,
          onChange: (e, { newValue }) => setName(newValue)
        }}
      />
      {weather && (
        renderWeather()
      )} 

    </Container>
  );
}