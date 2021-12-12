import Theme from "./components/styles/Theme.js";
import GlobalStyles from "./components/styles/Global";
import Routes from "./routes.js";

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Routes />
    </Theme>
  );
};

export default App;
