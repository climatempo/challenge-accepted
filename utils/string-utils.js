
let stringUtils = {};

stringUtils.removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

module.exports = stringUtils;