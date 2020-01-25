import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchBox = () => {
  const [query, setQuery] = useState('');

  const onSearch = e => {
    e.preventDefault();
    console.log('Search working...');
  };

  return (
    <Row className="bg-white border align-items-center">
      <Col>
        <Form className="mt-3" onSubmit={onSearch}>
          <Row>
            <Col xs={8} md={10} className="pr-0 pl-3">
              <Form.Group>
                <Form.Control
                  placeholder="Digite a cidade..."
                  className="border-0 px-0"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs={4} md={2} className="pl-0 pr-3 text-right">
              <Button variant="outline-primary" type="submit">
                Pesquisar
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default SearchBox;
