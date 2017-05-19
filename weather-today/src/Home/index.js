import React, { Component } from 'react';

export default class Home extends Component {

  render() {
    return(

      <div>
        <div className="header">
            <h1>Bem vindo :)</h1>
            <h2>Uma simples Single Page Application destinada a voce!</h2>
        </div>
        <div className="content" id="content">
        </div>
      </div>
    );
  }
}
