import React from "react";
import classes from './Title.sass';

const Title = props => {

  let title = <h2 className={classes.Title} ref={props.titleRef}>Bem Vindo !</h2>;

  if (props.city !== "") {
    title = <h2 className={classes.Title}>Previsão para {props.city}</h2>;
  }

  return (
    <React.Fragment>
      <h2 className={classes.Title} ref={props.titleRef}>Bem Vindo !</h2>
    </React.Fragment>
  );
};

export default Title;