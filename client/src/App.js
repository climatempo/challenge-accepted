import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import yellow from "@material-ui/core/colors/yellow";
import Actionbar from "./components/Actionbar";
import { getLocale, getWeather } from "./utils/api";
import Weathers from "./components/Weathers";
import { Typography } from "@material-ui/core";

import NotFound from "./components/NotFound";
import pesquise from "./images/icons/pesquise.svg";
import Snackbar from "./components/Snackbar";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: yellow
  }
});

/** Raíz da aplicação */
class App extends Component {
  state = {
    searchText: "",
    weather: {},
    locale: {},
    showNotFound: false,
    timeoutSearch: null,
    openSnack: false,
    snackMessage: "",
    snackVariant: "error"
  };

  /**
   * Trata a mudança do texto de busca
   *
   * @param {String} value - texto
   */
  onSearchChange = value => {
    const { timeoutSearch } = this.state;

    // remove o tiemout para realizar a busca
    if (timeoutSearch) {
      clearTimeout(timeoutSearch);
    }

    // define um tiemout para realizar a busca para não buscar a cada mudança
    this.setState({
      searchText: value,
      timeoutSearch: setTimeout(this.makeSearch, 300)
    });
  };

  /**
   * Reliza a busca no servidor
   */
  makeSearch = () => {
    const { searchText } = this.state;

    // pegar o local
    getLocale(searchText)
      .then(response => {
        const { data } = response;

        // tratar mensagem do servidor
        this.responseMessage(response);

        // verifica se achou algum local
        if (Object.keys(data).length !== 0) {
          getWeather(data.id)
            .then(res => {
              const weather = res.data;

              // tratar mensagem do servidor
              this.responseMessage(response);

              // salva o resultado do servidor
              this.setState({
                weather,
                showNotFound: Object.keys(weather).length === 0
              });
            })
            .catch(error => {
              this.showSnackMessage("Erro ao conectar com o servidor");
            });
        } else {
          // se não achou o local
          this.setState({ weather: {}, showNotFound: true });
        }

        // salva o local no state
        this.setState({ locale: data });
      })
      .catch(error => {
        this.showSnackMessage("Erro ao conectar com o servidor");
      });
  };

  /**
   * Mostrar a mensagem na Snackbar
   *
   * @param {String} message - mensagem
   */
  showSnackMessage = message => {
    this.setState({
      openSnack: true,
      snackMessage: message
    });
  };

  /**
   * Fechar Snackbar
   */
  closeSnackMessage = () => {
    this.setState({
      openSnack: false
    });
  };

  /**
   * Mostrar mensagem de erros do servidor
   *
   * @param {Object} response - resposta do servidor
   */
  responseMessage = response => {
    if (response.statusCode === 400) {
      this.showSnackMessage("Erro nos dados enviados para o servidor");
    } else if (response.statusCode === 500) {
      this.showSnackMessage("Erro no servidor");
    }
  };

  render() {
    const {
      searchText,
      weather,
      locale,
      showNotFound,
      openSnack,
      snackMessage,
      snackVariant
    } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <Actionbar
          searchText={searchText}
          onSearchChange={this.onSearchChange}
        />

        {Object.keys(weather).length !== 0 && (
          <>
            <Typography
              className={"app-prevision-text"}
              variant="h6"
            >{`Previsão para ${locale.name} - ${locale.state}`}</Typography>
            <Weathers weathers={weather.weather} />
          </>
        )}
        {searchText === "" && (
          <div className="container-relative">
            <div className="container-image-message">
              <img src={pesquise} alt={"pesquise"} style={{ width: "150px" }} />
            </div>
          </div>
        )}
        {showNotFound && searchText !== "" && (
          <div className="container-relative">
            <div className="container-image-message">
              <NotFound query={searchText} />
            </div>
          </div>
        )}
        <Snackbar
          variant={snackVariant}
          message={snackMessage}
          open={openSnack}
          onClose={this.closeSnackMessage}
        />
      </MuiThemeProvider>
    );
  }
}

export default App;
