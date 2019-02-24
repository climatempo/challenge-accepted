import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Title from "../../components/Title/Title";
import WeatherCards from "../../components/WeatherCards/WeatherCards";
import axios from "../../axiosInstace";
import { NotFound } from "../../components/NotFound/NotFound";

class WeatherLocaleContainer extends Component {
  state = {
    selectedCity: null,
    cityNotFound: false,
    cityName: "",
    forecast: [],
    cities: []
  };

  constructor() {
    super();
    this.titleRef = React.createRef();
  }

  componentDidMount() {
    axios
      .get("/api/locale")
      .then(res => {
        this.setState({
          ...this.state,
          cities: res.data.data
        });
      })
      .catch(err => console.log(err));
  }

  onSubmitSearch = e => {
    e.preventDefault();
    if (!this.state.cityName) {
      alert("Preencha o campo da cidade");
      return;
    }

    // let cityInformation = null;
    axios
      .get(`/api/locale/${this.state.cityName}`)
      .then(res => {
        // Check if not city was found
        if (res.data.data.length === 0) {
          return this.setState(
            {
              ...this.state,
              cityNotFound: true,
              forecast: []
            },
            () => (this.titleRef.current.innerHTML = "Ops...")
          );
        }

        const cityInfo = res.data.data[0];
        this.setState({
          ...this.state,
          selectedCity: cityInfo
        });

        // Somente irá executar quando a primeira Promise for resolvida
        return axios
          .get(`/api/locale/${this.state.selectedCity.id}/forecast`)
          .then(res => {
            this.setState({
              ...this.state,
              cityNotFound: false
            });
            this.titleRef.current.innerHTML = `Previsão para ${
              this.state.cityName
            }`;
            return this.setState({
              ...this.state,
              forecast: res.data.data[0]
            });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  onSelectValueHandler = valueSelected => {
    this.setState({
      cityName: valueSelected
    });
  };

  searchChangedHandler = e => {
    e.preventDefault();
    const searchEntered = e.target.value;
    this.setState({
      cityName: searchEntered
    });
  };

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default WeatherLocaleContainer;
