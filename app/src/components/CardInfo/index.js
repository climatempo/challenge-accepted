import React from "react";
import { WiRaindrop, WiUmbrella } from "react-icons/wi";
import { GrLinkUp, GrLinkDown } from "react-icons/gr";

import { Container, Header, Main, ItemInfo } from "./styles";

function CardInfo() {
  return (
    <>
      <Container>
        <Header>
          <span>23/06/2020</span>
          <p>
            Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva
            a qualquer hora.
          </p>
        </Header>
        <Main>
          <span>
            <ItemInfo>
              <GrLinkUp size="20" color="#24243e" />
              <span style={{ color: "#3a00ab" }}>20°C</span>
            </ItemInfo>
            <ItemInfo>
              <GrLinkDown size="20" color="#24243e" />
              <span style={{ color: "#e54f4f" }}>12C°</span>
            </ItemInfo>
          </span>
          <span>
            <ItemInfo>
              <WiRaindrop size="30" color="#24243e" />
              <span>7 mm</span>
            </ItemInfo>
            <ItemInfo>
              <WiUmbrella size="30" color="#24243e" />
              <span>70%</span>
            </ItemInfo>
          </span>
        </Main>
      </Container>
    </>
  );
}

export default CardInfo;
