import { ChakraProvider, theme } from "@chakra-ui/react";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { UserPreferencesProvider } from "./context/userPreferencesContext";
import { Layout } from "./layout";
import { MainRoutes } from "./routes/main";
import { queryClient } from "./services/queryClient";

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <UserPreferencesProvider>
            <BrowserRouter>
              <Layout>
                <MainRoutes />
              </Layout>
            </BrowserRouter>
          </UserPreferencesProvider>
        </ChakraProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
