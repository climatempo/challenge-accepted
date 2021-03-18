import styled from "styled-components";

export const CardWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Card = styled.div`
  width: 400px;
  background-color: #fff;
`;

export const CardHeader = styled.div`
  padding: 10px 15px;
`;

export const CardBody = styled.div`
  background-color: #f2f2f2;
  padding: 10px 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 120px;
`;

export const CardTitle = styled.h4`
  color: #2d2d2d;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CardParahraph = styled.p`
  font-size: 12px;
  color: #474747;
`;

export const TemperatureDisplay = styled.h4`
  width: 50%;
  font-size: 24px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: normal;
  color: ${({ color }) => color || "#000"};
`;

export const IndicatorIcon = styled.img.attrs(({ src, alt }) => ({
  src: src,
  alt,
}))`
  width: 32px;
  height: 32px;
`;
