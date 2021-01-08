import styled, { css } from "styled-components";

import { CardStyleProps } from "./interfaces";

const colorVariant = {
  max: css`
    color: var(--temperature-max);
  `,
  min: css`
    color: var(--temperature-min);
  `,
  default: css`
    color: var(--default-text);
  `,
};

export const Container = styled.div`
  margin-top: 20px;
  background-color: var(--light-grey);
  border-radius: 4px;
`;

export const TextContainer = styled.div`
  padding: 10px 20px 0 20px;
  background-color: var(--white);
  height: 70px;
  width: 100%;

  @media (max-width: 768px) {
    height: auto;
    margin-bottom: 10px;
  }
`;

export const Date = styled.p`
  font-size: 18px;
  text-align: start;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ForecastPhrase = styled.p`
  padding-top: 8px;
  text-align: start;
  font-weight: 400;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding-bottom: 10px;
  }
`;

export const ForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 120px;
  width: 100%;
`;

export const ForecastItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  margin-top: 20px;
`;

export const ItemText = styled.p<CardStyleProps>`
  ${(props) => colorVariant[props.color]};
  font-size: 14px;
  font-weight: 700;
`;

export const Icon = styled.img`
  padding-right: 16px;
`;
