import { Period } from "@/types/weatherTypes"

import { localesService } from "@/services"
import { weatherRepository } from "@/repositories"

const getWeatherByLocaleId = async (localeId: number, period: Period) => {
	const { startDate, endDate } = period
	await localesService.validateLocaleId(localeId)
	return weatherRepository.getWeatherByLocaleId(
		localeId,
		new Date(startDate),
		new Date(endDate)
	)
}

export default {
	getWeatherByLocaleId,
}
