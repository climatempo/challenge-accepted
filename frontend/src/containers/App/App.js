import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import CardHeader from '../../components/Cards/CardHeader';
import CardWeather from '../../components/Cards/CardWeather';

const App = () => (
  <React.Fragment>
    <Header />
    <Container fluid>
      <SearchBox />
    </Container>
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} md={8}>
          <CardHeader city="Osasco-SP" />
          <CardWeather
            date="01/02/2017"
            text="Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora"
            minTemp={15}
            maxTemp={20}
            rainProbability={50}
            rainPrecipitation={10}
          />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default App;
