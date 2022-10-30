import CommonLayout from "./layouts/Common";
import GlobalStyle from "./styles/global-styles";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/main";
import { DataContextProvider } from "./modules/contexts/data";

function App() {
  return (
    <>
      <GlobalStyle />
      <CommonLayout>
        <DataContextProvider>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </DataContextProvider>
      </CommonLayout>
    </>
  );
}

export default App;
