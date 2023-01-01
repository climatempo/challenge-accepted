import prisma from "@/db"

const getWeatherByLocaleId = async (
	localeId: number,
	startDate: Date | null,
	endDate: Date | null
) =>
	prisma.weather.findMany({
		where: {
			localeId,
			...(startDate && {
				date: {
					gte: startDate,
				},
			}),
			...(endDate && {
				date: {
					lte: endDate,
				},
			}),
		},
		select: {
			id: true,
			date: true,
			conditionText: true,
			minTemperature: true,
			maxTemperature: true,
			rainProbability: true,
			rainPrecipitation: true,
		},
	})

export default {
	getWeatherByLocaleId,
}
