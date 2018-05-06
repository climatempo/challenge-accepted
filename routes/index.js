const router = require("express").Router()
const api = require("./api")
const path = require("path")

// API Routes
router.use("/api", api)

// Web app dash route
router.get("/", (req, res) => {
    return res
        .status(200)
        .sendFile(path.resolve(__dirname + "/../app/views/DashView.html"))
})

module.exports = router
