import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardHeader = ({ city }) => {
  return (
    <Row className="my-3">
      <Col>
        <h4 data-testid="h4-city">Previsão para {city}</h4>
      </Col>
    </Row>
  );
};

CardHeader.propTypes = {
  city: PropTypes.string.isRequired,
};

export default CardHeader;
