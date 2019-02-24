import React from "react";
import classes from "./Title.sass";

const Title = props => {
  return (
    <React.Fragment>
      <h2 className={classes.Title} ref={props.titleRef}>
        Bem Vindo !
      </h2>
    </React.Fragment>
  );
};

export default Title;
