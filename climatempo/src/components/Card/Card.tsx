import React from "react";
import styled from "styled-components";
//import iconArrowTop from "../assets/icons/upload.png";
//import iconArrowBottom from "../assets/icons/download.png";

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
            <Icon />
            <Number>{temperaturaMin}</Number>
          </Row>
          <Row>
            <Icon />
            <Number>{probability}</Number>
          </Row>
        </Column>
        <Column>
          <Row>
            <Icon />
            <Number>{temperaturaMax}</Number>
          </Row>
          <Row>
            <Icon />
            <Number>{precipitation}</Number>
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
  align-items: center;
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
