class InvalidParam extends Error {
    constructor (paramName, msg) {
        super(msg)
        this.paramName = paramName

    }

}

module.exports = InvalidParam