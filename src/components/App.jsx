import React, { Component, PropTypes } from 'react';
import { FormGroup, InputGroup, FormControl, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { fetchWeatherInfo } from '../actions';
import {connect} from 'react-redux';

class App extends Component {
	constructor() {
		super();
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(e) {
		e.preventDefault();
		const { dispatch } = this.props
		const city = this.input.value;
		dispatch(fetchWeatherInfo(city));
	}

  render() {
    return (
      <div>
	      <form onSubmit={this.handleSearch}>
			    <FormGroup>
			      <InputGroup>
			      	<FormControl inputRef={(input) => this.input = input} type="text" placeholder="Digite a cidade" />
			        <InputGroup.Button>
			          <Button type="submit">Search</Button>
			        </InputGroup.Button>
			      </InputGroup>
			    </FormGroup>
		    </form>
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