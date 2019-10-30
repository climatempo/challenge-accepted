import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import BodyApp from './BodyApp';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  inputRoot: {
    color: 'inherit',
  },

  img: {  
    margin: 'auto',
    maxWidth: 150,
    maxHeight: 150,
  },


  
}));

export default function Application() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
        <AppBar position="fixed" style={{backgroundColor: "#1565c0"}}>
          <Toolbar>
              <img className={classes.img} alt="complex" src="/images/logo-white.png" />
          </Toolbar>
        </AppBar>
        <BodyApp />
      
    </div>
  );
}
