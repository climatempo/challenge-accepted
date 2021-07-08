import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  width: 80vh;
  height: 6em;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);

  &:last-child {
    margin-bottom: 6em;
  }
`;

export const Date = styled.div`
  margin-top: 1em;
  min-height: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 2px 15px;
  font-size: 16px;

  img {
    width: 42px;
    height: 42px;
  }
`;

export const TempMax = styled.h4`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 2px 5px;
  font-size: 18px;
  color: #12112e;
  font-weight: 500;

  span{
      font-size: 12px;
  }
`;

export const TempMin = styled.h4`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 2px 5px;
  font-size: 18px;
  color: #12112e;
  font-weight: 500;

  span{
      font-size: 12px;
  }
`;

export const Text = styled.p`
  margin-top: 1.5em;
  display: flex;
  flex-direction: column;
  flex: 0.9;
  align-items: center;
  position: relative;
  padding: 2px 5px;
  font-size: 14px;
  color: #12112e;
`;

export const Prob = styled.div`
  margin-top: 1em;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 2px 5px;
    font-size: 13px;
    color: #12112e;
    font-weight: 500;
  }
`;
