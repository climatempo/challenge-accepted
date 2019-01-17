import React from "react";
import ReactDOM from "react-dom";
import Scroll from "./Scroll";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Scroll />, div);
  ReactDOM.unmountComponentAtNode(div);
});