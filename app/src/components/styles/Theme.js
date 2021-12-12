import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0080cd",
    darkPrimary: "#0267a3",
    secondary: "#fff",
    light: "#f2f2f2",
    dark: "#707070",
  },
  breakpoints: {
    mobile: "767px",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
