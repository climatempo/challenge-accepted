import React, { Component } from 'react';
import PubSub from 'pubsub-js';
const jsonfile = require('../../base/weather.json');

export default class FormSearch extends Component {

  constructor() {

    super();
    this.state = {
      json: jsonfile,
      locale: '',
      filterLocale: [],
      informations: []
    };
    this.setLocale = this.setLocale.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  componentDidMount() {

    let locales = this.state.json.map( obj => obj.locale.name.toUpperCase());
    this.setState({ filterLocales: locales });
  }

  sendForm(event) {

    event.preventDefault();
    this.setState({ informations: [] });

    if(this.state.filterLocales.includes(this.state.locale.toUpperCase())) {
      this.state.json.map( (obj, index) => {

        if(obj.locale.name.toUpperCase() === this.state.locale.toUpperCase()) {
          this.state.informations = obj.weather.map( info => info );
        }
      });
    } else {
      this.state.informations = [ {erro: true} ];
    }

    PubSub.publish('informations', this.state.informations);
    PubSub.publish('locale', this.state.locale);

  }

  setLocale(evento) {

    this.setState({ locale: evento.target.value });
  }

  render() {

    return(
      <div className="content">
        <form onSubmit={this.sendForm}>
          <input id='video' type='text' name='video' value={this.state.locale} onChange={this.setLocale} />
          <input type='submit' value='Pesquisar' />
        </form>
      </div>
    );
  }
}
