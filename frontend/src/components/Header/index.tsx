import React from "react";
import ClimaTempoLogo from "../../assets/images/logo-white.png";

import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Logo src={ClimaTempoLogo} alt="Clima Tempo Logo" />
    </S.Container>
  );
};

export default Header;
