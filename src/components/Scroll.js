import React, { Component } from "react";

class Scroll extends Component {
  render() {
    return (
      <div style={{overflowY: 'scroll', height: '82vh'}}>
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;
