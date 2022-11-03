import React from "react";
import styled from "styled-components";
import max from "../../assets/icons/max.png";
import min from "../../assets/icons/min.png";
import probabilityIcon from "../../assets/icons/probability.png";
import precipitationIcon from "../../assets/icons/precipitation.png";

type TypeCard = {
  date: string;
  text: string;
  temperaturaMin: number;
  temperaturaMax: number;
  probability: number;
  precipitation: number;
};

function Card({
  date,
  text,
  temperaturaMin,
  temperaturaMax,
  probability,
  precipitation,
}: TypeCard) {
  return (
    <Container>
      <Header>
        <Date>{date}</Date>
        <Description>{text}</Description>
      </Header>
      <Body>
        <Column>
          <Row>
            <Icon src={max} alt="max" />
            <Row>
              <Number>{temperaturaMax}</Number>
              <Number>°C</Number>
            </Row>
          </Row>
          <Row>
            <Icon src={probabilityIcon} alt="probability" />
            <Row>
              <Number>{precipitation}</Number>
              <Number>mm</Number>
            </Row>
          </Row>
        </Column>
        <Column>
          <Row>
            <Icon src={min} alt="min" />
            <Row>
              <Number>{temperaturaMin}</Number>
              <Number>°C</Number>
            </Row>
          </Row>
          <Row>
            <Icon src={precipitationIcon} alt="precipitation" />
            <Row>
              <Number>{probability}</Number>
              <Number>%</Number>
            </Row>
          </Row>
        </Column>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 346px;
  height: 230px;
  background: #d9d9d9;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 888px) {
    width: 346px;
    height: 230px;
  }

  @media (max-width: 468px) {
    width: 274px;
    height: 220px;
  }
`;

const Header = styled.div`
  width: 346px;
  height: 80px;
  background: #047ab2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 888px) {
    width: 346px;
    height: 80px;
  }

  @media (max-width: 468px) {
    width: 274px;
    height: 160px;
  }
`;

const Date = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;

  @media (max-width: 888px) {
    font-size: 18px;
  }

  @media (max-width: 468px) {
    font-size: 16px;
  }
`;

const Description = styled.p`
  width: 80%;
  margin-bottom: 10px;
  margin-left: 10px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 14px;
  color: #ffffff;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;

  @media (max-width: 868px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 468px) {
    width: 20px;
    height: 20px;
  }
`;

const Row = styled.div`
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Number = styled.p`
  margin-left: 10px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #000000;

  @media (max-width: 868px) {
    font-size: 18px;
  }

  @media (max-width: 468px) {
    font-size: 18px;
  }
`;

export default Card;
