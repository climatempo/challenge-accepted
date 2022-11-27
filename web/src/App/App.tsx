import Header from '../Components/Header';
import { useAppSelector } from '../hooks';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Container from '../Components/Container';
import { SnackbarProvider } from 'notistack';

function App() {
  const theme = useAppSelector(state => state.theme.value);

  const darkTheme = createTheme({
    palette: {
        mode: theme === 'dark' ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={4}>
            <div className={`${theme} bg-gray-200 min-h-screen`}>
                <div className="fixed inset-0 z-0 bg-fixed bg-cover bg-mobile blur-sm lg:bg-desktop"/>
                <div className="opacity-0 dark:opacity-100 fixed inset-0 z-0 bg-gradient-to-br from-violet-900/95 to-fuchsia-900/95 min-h-screen transition-all duration-1000"/>
                <div className="opacity-100 dark:opacity-0 fixed inset-0 z-0 bg-gradient-to-br from-fuchsia-300/95 to-purple-700/95 min-h-screen transition-all duration-1000"/>
                <Header/>
                <Container/>
            </div>
        </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
