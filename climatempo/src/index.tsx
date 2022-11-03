import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UseState from "./context/state";
import reportWebVitals from "./reportWebVitals";
import RouterPages from "./route/Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UseState>
    <RouterPages />
  </UseState>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
