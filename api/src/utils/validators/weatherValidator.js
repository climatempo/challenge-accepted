const TemperatureService = require("../../services/TemperatureService");
const RainService = require("../../services/RainService");

module.exports = {
  validateLocaleId(localeId) {
    const result = {
      valid: true,
      msg: "Locale is valid",
    };

    if (!localeId) {
      result.valid = false;
      result.msg = "Locale id is required";
    } else if (isNaN(localeId)) {
      result.valid = false;
      result.msg = "Invalid locale id";
    }

    return result;
  },
  validateTemperatureMeasure(measure) {
    const result = {
      valid: true,
      msg: "Temperature measure is valid",
    };

    const validMeasures = TemperatureService.getMeasures();

    if (validMeasures.indexOf(measure) === -1) {
      result.valid = false;
      result.msg = "Invalid temperature measure";
    }

    return result;
  },
  validateRainMeasure(measure) {
    const result = {
      valid: true,
      msg: "Rain measure is valid",
    };

    const validMeasures = RainService.getMeasures();

    if (validMeasures.indexOf(measure) === -1) {
      result.valid = false;
      result.msg = "Invalid rain measure";
    }

    return result;
  },
  isEqual(str, str2) {
    return str.toUpperCase() === str2.toUpperCase();
  },
};
