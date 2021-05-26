import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const SearchBar = ({onSearch}) => {
    const [city, setCity] = useState('');
    console.log('Entrou no SearchBar!');
    return (
      <>
        <Row>
          <Col>
            <h1>PREVISÃO DO TEMPO</h1>
          </Col>
        </Row>
  
        <Row>
          <Col xs={4}>
            <FormControl
              placeholder="Digite o nome da cidade..."
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Button onClick={() => onSearch(city)}>Buscar</Button>
          </Col>
        </Row>
      </>
    );
  };

export default SearchBar;