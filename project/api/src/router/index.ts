import { Router } from "express"
import localesRouter from "./localesRouter"

const router = Router()

router.use("/locales", localesRouter)

export default router
