import CommonLayout from "./layouts/Common";
import GlobalStyle from "./styles/global-styles";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/main";
import { ConfigContextProvider } from "./modules/contexts/config";

function App() {
  return (
    <>
      <GlobalStyle />
      <ConfigContextProvider>
        <BrowserRouter>
          <CommonLayout>
            <MainRoutes />
          </CommonLayout>
        </BrowserRouter>
      </ConfigContextProvider>
    </>
  );
}

export default App;
