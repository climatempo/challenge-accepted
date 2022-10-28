import UserConfig from "../UserConfig";
import Wrapper, { Image } from "./styles";

function Header() {
  return (
    <Wrapper>
      <Image src="/images/logo-white.png" alt="Logo Climatempo" />
      <UserConfig />
    </Wrapper>
  );
}

export default Header;
