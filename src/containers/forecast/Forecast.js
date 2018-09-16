import React, { Component } from "react";
import NavBar from './components/navbar/NavBar'
import { Autocomplete, Col, Row } from 'react-materialize'
import CardForecast from "./components/card-forecast/CardForecast";
import Constants from '../../constants'

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      locales: {},
      weather: []
    }
  }

  componentDidMount() {
    this.onFetchLocales();
  }

  onFetchLocales = () => {
    const url = Constants.HOST + Constants.PORT + Constants.ROUTES.GET_ALL_LOCALES;
    const method = Constants.METHODS.GET;
    const header = Constants.HEADERS;

    fetch(url, {
      method: method,
      headers: header,
    }).then((response) => response.json())
      .then((res) => {
        this.setState({ locales: res.locales })
      }).catch(err => {
        console.log(err);
      });
  };

  onFetchWeather = (name) => {
    const url = Constants.HOST + Constants.PORT + Constants.ROUTES.GET_WEATHER_BY_CITY_NAME + name;
    const method = Constants.METHODS.GET;
    const header = Constants.HEADERS;

    fetch(url, {
      method: method,
      headers: header,
    }).then((response) => response.json())
      .then((res) => {
        this.setState({ weather: res.weather })
        this.setState({ city: name })
      }).catch(err => {
        console.log(err);
      });
  };

  render() {

    const { city, locales, weather } = this.state;

    return (
      <div>
        <NavBar />
        <Autocomplete
          placeholder='Pesquise por uma cidade'
          data={
            locales
          }
          className='autocomplete-locales'
          onAutocomplete={(value) => this.onFetchWeather(value)}
        />
        <Row className='container-cards'>
          {city != null ?
            <Col s={12}>
              <label className='label-forecast'>Previsão do tempo para {city} - SP</label>
            </Col>
            : null}
          <Col s={12}>
            <CardForecast
              weather={weather}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Forecast;