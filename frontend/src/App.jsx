import { useEffect, useState } from 'react';
import { AutoComplete, Input, Button } from 'antd';
import Header from './components/Header';
import requestBody from './utils/requestBody';

import './styles/global.css';
import WeatherCard from './components/WeatherCard';

function App() {
  const [locales, setLocales] = useState([]);
  const [weathers, setWeathers] = useState([]);

  const [locale, setLocale] = useState();
  const [weather, setWeather] = useState();

  const [isTemperatureInCelsius, setIsTempreatureInCelsius] = useState(true);
  const [isPrecipitationInMM, setIsPrecipitationInMM] = useState(true);

  function handleSearch(searchValue) {
    const localeSearched = locales.find(
      localeItem => localeItem.name.toLowerCase() === searchValue.toLowerCase(),
    );

    if (!localeSearched) {
      setLocale(undefined);
      setWeather(undefined);
      return;
    }

    const findLocale = locales.find(
      localeItem => localeItem._id === localeSearched._id,
    );
    setLocale(findLocale);
    if (findLocale) {
      const weatherFromLocale = weathers.find(
        weatherItem => weatherItem.locale_id === findLocale._id,
      );
      setWeather(weatherFromLocale);
    }
  }

  useEffect(() => {
    fetch('http://localhost:3333/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response =>
      response.json().then(responseData => {
        setLocales(responseData.data.locales);
        setWeathers(responseData.data.weathers);
      }),
    );
  }, []);

  return (
    <>
      <Header />
      <div className="containerInput">
        <div>
          <AutoComplete
            className="input"
            options={locales?.map(localeItem => ({ value: localeItem.name }))}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
            backfill
          >
            <Input.Search
              name="inputSearch"
              size="large"
              placeholder="Digite uma localização"
              enterButton
              onSearch={e => handleSearch(e)}
            />
          </AutoComplete>
        </div>
      </div>

      <main>
        {locale ? (
          <>
            <div>
              <span>{`Previsão para ${locale.name} - ${locale.state}`}</span>
              <div>
                <Button
                  onClick={() =>
                    setIsTempreatureInCelsius(!isTemperatureInCelsius)
                  }
                >
                  {`Temperatura em ${isTemperatureInCelsius ? '°F' : '°C'}`}
                </Button>
                <Button
                  onClick={() => setIsPrecipitationInMM(!isPrecipitationInMM)}
                >
                  {`Precipitação em ${isPrecipitationInMM ? 'Inch' : 'MM'}`}
                </Button>
              </div>
            </div>
            <div>
              {weather.weather.map(weatherItem => (
                <div key={weatherItem.date}>
                  <WeatherCard
                    isCelsius={isTemperatureInCelsius}
                    isMM={isPrecipitationInMM}
                    weather={weatherItem}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <p>Sem resultados, faça uma nova busca.</p>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
