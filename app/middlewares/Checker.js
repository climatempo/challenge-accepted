function checkCity(req, res, next) {
    if (
        req.query.city &&
        typeof req.query.city == "string" &&
        isNaN(req.query.city)
    ) {
        return next()
    }

    return res.status(400).json({
        message: "Cidade não informada"
    })
}

module.exports = { checkCity }
