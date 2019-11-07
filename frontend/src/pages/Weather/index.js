import React, { useEffect, useState } from 'react';

import isMobile from 'ismobilejs';

import WeatherService from '../../services/weather.service';
import LocaleService from '../../services/locale.service';
import { 
  Container,
  Header,
  Logo,
  Search
} from './styles';
import { Suggestion } from '../../components';

import { Images } from '../../assets'

import './search.css'

export default function Weather() {
  const [name, setName] = useState('');
  const [locales, setLocales] = useState([]);
  const [suggestionId, setSuggestionId] = useState('');
  const [weathers, setWeathers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await searchLocales(name);
    }

    fetchData();
  }, []);

  async function searchLocales(name) {
    try {
      const response = await LocaleService.getLocale(name);
      
      setLocales(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function searchWeater(id) {
    try {
      const response = await WeatherService.getWeather(id);
      console.log(response.data)
      // setLocales(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSuggestion(e) {
    setSuggestionId(e.id)
    return e.name
  }

  function handleSuggestionSelected() {
    searchWeater(suggestionId)
  }

  function renderSuggestion(suggestion) {
    return <Suggestion suggestion={suggestion}/>;
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
    </Container>
  );
}