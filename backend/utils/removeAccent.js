function removeAccent(txt) {
    return txt.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

module.exports = removeAccent