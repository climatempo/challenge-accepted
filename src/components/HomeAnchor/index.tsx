import Wrapper, { HomeIcon } from "./styles";

function HomeAnchor() {
  return (
    <Wrapper to="/">
      <HomeIcon src="/icons/home.png" alt="Início" />
    </Wrapper>
  );
}

export default HomeAnchor;
