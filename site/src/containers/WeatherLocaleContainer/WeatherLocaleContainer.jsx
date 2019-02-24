import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Title from "../../components/Title/Title";
import WeatherCards from "../../components/WeatherCards/WeatherCards";
import axios from "../../axiosInstace";

class WeatherLocaleContainer extends Component {
  state = {
    selectedCity: null,
    cityName: "",
    forecast: []
  };

  componentDidMount() {}

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
              forecast: res.data.data[0]
            })
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

    let mainContent = <WeatherCards weatherForecast={this.state.forecast} />;

    if (this.state.forecast.length === 0)
      mainContent = <span>Loading...</span>;

    return (
      <React.Fragment>
        <Navbar
          searchChangedHandler={this.searchChangedHandler}
          searchValue={this.state.cityName}
          selectValueHandler={this.onSelectValueHandler}
          onSearchSubmit={this.onSubmitSearch}
        />

        <Title city={this.state.cityName} />

        {mainContent}        
      </React.Fragment>
    );
  }
}

export default WeatherLocaleContainer;
