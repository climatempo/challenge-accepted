import React from "react";
import "antd/dist/antd.css";
import GlobalStyle from "./styles/global.js";
import CityProvider from "./store/CitySelect";
import Main from "./components/Main";
import Header from "./components/Header/index.js";

function App() {
  return (
    <CityProvider>
      <GlobalStyle />
      <Header />
      <Main />
    </CityProvider>
  );
}

export default App;
