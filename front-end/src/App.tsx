import React, { useContext, useEffect } from 'react';
import { Header } from './components/sections/Header';
import { IFullWeatherInfo } from './types/interfaces';
import { useQuery } from '@apollo/client';
import { GET_WEATHER_DEFAULT_LOCALE } from './graphql/queries';
import { Banner } from './components/sections/Banner';
import { Cards } from './components/sections/Cards';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LocaleContent } from './components/sections/LocaleContent';
import { ChangeValueUnit } from './components/ui/ChangeValuesUnit';
import { PreferencesContext } from './providers/preferences';
import { ErrorModal } from './components/ui/ErrorModal';
import { Container, Heading, Text, useDisclosure } from '@chakra-ui/react';


const App = () => {

  const { preferences, setPreferences } = useContext(PreferencesContext)
  const { data, error, loading } = useQuery<{ weatherByLocaleNameOrId: IFullWeatherInfo }>(GET_WEATHER_DEFAULT_LOCALE, {
    variables: {
      temperatureUnit: preferences.temperatureUnit,
      rainUnit: preferences.rainUnit
    },
    errorPolicy: 'all'
  })
  const [weatherInfo, setWeatherInfo] = React.useState<IFullWeatherInfo>();
  const { isOpen, onOpen, onClose } = useDisclosure()


  useEffect(() => {
    if (data)
      setWeatherInfo(data.weatherByLocaleNameOrId);
    if (error)
      onOpen()
  }, [data, error, preferences])

  const renderWeatherInfo = () => {
    if (error) {
      if (error.networkError)
        error.message = "Houve um erro de conexão com servidor"
      return (
        <>
          <ErrorModal
            isOpen={isOpen}
            onClose={onClose}
            errorTitle="Erro com o carregamento dos dados" errorDescribe="Houve um problema com nossos servidores, desculpe!" />
          <Container maxW="container.xl" mt="10">
            <Heading size="md">Erro com o carregamento dos dados</Heading>
            <Text>{error.message ? error.message : 'Ocorreu um erro interno com o servidor😓, desculpe pelo transtorno.'}</Text>
            <Text>{ }</Text>
          </Container>
        </>)
    }
    if (weatherInfo) {
      return (
        <>
          <Banner locale={weatherInfo?.locale!} weather={weatherInfo?.weather[0]!} />
          <Cards weather={weatherInfo?.weather!} />
        </>
      )
    }
  }

  //
  return (
    <Router>
      <Header />
      <ChangeValueUnit variant="page" unitType="temperature"></ChangeValueUnit>
      <Switch>
        <Route exact path="/" >
          {loading ? 'loading...' : renderWeatherInfo()}
        </Route>
        <Route path="/previsao/:localeId" >
          <LocaleContent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;