import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import CardsWeather from './CardsWeather';
import FormSearch from './FormSearch';

export default class SearchBox extends Component {

  constructor() {

    super();
    this.state = {
      locale: '',
      informations: []
    };
  }

  componentDidMount() {

    PubSub.subscribe('informations', (topic, newList) => this.setState({ informations: newList }));
    PubSub.subscribe('locale', (topic, newLocale) => this.setState({ locale: newLocale }));
  }

  render() {
    return(

      <div>
        <div className="header">
          <h1>Previsão do Tempo</h1>
        </div>
        <div className="content" id="content">
          <FormSearch />
          <CardsWeather informations={this.state.informations} locale={this.state.locale}/>
        </div>
      </div>
    );
  }
}
