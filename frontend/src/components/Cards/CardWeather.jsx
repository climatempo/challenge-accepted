import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  faArrowUp,
  faArrowDown,
  faUmbrella,
  faTint,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardWeather = ({
  date,
  text,
  minTemp,
  maxTemp,
  rainProbability,
  rainPrecipitation,
}) => {
  return (
    <div className="mb-4">
      <Row className="mt-2">
        <Col className="mx-3 border border-bottom-0 bg-white shadow-sm">
          <Row className="my-2">
            <Col>
              <p className="my-0">
                <strong>{date}</strong>
              </p>
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <p className="my-0">{text}</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="mx-3 border border-top-0 bg-light-gray shadow-sm">
          <Row className="pt-3">
            <Col xs={2} md={3}>
              <h3>
                <FontAwesomeIcon icon={faArrowUp} />
              </h3>
            </Col>
            <Col xs={4} md={3} className="text-primary">
              <h3>{maxTemp}ºC</h3>
            </Col>
            <Col xs={2} md={3}>
              <h3>
                <FontAwesomeIcon icon={faArrowDown} />
              </h3>
            </Col>
            <Col xs={4} md={3} className="text-danger">
              <h3>{minTemp}ºC</h3>
            </Col>
          </Row>
          <Row className="pt-4 pb-3">
            <Col xs={2} md={3}>
              <h3>
                <FontAwesomeIcon icon={faTint} />
              </h3>
            </Col>
            <Col xs={4} md={3}>
              <h3>{rainPrecipitation}mm</h3>
            </Col>
            <Col xs={2} md={3}>
              <h3>
                <FontAwesomeIcon icon={faUmbrella} />
              </h3>
            </Col>
            <Col xs={4} md={3}>
              <h3>{rainProbability}%</h3>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

CardWeather.propTypes = {
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  rainProbability: PropTypes.number.isRequired,
  rainPrecipitation: PropTypes.number.isRequired,
};

export default CardWeather;
