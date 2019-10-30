import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  
  card: {
    minWidth: 275,
    maxWidth: 450,
  },
  
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },

  textTemp: {
    fontSize: 13,
  },
  pos: {
    marginBottom: 12,
  },

  body: {
      marginTop: 0,
      backgroundColor: "#E8E8E8"
  },

  img: {  
    margin: 'auto',
    maxWidth: "100%",
    maxHeight: "100%",
    padding: theme.spacing(2),
  },

}));

export default function CardItem({temp, city}) {
  const classes = useStyles();
    let forcast = "";
    
    if (city) {
       forcast = <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                Previsão para {city.name} - {city.state}
            </Typography>
    } else {
        forcast = <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            
            </Typography>
    }

  return (
    <div>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                {forcast}
                {temp.map((value, index) => (
                  <div key={index}>
                  <Grid container spacing={3}>
                      <Grid item xs={12}> 
                         <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                                    {value.date}
                                </Typography>
                                <Typography color="textSecondary" className={classes.textTemp} gutterBottom component="p">
                                    Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.
                                </Typography>
                            
                            </CardContent>
                            
                            <CardContent  className={classes.body}>
                                <Grid container space={0} justify="space-evenly" className={classes.root}>
                                    <Grid item xs={2}>
                                        <img className={classes.img} alt="Máxima" src="/images/icons/upload.png" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography style={{color:"#2196f3"}} gutterBottom component={'span'}>
                                            <Box style={{ fontSize:25}} m={1}>
                                                20ºC
                                            </Box>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <img className={classes.img} alt="Máxima" src="/images/icons/download.png" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography style={{color:"#d32f2f"}} gutterBottom component={'span'} >
                                            <Box style={{ fontSize:25}} m={1}>
                                                10ºC
                                            </Box>
                                        </Typography>
                                    </Grid>
            
                                </Grid>
                                <Grid container space={0} justify="space-evenly" className={classes.root}>
                                    <Grid item xs={2}>
                                        <img className={classes.img} alt="Máxima" src="/images/icons/raindrop-close-up.png" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography  gutterBottom component={'span'}>
                                            <Box style={{ fontSize:25}} m={1}>
                                                10mm
                                            </Box>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <img className={classes.img} alt="Máxima" src="/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography gutterBottom component={'span'}>
                                            <Box style={{ fontSize:25}} m={1}>
                                                50 %
                                            </Box>
                                        </Typography>
                                    </Grid>
            
                                </Grid>
                                
                            </CardContent>
                        </Card>
                      </Grid>
                  </Grid>
                  </div>
                ))}

            </Grid>
        </Grid>
    </div>
  );
}
