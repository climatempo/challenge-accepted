import React from 'react';
import classes from './style.sass';

export default () => {
  return (
    <div className={classes.NotFound}>
      <h2>Previsão não encontrada</h2>
      <p>Por favor, tente uma cidade próxima</p>
    </div>
  );
};
