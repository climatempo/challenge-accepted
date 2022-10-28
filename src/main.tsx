import React from "react";
import ReactDOM from "react-dom/client";
import CommonLayout from "./layouts/Common";
import GlobalStyle from "./styles/global-styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <CommonLayout>
      test
    </CommonLayout>
  </React.StrictMode>
);
