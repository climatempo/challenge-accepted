function fahrenheitToCelsius(value) {
    return (value - 32)/ 1.8
};

function celsiusToFahrenheit(value) {
    return (value * 1.8)+ 32
};

function converterTemperature(temperature, currentUnit, unit) {
    if(currentUnit == 'F' && unit == 'C'){
        temperature.min = Math.round(fahrenheitToCelsius(temperature.min))
        temperature.max = Math.round(fahrenheitToCelsius(temperature.max))
        return temperature
    } else if (currentUnit == 'C' && unit == 'F') {
        temperature.min = Math.round(celsiusToFahrenheit(temperature.min)) 
        temperature.max = Math.round(celsiusToFahrenheit(temperature.max)) 
        return temperature
    } else {
        return temperature
    } 
};

function mmToInch(value) {
    return (value / 25.4)
};

function inchToMm(value) {
    return (value * 25.4)
};

function converterPrecipitation(precipitation, currentUnit, unit) {
    if(currentUnit == 'mm' && unit == 'inch'){
        return mmToInch(precipitation)
    } else if (currentUnit == 'inch' && unit == 'mm') {
        return inchToMm(precipitation)
    } else {
        return precipitation
    } 
};

module.exports = {
    converterTemperature,
    converterPrecipitation
};