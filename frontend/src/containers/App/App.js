import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';

const App = () => (
  <React.Fragment>
    <Header />
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} md={8}>
          <SearchBox />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default App;
