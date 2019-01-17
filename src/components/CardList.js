import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  render() {
    const weatherJSON = this.props.weather;
    return (
      <div>
        {
          weatherJSON.map(obj => {
            return <Card key={obj.locale.id} name={obj.locale.name} />
          })
        }
      </div>
    );
  }
}

export default CardList;
