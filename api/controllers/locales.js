const locales = require('../base/locales.json')

module.exports = app => {
    const locale = (req, res) => {
        const id = Number(req.query.id)
        if(id){
            locales.map(local => {
                if(local.id === id){
                    res.send(local)
                }
            })
        } else {
            res.send(locales)
        }
    }

    return { locale }
}