import React from "react";
import "antd/dist/antd.css";
import GlobalStyle from "./styles/global.js";
import CityProvider from "./store/CitySelect";
import Main from "./components/Main";
import Header from "./components/Header/index.js";
import WeatherProvider from "./store/DataWeather.js";

function App() {
  return (
    <CityProvider>
      <WeatherProvider>
        <GlobalStyle />
        <Header />
        <Main />
      </WeatherProvider>
    </CityProvider>
  );
}

export default App;
