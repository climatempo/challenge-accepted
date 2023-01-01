import { weatherSchema } from "@/schemas"
import { validateSchema } from "@/middlewares"
import { weatherController } from "@/controllers"

import Router from "express"

const weatherRouter = Router()

weatherRouter.get(
	"/:id",
	validateSchema(weatherSchema),
	weatherController.getWeatherByLocaleId
)

export default weatherRouter
