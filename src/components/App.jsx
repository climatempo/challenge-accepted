import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        {JSON.stringify(this.props)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  	isFetching: state.isFetching,
  	didInvalidate: state.didInvalidate,
    period: state.weather.period,
    locale: state.weather.locale,
    weather: state.weather.weather
  };
}

export const AppContainer = connect(
  mapStateToProps
)(App);