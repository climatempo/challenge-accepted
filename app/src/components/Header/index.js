import React from "react";
import logo from "../../assets/logo-white.png";

import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <img src={logo} alt="Logomarca Climatempo" />
    </Container>
  );
}

export default Header;
