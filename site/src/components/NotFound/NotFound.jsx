import React from "react";
import classes from "./NotFound.sass";

export const NotFound = props => {
  return (
    <div className={classes.NotFound}>
      <h2>Previsão não encontrada</h2>
      <p>Provavelmente a cidade que você buscou não existe. Por favor, busque outra cidade</p>
    </div>
  );
};
