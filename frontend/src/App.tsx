import React, { useEffect, useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Search from "./components/SearchInput";
import GlobalStyle from "./styles/GlobaStyle";
import { GlobalStorage } from "./context/GlobalContext";

import LocationFetch from "./utils/LocationFetch";

const App = () => {
  const [locations, setLocations] = useState<string>("");

  useEffect(() => {
    (async () => {
      const data = await LocationFetch();
      setLocations(JSON.stringify(data));
    })();
  }, []);

  useEffect(() => {
    locations && localStorage.setItem("locations", locations);
  }, [locations]);

  return (
    <GlobalStorage>
      <GlobalStyle />
      <Header />
      <Search />
      <Content />
    </GlobalStorage>
  );
};

export default App;
