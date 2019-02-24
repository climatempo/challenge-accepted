import React, { Component } from 'react';
import styles from './App.sass';
import WeatherLocaleContainer from './containers/WeatherLocaleContainer/WeatherLocaleContainer';


class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <WeatherLocaleContainer />
      </div>
    );
  }
}

export default App;
