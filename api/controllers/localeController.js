import express from "express";
import localeJson from "../../base/locales.json";

export async function findLocales(req, res) {
  try {
      return res.status(200).send(localeJson);
  } catch (err) {
    res.status(500).send({ message: "Error on find locales." });
  }
}