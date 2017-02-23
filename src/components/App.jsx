import React, { Component, PropTypes } from 'react';
import { fetchWeatherInfo } from '../actions';
import {connect} from 'react-redux';
import Header from './Header';
import SearchBox from './SearchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			city: ''
		}
		this.handleSearch = this.handleSearch.bind(this);
		this.handleCityChange = this.handleCityChange.bind(this);
	}

	handleCityChange(e) {
		this.setState({city: e.target.value});
	}

	handleSearch(e) {
		e.preventDefault();
		const { dispatch } = this.props
		dispatch(fetchWeatherInfo(this.state.city));
	}

  render() {
    return (
      <div>
      	<Header />
	      <SearchBox 
	      	handleCityChange={this.handleCityChange} 
	      	handleSearch={this.handleSearch}
	      />
      </div>
    );
  }
}

App.propTypes = {
  weather: PropTypes.object,
  locale: PropTypes.object,
  period: PropTypes.object,
  isFetching: PropTypes.bool,
  didInvalidate: PropTypes.bool,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
  	isFetching: state.isFetching,
  	didInvalidate: state.didInvalidate,
    weather: state.weather,
    locale: state.locale,
    period: state.period
  };
}

export const AppContainer = connect(
  mapStateToProps
)(App);