import express from "express";
import weatherJson from "../base/weather.json";

export async function findWeathers(req, res) {
  try {
      return res.status(200).send(weatherJson);
  } catch (err) {
    res.status(500).send({ message: "Error on find weathers." });
  }
}

export async function findWeathersByLocale(req, res) {
  const { locale } = req.params;
  try {
      for(let weather of weatherJson){
        if( weather.locale.name.toLowerCase() == locale.toLowerCase()){
          return res.status(200).send(weather);
        }
      }
      res.status(500).send({ message: "Error on find weathers from locale." });
  } catch (err) {
    res.status(500).send({ message: "Error on find weathers." });
  }
}