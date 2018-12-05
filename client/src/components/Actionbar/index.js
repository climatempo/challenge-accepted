import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import logo from "../../images/logo-white.png";
import SearchInput from "../SearchInput";
import "./index.css";

/** Componente para mostrar uma Appbar */

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "block",
    width: "9em",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

class SearchAppBar extends React.Component {
  state = {
    showSearchIcon: true,
    showLogo: true
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    onSearchChange: PropTypes.func,
    searchText: PropTypes.string
  };

  static defaultProps = {
    onSearchChange: value => {},
    searchText: ""
  };

  /** Abrir campo de texto */
  openSearch = () => {
    this.setState({
      showSearchIcon: false,
      showLogo: false
    });
  };

  /** Fechar campo de texto */
  closeSearch = () => {
    this.setState({
      showSearchIcon: true,
      showLogo: true
    });

    this.props.onSearchChange("");
  };

  render() {
    const { classes, onSearchChange, searchText } = this.props;
    const { showSearchIcon, showLogo } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <img
              src={logo}
              alt="logo"
              className={`${classes.title} ${!showLogo && "logo-hide"}`}
            />

            <div className={classes.grow} />
            {showSearchIcon && (
              <SearchIcon
                className={`icon-click show-icon`}
                onClick={this.openSearch}
              />
            )}

            <SearchInput
              className={`${!showSearchIcon &&
                "show-flex"} search-input-toggle`}
              onClose={this.closeSearch}
              onTextChange={onSearchChange}
              textValue={searchText}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(SearchAppBar);
