import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Close from "@material-ui/icons/Close";

import "./index.css";

/** Componente de campo de texto na Appbar */

const styles = theme => ({
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

function SearchInput({
  classes,
  className = "",
  onClose = () => {},
  onTextChange = valur => {},
  textValue = ""
}) {
  return (
    <div className={`searchinput ${className}`}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Buscar…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          onChange={event => {
            onTextChange(event.target.value);
          }}
          value={textValue}
        />
      </div>
      <Close className={"close-icon"} onClick={onClose} />
    </div>
  );
}

SearchInput.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  onClose: PropTypes.func,
  onTextChange: PropTypes.func,
  textValue: PropTypes.string
};

export default withStyles(styles)(SearchInput);
