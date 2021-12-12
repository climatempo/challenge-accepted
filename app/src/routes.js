import { BrowserRouter, Route } from "react-router-dom";

import Main from "./pages/Main";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
    </BrowserRouter>
  );
}
