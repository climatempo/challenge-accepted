const Weather = require("../models/Weather");
const Locale = require("../models/Locale");
const validator = require("../utils/validators/weatherValidator");
const formater = require("../utils/format");
const TemperatureService = require("../services/TemperatureService");
const RainService = require("../services/RainService");

module.exports = {
  async index(req, res) {
    const defaultTemperatureMeasure = TemperatureService.getDefaultMeasure();
    const defaultRainMeasure = RainService.getDefaultMeasure();

    const { localeId } = req.params;
    const temperatureMeasure = req.query.temp
      ? req.query.temp.toUpperCase()
      : defaultTemperatureMeasure;
    const rainMeasure = req.query.rain
      ? req.query.rain.toUpperCase()
      : defaultRainMeasure;

    const { valid, msg } = validateParams(
      localeId,
      temperatureMeasure,
      rainMeasure
    );

    if (!valid) {
      return res.status(400).send(msg);
    }

    const locale = await Locale.findOne({ id: localeId });
    if (!locale) {
      return res.status(404).send("Locale not found");
    }

    const weather = await Weather.findOne({ locale: locale });
    if (!weather) {
      return res.status(404).send("Weather not found");
    }

    let reports = weather.weather;

    if (!validator.isEqual(temperatureMeasure, defaultTemperatureMeasure)) {
      reports = convertReportsTemperatures(
        reports,
        defaultTemperatureMeasure,
        temperatureMeasure
      );
    }

    if (!validator.isEqual(rainMeasure, defaultRainMeasure)) {
      reports = convertReportsPrecipitation(
        reports,
        defaultRainMeasure,
        rainMeasure
      );
    }

    return res.json(reports);
  },
};

const validateParams = (localeId, temperatureMeasure, rainMeasure) => {
  let result = {
    valid: true,
    msg: "Params are valid",
  };

  result = validator.validateLocaleId(localeId);

  if (result.valid) {
    result = validator.validateTemperatureMeasure(temperatureMeasure);
    if (result.valid) {
      return validator.validateRainMeasure(rainMeasure);
    }
  }

  return result;
};

const convertReportsTemperatures = (reports, fromMeasure, toMeasure) => {
  return reports.map((report) => {
    report.temperature.min = Math.round(
      formater.formatTemperature(report.temperature.min, fromMeasure, toMeasure)
    );
    report.temperature.max = Math.round(
      formater.formatTemperature(report.temperature.max, fromMeasure, toMeasure)
    );
    return report;
  });
};

const convertReportsPrecipitation = (reports, fromMeasure, toMeasure) => {
  return reports.map((report) => {
    let formatedPrecipitation = formater.formatPrecipitation(
      report.rain.precipitation,
      fromMeasure,
      toMeasure
    );
    report.rain.precipitation = formater.formatNumberInto2Decimals(
      formatedPrecipitation
    );
    return report;
  });
};
