import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBox = ({ onSearchSubmit, onInputChange }) => {
  return (
    <Row className="bg-white border align-items-center justify-content-center">
      <Col sm={12} md={7}>
        <Form className="mt-3" onSubmit={onSearchSubmit}>
          <Row>
            <Col xs={8} md={10} className="pr-0 pl-3">
              <Form.Group>
                <Form.Control
                  placeholder="Digite a cidade..."
                  className="border-0 px-0"
                  onChange={onInputChange}
                />
              </Form.Group>
            </Col>
            <Col xs={4} md={2} className="pl-0 pr-3 text-right">
              <Button variant="outline-none" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

SearchBox.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SearchBox;
