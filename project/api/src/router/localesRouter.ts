import { localesSchema } from "@/schemas"
import { validateSchema } from "@/middlewares"
import { localesController } from "@/controllers"

import Router from "express"

const localesRouter = Router()

localesRouter.get(
	"/",
	validateSchema(localesSchema),
	localesController.getLocales
)

export default localesRouter
