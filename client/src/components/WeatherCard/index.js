import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

import drop from "../../images/icons/raindrop.svg";
import umbrella from "../../images/icons/umbrella.svg";
import { dateParser } from "../../utils/dateParser";
import "./index.css";

/** Componete para mostrar um clima em um card */

const styles = {
  card: {
    minWidth: 300,
    maxWidth: 300
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function WeatherCard({ classes, weather, className = "" }) {
  return (
    <Card className={`${classes.card} ${className}`}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {dateParser(weather.date)}
        </Typography>
        <Typography component="p">{weather.text}</Typography>
        <div className={"weather-infos-container"}>
          <ArrowUpward style={{ color: "#f44336" }} />
          <Typography variant="h6" style={{ color: "#f44336" }}>{`${
            weather.temperature.max
          }ºC`}</Typography>
          <ArrowDownward style={{ color: "#3f51b5" }} />
          <Typography variant="h6" style={{ color: "#3f51b5" }}>
            {`${weather.temperature.min}ºC`}
          </Typography>
          <img src={drop} alt="gota" style={{ height: "1.25em" }} />
          <Typography variant="h6" style={{ color: "#2196f3" }}>{`${
            weather.rain.precipitation
          }mm`}</Typography>
          <img src={umbrella} alt="guarda-chuva" style={{ height: "1.25em" }} />
          <Typography variant="h6" style={{ color: "#9c27b0" }}>{`${
            weather.rain.probability
          }%`}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}

WeatherCard.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  weather: PropTypes.object.isRequired
};

export default withStyles(styles)(WeatherCard);
