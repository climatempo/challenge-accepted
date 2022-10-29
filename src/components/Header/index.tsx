import UserConfigContainer from "../UserConfig/container";
import Wrapper, { Image } from "./styles";

function Header() {
  return (
    <Wrapper data-id="header">
      <Image src="/images/logo-white.png" alt="Logo Climatempo" />
      <UserConfigContainer />
    </Wrapper>
  );
}

export default Header;
