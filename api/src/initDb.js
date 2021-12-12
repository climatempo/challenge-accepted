const mongoose = require("mongoose");
const elasticsearch = require("elasticsearch");

const Locale = require("./models/Locale");
const Weather = require("./models/Weather");

const Db = require("./db/mongo");

const locales = require("./base/locales");
const weather = require("./base/weather");

const insertedLocales = [];
const insertedWeather = [];

const importData = async () => {
  Db.connect();
  await dropExistingCollections();
  await removeElasticSearchIndexes();
  await importLocales();
  await importWeather();
  Db.disconnect();
};

const dropExistingCollections = async () => {
  await dropExistingCollection(Locale, "locales");
  await dropExistingCollection(Weather, "weathers");
};

const dropExistingCollection = async (model, collectionName) => {
  try {
    await model.collection.drop();
  } catch (err) {
    handleErrorOnCollectionRemoval(collectionName, err);
  }
};

const handleErrorOnCollectionRemoval = (collectionName, err) => {
  if (err.name === "MongoError") {
    console.log(
      `${collectionName} collection doesn\'t exist. Skipping removal...`
    );
  } else {
    console.log(
      `Unknown error while trying to remove ${collectionName} collection...`
    );
  }
};

const removeElasticSearchIndexes = async () => {
  await removeLocalesIndex();
};

const removeLocalesIndex = async () => {
  const client = new elasticsearch.Client({
    hosts: ["http://localhost:9200"],
  });

  try {
    await client.indices.delete({
      index: "locales",
    });
  } catch (err) {
    if (
      err.status === 404 &&
      err.body?.error?.type === "index_not_found_exception"
    ) {
      console.log("locales index doesn't exist. Skipping removal...");
    } else {
      console.log("Unknown error while trying to remove locales index...");
    }
  }
};

const importLocales = async () => {
  for (const locale of locales) {
    const newLocale = await Locale.create(locale);
    insertedLocales.push(newLocale);
  }
};

const importWeather = async () => {
  for (const report of weather) {
    report.locale = insertedLocales.find(
      (locale) => locale.id === report.locale.id
    );
    const newWeather = await Weather.create(report);
    insertedWeather.push(newWeather);
  }
};

importData();
