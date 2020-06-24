import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import CardInfo from "./components/CardInfo";
import "antd/dist/antd.css";
import GlobalStyle from "./styles/global.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Search />
      <CardInfo />
    </>
  );
}

export default App;
