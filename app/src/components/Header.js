import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import PropTypes from "prop-types";

import { Logo } from "./styles/Header.styled";
import logo from "../assets/img/climatempo-logo.svg";
import SearchBox from "./SearchBox";

const Header = ({ localeSuggestions, onChangeLocale, onSelectLocale }) => {
  return (
    <Navbar className="pt-3 pb-3 mb-3 bg-primary">
      <Container className="justify-content-center justify-content-md-between">
        <Link to="/">
          <Navbar.Brand className="me-md-5 me-0">
            <Logo
              src={logo}
              className="d-inline-block align-middle"
              alt="Climatempo"
            />
          </Navbar.Brand>
        </Link>
        <SearchBox
          className="d-none d-md-flex"
          suggestions={localeSuggestions}
          onChange={onChangeLocale}
          onSelect={onSelectLocale}
          maxWidth="700px"
          placeholder="Busque por uma cidade..."
          ariaLabel="Busque por uma cidade..."
        ></SearchBox>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  localeSuggestions: PropTypes.array,
  onSelectLocale: PropTypes.func,
  onChangeLocale: PropTypes.func,
};

export default Header;
