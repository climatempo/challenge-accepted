import React, { useEffect, useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Search from "./components/SearchInput";
import GlobalStyle from "./styles/GlobaStyle";

const App = () => {
  const [locations, setLocations] = useState<string>("");

  const fetchLocation = async () => {
    const url = `http://localhost:8000/location`;

    const response = await fetch(url);
    const data = await response.json();

    setLocations(JSON.stringify(data));
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    locations && localStorage.setItem("locations", locations);
  }, [locations]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Search />
      <Content />
    </>
  );
};

export default App;
