const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.disable("etag")
app.use(cors())
app.use(morgan("dev"))
app.use(express.static(__dirname + "/public"))

app.get("/api", (req, res) =>
    res.json({ status: "success", message: "ClimaTempo API running!" })
)

app.use("/", require("./routes"))

app.use((req, res) => {
    return res.status(404).json({
        status: "Failed",
        message: "Route not found!"
    })
})

module.exports = app
