import CommonLayout from "./layouts/Common";
import GlobalStyle from "./styles/global-styles";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/main";
import { DataContextProvider } from "./modules/contexts/data";
import { ConfigContextProvider } from "./modules/contexts/config";

function App() {
  return (
    <>
      <GlobalStyle />
      <ConfigContextProvider>
        <CommonLayout>
          <DataContextProvider>
            <BrowserRouter>
              <MainRoutes />
            </BrowserRouter>
          </DataContextProvider>
        </CommonLayout>
      </ConfigContextProvider>
    </>
  );
}

export default App;
