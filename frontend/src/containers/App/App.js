import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import CardHeader from '../../components/Cards/CardHeader';
import CardWeather from '../../components/Cards/CardWeather';

import getWeather from '../../api/weather';

const App = () => {
  const [city, setCity] = useState(null);
  const [weatherResult, setWeatherResult] = useState(null);
  const [errorCode, setErrorCode] = useState(null);

  const handleSearchSubmit = e => {
    e.preventDefault();

    if (!city) {
      setWeatherResult(null);
      setErrorCode(400);
      return;
    }

    getWeather(city)
      .then(res => {
        setWeatherResult(res);
        setErrorCode(null);
      })
      .catch(err => {
        setWeatherResult(null);
        setErrorCode(err.response.status);
      });
  };

  const handleInputChange = e => {
    setCity(e.target.value);
  };

  const renderWeather = () => {
    const { locale, weather } = weatherResult;

    return (
      <div>
        <CardHeader city={`${locale.name}-${locale.state}`} />
        {weather.map(report => (
          <CardWeather
            key={report.date}
            date={report.date}
            text={report.text}
            minTemp={report.temperature && report.temperature.min}
            maxTemp={report.temperature && report.temperature.max}
            rainProbability={report.rain && report.rain.probability}
            rainPrecipitation={report.rain && report.rain.precipitation}
          />
        ))}
      </div>
    );
  };

  const renderError = () => {
    const mappedErrors = {
      400: 'Informe a cidade para continuar!',
      404: 'Cidade não encontrada',
    };
    const errorMessage =
      mappedErrors[errorCode] || 'Ocorreu um erro ao pesquisar';

    return (
      <div className="d-flex flex-column align-items-center my-4 p-2 bg-white border text-secondary">
        <h1>
          <FontAwesomeIcon icon={faExclamationCircle} />
        </h1>
        <span className="font-weight-bold" data-testid="error-message">
          {errorMessage}
        </span>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <SearchBox
          onSearchSubmit={handleSearchSubmit}
          onInputChange={handleInputChange}
        />
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={8}>
            {weatherResult ? renderWeather() : null}
            {errorCode ? renderError() : null}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default App;
