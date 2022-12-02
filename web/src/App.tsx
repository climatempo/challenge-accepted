import { ThemeProvider } from 'styled-components';
import { Home } from './pages/home';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme/default';

export function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />

         <Home />
      </ThemeProvider>
   );
}
