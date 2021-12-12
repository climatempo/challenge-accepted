import PropTypes from "prop-types";

import {
  RainIcon,
  ReportIcon,
  StyledWeatherReportItem,
  TemperatureIcon,
} from "./styles/WeatherReportItem.styled";
import tempMinIcon from "../assets/img/temp-min.svg";
import tempMaxIcon from "../assets/img/temp-max.svg";
import greyDropIcon from "../assets/img/grey-drop.png";
import blueDropIcon from "../assets/img/blue-drop.png";
import sunAndRainIcon from "../assets/img/sun-and-rain.svg";
import sunIcon from "../assets/img/sun.svg";
import { formatDayOfWeek } from "../utils/formatter";

const WeatherReportItem = ({ report, measures }) => {
  const dropIcon = report.rain.precipitation > 0 ? blueDropIcon : greyDropIcon;
  const reportIcon = report.rain.precipitation > 0 ? sunAndRainIcon : sunIcon;
  const reportDate = new Date(report.date);
  const dayOfWeek = formatDayOfWeek(reportDate.getDay());
  return (
    <StyledWeatherReportItem className="card-weather weather-report d-flex position-relative">
      <div
        className="main d-flex flex-column align-items-center"
        title={report.text}
      >
        <ReportIcon alt={report.text} src={reportIcon} />
        <p>{dayOfWeek}</p>
      </div>
      <div className="details">
        <ul>
          <li>
            <div className="d-flex">
              <span className="border-temperature"></span>
              <span className="label-temperature">Temperatura</span>
            </div>
            <p className="info-temperature d-flex align-items-center">
              <TemperatureIcon src={tempMinIcon} alt="Temperatura mínima" />{" "}
              {report.temperature.min}
              {measures.temperature?.label}
              <TemperatureIcon
                src={tempMaxIcon}
                alt="Temperatura máxima"
              />{" "}
              {report.temperature.max}
              {measures.temperature?.label}
            </p>
          </li>
          <li>
            <div className="d-flex">
              <span className="border-rain"></span>
              <span className="label-rain">Chuva</span>
            </div>
            <div className="info-rain d-flex align-items-center">
              <RainIcon
                className="d-flex"
                alt="Precipitacação"
                src={dropIcon}
              />
              <span>
                {report.rain.precipitation}
                {measures.rain?.label} - {report.rain.probability}%
              </span>
            </div>
          </li>
        </ul>
      </div>
    </StyledWeatherReportItem>
  );
};

WeatherReportItem.propTypes = {
  report: PropTypes.object.isRequired,
  measures: PropTypes.object.isRequired,
};

export default WeatherReportItem;
