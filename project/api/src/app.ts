import express from "express"
import cors from "cors"
import router from "@/router"

const app = express()
app.use(cors)
app.use(express.json())
app.use(router)

import localesRepository from "@/repositories/localesRepository"

const teste = async () => {
	const locales = await localesRepository.getWeatherByLocaleIdPeriod()
	console.log(locales)
}
teste()

export default app
