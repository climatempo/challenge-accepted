import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="tc bg-blue dib pa3 ma2 grow bw2 shadow-5">
        {/* <h1 key={this.props.locale.id}>{this.props.locale.name}</h1> */}
        <img alt="robot " src={`https://robohash.org/iusdfbye/?size=200x200`} />
        <h1>Climatempo</h1>
        <div>
          <h1 className="f1">22/09/1995</h1>
        </div>
      </div>
    );
  }
}

export default Card;
