import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';

const Container = styled.div`
  padding: 0 20px;
  h3 {
    font-size: 1.5em;
    color: #262626;
  }
`;

const Weather = ({ weather }) => (
  <Container>
    {weather && (
      <>
        <h3>
          Previsão para&nbsp;
          {weather.locale && weather.locale.name}
          &nbsp;-&nbsp;
          {weather.locale && weather.locale.state}
        </h3>
        {weather.weather && weather.weather.map((w) => (
          <WeatherCard key={w.date} weather={w} />
        ))}
      </>
    )}
  </Container>
);

export default Weather;

Weather.propTypes = {
  weather: PropTypes.object,
};

const WeatherHeader = styled.div`
  background-color: #fff;
  height: 80px;
  padding: 10px;
  span {
    font-size: 1.2em;
  }
  small {
    margin: 5px 0;
  }
`;

const WeatherContent = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 25px;
  grid-template-columns: auto auto;
  margin: auto;
  width: 100%;
`;

const WeatherCard = ({ weather }) => (
  <Card>
    <>
      <WeatherHeader>
        <span>{weather.formatedDate}</span>
        <small>{weather.text}</small>
      </WeatherHeader>
      <WeatherContent>
        <InfoWithIcon
          color="blue"
          label={`${weather.temperature.max}°C`}
          iconUrl={`${window.location.origin}/images/icons/upload.png`}
        />
        <InfoWithIcon
          color="red"
          label={`${weather.temperature.min}°C`}
          iconUrl={`${window.location.origin}/images/icons/download.png`}
        />
        <InfoWithIcon
          label={`${weather.rain.precipitation}mm`}
          iconUrl={`${window.location.origin}/images/icons/raindrop-close-up.png`}
        />
        <InfoWithIcon
          label={`${weather.rain.probability}%`}
          iconUrl={`${window.location.origin}/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png`}
        />
      </WeatherContent>
    </>
  </Card>
);

WeatherCard.propTypes = {
  weather: PropTypes.object,
};

const InfoContainer = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.8em;
`;

const Label = styled.div`
  padding: 0 10px;
  color: ${({ color }) => color};
`;

const InfoWithIcon = ({ color, label, iconUrl }) => (
  <InfoContainer>
    <div>
      <img src={iconUrl} alt="" style={{ width: '30px' }} />
    </div>
    <Label color={color}>{label}</Label>
  </InfoContainer>
);

InfoWithIcon.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  iconUrl: PropTypes.string,
};

const MessageContainer = styled.div`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  color: #b3b3b3;
  font-size: 1.7em;
`;

export const Message = () => (
  <MessageContainer>
    <img
      src={`${window.location.origin}/images/icons/search-solid.svg`}
      alt=""
      style={{ width: '100px' }}
    />
  </MessageContainer>
);
