import "express-async-errors"
import { Router } from "express"
import { handleError } from "@/middlewares"

import localesRouter from "./localesRouter"
import weatherRouter from "./weatherRouter"

const router = Router()

router
	.use("/locales", localesRouter)
	.use("/weather", weatherRouter)
	.use(handleError)

export default router
