import React, { useEffect } from 'react';
import { Header } from './components/sections/Header';
import { IFullWeatherInfo } from './types/interfaces';
import { useQuery } from '@apollo/client';
import { GET_WEATHER_DEFAULT_LOCALE } from './graphql/queries';
import { Banner } from './components/sections/Banner';
import { Cards } from './components/sections/Cards';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LocaleContent } from './components/sections/LocaleContent';


const App = () => {
  const { data } = useQuery<{ weatherByLocaleNameOrId: any }>(GET_WEATHER_DEFAULT_LOCALE)
  const [weatherInfo, setWeatherInfo] = React.useState<IFullWeatherInfo>();

  useEffect(() => {
    if (data) {
      setWeatherInfo(data?.weatherByLocaleNameOrId);
    }
  }, [data])

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" >
          {weatherInfo ? <Banner locale={weatherInfo?.locale!} weather={weatherInfo?.weather[0]!} /> : 'Loading...'}
          {weatherInfo ? <Cards weather={weatherInfo?.weather!} /> : 'Loading...'}
        </Route>
        <Route path="/previsao/:localeId" >
          <LocaleContent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
