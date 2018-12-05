import React from "react";
import PropTypes from "prop-types";

import cloud from "../../images/icons/sad-cloud.png";
import { Typography } from "@material-ui/core";

/** Componente com mensagem de error quando o dado não é encontrado */

function NotFound({ query, className = "" }) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <Typography
        variant="h5"
        color="textSecondary"
        style={{
          textAlign: "center",
          paddingLeft: "16px",
          paddingRight: "16px"
        }}
      >{`Nenhum resultado para "${query}"`}</Typography>
      <img alt="nuvem triste" src={cloud} style={{ width: "300px" }} />
    </div>
  );
}

NotFound.propTypes = {
  className: PropTypes.string,
  query: PropTypes.string.isRequired
};

export default NotFound;
