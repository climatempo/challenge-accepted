import { Container, Logo } from "./styles";
import WhiteLogo from "../../images/logo-white.png";

export const Header = () => {
    return (
        <Container>
            <Logo
                src={WhiteLogo}
                alt="Climatempo logo"
            />
        </Container>
    );
};