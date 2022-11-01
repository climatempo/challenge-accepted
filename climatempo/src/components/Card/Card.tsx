import React from "react";
import styled from "styled-components";
//import iconArrowTop from "../assets/icons/upload.png";
//import iconArrowBottom from "../assets/icons/download.png";

function Card() {
  return (
    <Container>
      <Header>
        <Date>17/02/2022</Date>
        <Description>texto de exeeeeeeeeemplooooo</Description>
      </Header>
      <Body>
        <Column>
          <Row>
            <Icon />
            <Number>20</Number>
          </Row>
          <Row>
            <Icon />
            <Number>20</Number>
          </Row>
        </Column>
        <Column>
          <Row>
            <Icon />
            <Number>20</Number>
          </Row>
          <Row>
            <Icon />
            <Number>20</Number>
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
`;

const Header = styled.div`
  width: 346px;
  height: 80px;
  background: #047ab2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
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
`;

const Description = styled.p`
  margin-bottom: 10px;
  margin-left: 10px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
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
`;

export default Card;
