import { Period } from "@/types/weatherTypes"

import { localesService } from "@/services"
import { weatherRepository } from "@/repositories"

const getWeatherByLocaleId = async (localeId: number, period: Period) => {
	const { startDate, endDate } = period
	const locale = await localesService.validateLocaleId(localeId)

	const weather = await weatherRepository.getWeatherByLocaleId(
		localeId,
		new Date(startDate),
		new Date(endDate)
	)

	return {
		locale: {
			id: locale.id,
			name: locale.name,
			state: locale.state,
		},
		weather,
	}
}

export default {
	getWeatherByLocaleId,
}
