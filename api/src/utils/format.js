module.exports = {
  formatElasticSearchQuery(query) {
    return query.replace("*", "");
  },
  formatTemperature(temp, srcMeasure, destMeasure) {
    if (srcMeasure.toUpperCase() === "C" && destMeasure.toUpperCase() === "F") {
      return temp * 1.8 + 32;
    } else if (
      srcMeasure.toUpperCase() === "F" &&
      destMeasure.toUpperCase() === "C"
    ) {
      return (temp - 32) / 1.8;
    }
    return temp;
  },
  formatPrecipitation(precipitation, srcMeasure, destMeasure) {
    if (
      srcMeasure.toUpperCase() === "MM" &&
      destMeasure.toUpperCase() === "INCH"
    ) {
      return precipitation / 25.4;
    } else if (
      srcMeasure.toUpperCase() === "INCH" &&
      destMeasure.toUpperCase() === "MM"
    ) {
      return precipitation * 25.4;
    }
    return precipitation;
  },
  formatNumberInto2Decimals(number) {
    return Math.round((number + Number.EPSILON) * 100) / 100;
  },
};
