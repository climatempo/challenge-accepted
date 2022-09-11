const InvalidParam = require("../customErros/InvalidParam");

function idValidation(id) {
    if(id == undefined){
        throw new InvalidParam('id', 'id é obrigatório')
    }
}

function temperatureUnitValidation(temperatureUnit) {
    if(temperatureUnit == undefined){
        throw new InvalidParam('temperatureUnit', 'temperatureUnit é obrigatório')
    }

    if(temperatureUnit != 'C' && temperatureUnit != 'F') {
        throw new InvalidParam('temperatureUnit', 'temperatureUnit precisa ser C ou F')
    }
}

function precipitationUnitValidation(precipitationUnit) {
    if(precipitationUnit == undefined){
        throw new InvalidParam('precipitationUnit', 'precipitationUnit é obrigatório')
    }

    if(precipitationUnit != 'mm' && precipitationUnit != 'inch') {
        throw new InvalidParam('precipitationUnit', 'precipitationUnit precisa ser mm ou inch')
    }
}

module.exports = {
    idValidation,
    temperatureUnitValidation,
    precipitationUnitValidation
}