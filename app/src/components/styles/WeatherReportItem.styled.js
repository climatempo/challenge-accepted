import styled from "styled-components";

export const StyledWeatherReportItem = styled.div`
  background-color: #fff;
  padding: 20px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }

  & > .main {
    width: 70px;
    margin-right: 10px;

    @media (max-width: 400px) {
      margin: 0 0 15px;
    }
  }

  & > .main > p {
    margin: 10px 0 0;
    font-weight: 700;
    line-height: 1;
  }

  & > .details {
    width: 100%;
  }

  & > .details > ul {
    border: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  & > .details > ul > li {
    color: #aaa;
    display: flex;
    padding: 5px 0;
    justify-content: space-between;
  }

  & > .details .border-temperature {
    height: 60%;
    background-color: #de675a;
    margin: 5px 5px 0;
    display: block;
    width: 6px;
    border-radius: 3px;
  }

  & > .details .label-temperature,
  & > .details .label-rain {
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    font-weight: 700;
    color: #404040;
    padding: 5px;
  }

  & > .details .info-temperature,
  & > .details .info-rain {
    color: #707070;
  }

  & > .details .info-temperature {
    margin: 0;
  }

  & > .details .info-temperature > img {
    margin-right: 5px;
  }

  & > .details .info-temperature > img:last-child {
    margin-left: 10px;
  }

  & > .details .border-rain {
    height: 60%;
    background-color: #b7b6b6;
    margin: 5px 5px 0;
    display: block;
    width: 6px;
    border-radius: 3px;
  }

  & > .details .info-rain > span {
    margin-left: 5px;
  }
`;

export const ReportIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const TemperatureIcon = styled.img`
  width: 12px;
  height: 12px;
`;

export const RainIcon = styled.img`
  width: auto;
  height: 10px;
`;
