import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  margin: 3% 10%;
  background: #fff;
  max-width: 400px;
  border: 1px solid #fff;
  transition: border 0.5s;
  &:hover {
    border: solid 1px #1890ff;
  }
`;
export const Header = styled.span`
  display: flex;
  flex-direction: column;
  span {
    font-weight: 700;
    font-size: 15pt;
  }
  p {
    padding: 10px 0;
    font-size: 11pt;
  }
`;

export const Main = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;
  span {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 12pt;
    margin-right: 10px;
  }
`;

export const ItemInfo = styled.span`
  min-width: 120px;
  height: 50px;
  display: flex;
  padding: 12px;
  margin: 10px 0;
  background: #fbfbfb;
  border-radius: 5px;
  box-shadow: 3px 6px #e6e3ec;
  transition: background 0.5s;
  &:hover {
    background: #f0f0f0;
  }
  span {
    padding-left: 15px;
  }
`;
