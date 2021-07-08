import styled from "styled-components";
import { NavBar } from "./components/navBar";
import { SearchBar } from "./components/searchBar";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <NavBar />
      <SearchBar />
    </AppContainer>
  );
}

export default App;
