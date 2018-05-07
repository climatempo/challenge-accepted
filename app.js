const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")
const swagger = require("swagger-ui-express")
const path = require("path")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.disable("etag")
app.use(cors())

// Are we testing ?
if (process.env.NODE_ENV !== "test") {
    app.use(morgan("dev"))
}

// swagger docs
app.use("/api/docs", swagger.serve, swagger.setup(require("./swagger.json")))

// main API Route
app.get("/api", (req, res) =>
    res.json({ status: "success", message: "ClimaTempo API running!" })
)

// static public folder
app.use("/public", express.static(path.join(__dirname, "public")))

// get our routes
app.use("/", require("./routes"))

// if it's not found ...
app.use((req, res) => {
    return res.status(404).json({
        status: "Failed",
        message: "Route not found!"
    })
})

module.exports = app
