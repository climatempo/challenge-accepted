import styled from "styled-components";

export const SearchCityContainer = styled.div`
  width: 100%;
  min-height: 5em;
  display: flex;
  border-bottom: 1px solid #d8d8d852;
  align-items: center;
  cursor: pointer;
`;

export const Icon = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  flex: 0.3;
  vertical-align: 0%;
`;

export const Name = styled.h2`
  font-size: 16px;
  color: #000;
  display: flex;
  flex: 0.6;
`;

export const Text = styled.p`
  font-size: 12px;
  color: #000;
  display: flex;
  flex: 1.5;
`;

export const Temperature = styled.div`
  color: #a1a1a1;
  font-size: 14px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  flex: 0.6;

  .temp {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 16px;
    color: #000;
  }

  .icon-min {
    color: #2210ff;
  }

  .icon-max {
    color: #ff3012;
  }

  .icon-precipitation {
    color: #508fff;
  }

  .precipitation {
    margin-top: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: #000;
  }
`;
