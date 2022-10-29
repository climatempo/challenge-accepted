import HomeCta from "../../components/HomeCta";
import SearchBarContainer from "../../components/SearchBar/container";
import Wrapper from "./styles";

function Home() {
  return (
    <Wrapper>
      <HomeCta data-id="home-cta" />
      <SearchBarContainer data-id="search-container" />
    </Wrapper>
  );
}

export default Home;
