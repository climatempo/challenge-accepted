import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import CardInfo from "./components/CardInfo";
import "antd/dist/antd.css";
import GlobalStyle from "./styles/global.js";
import CityProvider from "./store/CitySelect";

function App() {
  return (
    <CityProvider>
      <GlobalStyle />
      <Header />
      <Search />
      <CardInfo />
    </CityProvider>
  );
}

export default App;
