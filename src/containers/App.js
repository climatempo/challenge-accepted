import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      searchField: "",
    };
  }

  // Evento da barra de pesquisa que só é executado quando o usuário aperta ENTER
  onSearchEnter = event => {
    this.setState({ searchField: event.target.value });
    if (event.key === "Enter") {
      fetch(
        `http://localhost:3050/weather/${encodeURI(this.state.searchField)}`
      )
        .then(response => response.json())
        .then(result => this.setState({ weather: result }))
        .catch(error => {
          alert("Pesquisa inválida");
        });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBox onSearchEnter={this.onSearchEnter} />
        <Scroll>
          <CardList weather={this.state.weather[0]} />
        </Scroll>
      </div>
    );
  }
}

export default App;
