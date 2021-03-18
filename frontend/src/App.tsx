import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Search from "./components/SearchInput";
import GlobalStyle from "./styles/GlobaStyle";

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Search />
    <Content />
  </>
);

export default App;
