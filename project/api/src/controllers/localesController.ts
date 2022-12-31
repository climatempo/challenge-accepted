import { Request, Response } from "express"
import { localesService } from "@/services"

const getLocales = async (req: Request, res: Response) => {
	const { search } = req.query
	const locales = await localesService.getLocales(search.toString())
	res.send(locales)
}

export default {
	getLocales,
}
