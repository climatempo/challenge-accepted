import UserConfigContainer from "../UserConfig/container";
import Wrapper, { Anchor, Image } from "./styles";

function Header() {
  return (
    <Wrapper data-id="header">
      <Anchor href="/">
        <Image src="/images/logo-white.png" alt="Logo Climatempo" />
      </Anchor>
      <UserConfigContainer />
    </Wrapper>
  );
}

export default Header;
