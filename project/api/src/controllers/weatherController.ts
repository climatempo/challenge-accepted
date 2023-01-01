import { Request, Response } from "express"
import { weatherService } from "@/services"
import { Period } from "@/types/weatherTypes"

const getWeatherByLocaleId = async (req: Request, res: Response) => {
	const localeId = req.params.id
	const period = req.query as unknown as Period
	const weather = await weatherService.getWeatherByLocaleId(
		parseInt(localeId),
		period
	)
	res.send(weather)
}

export default {
	getWeatherByLocaleId,
}
