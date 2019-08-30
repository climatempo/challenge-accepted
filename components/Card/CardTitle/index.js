import React from 'react';
import classes from './style.sass';

export default props => {
  return (
    <div className={classes.CardTitle}>
      <h3 className={classes.Date}>{props.date}</h3>
      <p className={classes.Description}>{props.description}</p>
    </div>
  );
}