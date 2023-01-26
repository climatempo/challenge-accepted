import MyContext from './context';

import Header from '../Components/Header';
import { useState } from 'react';

export default function ContextProvider({ children }) {
  const [actualCity, setActualCity] = useState(' ');

  const value = {
    actualCity,
    setActualCity,
  };

  return (
    <MyContext.Provider value={value}>
      {/* Same if exists someone searching for a white space, it will not make the subtitle header disappears*/}
      <Header city={value.actualCity.replace(/\s/g, '')} />
      {children}
    </MyContext.Provider>
  );
}
