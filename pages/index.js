import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styles from '../app.sass';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import WeatherCards from '../components/WeatherCards';
import NotFound from '../components/NotFound';
import Layout from '../components/Layout';

class WeatherLocaleContainer extends Component {
  state = {
    selectedCity: null,
    cityNotFound: false,
    cityName: '',
    forecast: [],
    cities: []
  };

  constructor() {
    super();
    this.titleRef = React.createRef();
  }

  componentDidMount() {
    axios
      .get('/api/locale')
      .then(res => {
        this.setState({
          ...this.state,
          cities: res.data
        });
      })
      .catch(err => console.log(err));
  }

  onSubmitSearch = e => {
    e.preventDefault();
    if (!this.state.cityName) {
      return alert('Preencha o campo da cidade');
    }

    axios
      .get(`/api/locale/${this.state.cityName}`)
      .then(res => {
        if (res.data.length === 0) {
          return this.setState(
            {
              ...this.state,
              cityNotFound: true,
              forecast: []
            },
            () => (this.titleRef.current.innerHTML = 'Ops...')
          );
        }

        this.setState({ ...this.state, selectedCity: res.data[0] });

        return axios
          .get(`/api/weather/${this.state.selectedCity.id}`)
          .then(res => {
            this.titleRef.current.innerHTML = `Previsão para ${res.data.locale.name} - ${res.data.locale.state}`;
            return this.setState({
              ...this.state,
              cityNotFound: false,
              forecast: res.data.weather
            });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  onSelectValueHandler = cityName => this.setState({ cityName });

  searchChangedHandler = e => {
    e.preventDefault();
    const searchEntered = e.target.value;
    this.setState({
      cityName: searchEntered
    });
  };

  render() {
    if (!this.state.cities[0]) return <div>Carregando...</div>;
    return (
      <Layout>
        <div className={styles.App}>
          <Fragment>
            <Navbar
              searchChangedHandler={this.searchChangedHandler}
              searchValue={this.state.cityName}
              selectValueHandler={this.onSelectValueHandler}
              onSearchSubmit={this.onSubmitSearch}
              cities={this.state.cities}
            />

            <Title city={this.state.cityName} titleRef={this.titleRef} />
            {this.state.cityNotFound && <NotFound />}
            {this.state.forecast.length > 0 && (
              <WeatherCards weatherForecast={this.state.forecast} />
            )}
          </Fragment>
        </div>
      </Layout>
    );
  }
}

export default WeatherLocaleContainer;
