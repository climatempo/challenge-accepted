import { Container, Logo } from "./styles";
import LogoIcon from "../../assets/logo-white.png";

export function NavBar(props) {
  return (
    <Container>
      <Logo>
        <img src={LogoIcon} alt="Logo" />
      </Logo>
    </Container>
  );
}
