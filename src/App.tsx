import CommonLayout from "./layouts/Common";
import GlobalStyle from "./styles/global-styles";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/main";

function App() {
  return (
    <>
      <GlobalStyle />
      <CommonLayout>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </CommonLayout>
    </>
  );
}

export default App;
