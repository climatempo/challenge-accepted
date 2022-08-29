import * as C from "./styles";
import WhiteLogo from "../../images/logo-white.png";
import SearchIcon from "../../images/icons/search.png";

export const Header = () => {
    return (
        <C.Container>
            <C.HeaderContent>
                <C.Logo
                    src={WhiteLogo}
                    alt="Climatempo logo"
                />
                <C.Search>
                    <C.Input
                        type="search"
                        placeholder="Busque por uma cidade..."
                        aria-label="Search field"
                    />
                    <C.SearchLogo
                        src={SearchIcon}
                        alt="Search icon"
                    />
                </C.Search>
            </C.HeaderContent>
        </C.Container>
    );
};