import { useState, useEffect } from 'react';

import MyContext from './context';
import getAuthorizationToken from '../api/getAuthorizationToken';

import Header from '../Components/Header';

export default function ContextProvider({ children }) {
  const [token, setToken] = useState('');

  // getting all the weathers in 'db', for appearing in the homepage
  useEffect(() => {
    // this function will runs when someone open the homepage
    // so we can fetch here the things we are going to use in the whole application
    // like the authorization header token
    const getToken = async () => {
      const { token: authorizationToken } = await getAuthorizationToken();
      setToken(authorizationToken);
    };
    getToken();
  }, []);

  // the name of the searched city will also appear in the header
  const [actualCity, setActualCity] = useState('');

  // if hasSearch === true, the homepage default message, will disappear
  // and the weathers from the searched city, will appear
  const [hasSearch, setHasSearch] = useState(false);

  const [weathers, setWeathers] = useState([]);

  const value = {
    token,

    // city and state 'city - state'
    actualCity,
    setActualCity,

    weathers,
    setWeathers,

    hasSearch,
    setHasSearch,
  };

  return (
    <MyContext.Provider value={value}>
      {/* Same if exists someone searching for a white space, it will not make the subtitle header disappears*/}
      <Header
        city={value.actualCity}
        setHasSearch={setHasSearch}
        setActualCity={setActualCity}
        setWeathers={setWeathers}
      />
      {children}
    </MyContext.Provider>
  );
}
