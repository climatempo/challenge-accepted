import HomeCta from "../../components/HomeCta";
import SearchBarContainer from "../../components/SearchBar/container";
import Wrapper from "./styles";

function Home() {
  return (
    <Wrapper>
      <HomeCta />
      <SearchBarContainer />
    </Wrapper>
  );
}

export default Home;
