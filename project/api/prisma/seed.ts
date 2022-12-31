import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const main = async () => {
	const locales = [
		{
			name: "Osasco",
			state: "SP",
			latitude: -23.532,
			longitude: -46.792,
		},
		{
			name: "São Paulo",
			state: "SP",
			latitude: -23.548,
			longitude: -46.636,
		},
	]

	const weather = [
		{
			date: "2017-02-01",
			conditionText:
				"Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
			minTemperature: 20,
			maxTemperature: 28,
			rainProbability: 60,
			rainPrecipitation: 20,
			localeId: 1,
		},
		{
			date: "2017-02-02",
			conditionText:
				"Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
			minTemperature: 21,
			maxTemperature: 30,
			rainProbability: 60,
			rainPrecipitation: 10,
			localeId: 1,
		},
		{
			date: "2017-02-03",
			conditionText:
				"Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
			minTemperature: 22,
			maxTemperature: 31,
			rainProbability: 60,
			rainPrecipitation: 15,
			localeId: 1,
		},
		{
			date: "2017-02-04",
			conditionText:
				"Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
			minTemperature: 22,
			maxTemperature: 32,
			rainProbability: 60,
			rainPrecipitation: 16,
			localeId: 1,
		},
		{
			date: "2017-02-05",
			conditionText:
				"Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
			minTemperature: 23,
			maxTemperature: 32,
			rainProbability: 67,
			rainPrecipitation: 32,
			localeId: 1,
		},
		{
			date: "2017-02-06",
			conditionText:
				"Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
			minTemperature: 22,
			maxTemperature: 33,
			rainProbability: 60,
			rainPrecipitation: 8,
			localeId: 1,
		},
		{
			date: "2017-02-07",
			conditionText:
				"Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
			minTemperature: 25,
			maxTemperature: 30,
			rainProbability: 60,
			rainPrecipitation: 11,
			localeId: 1,
		},

		{
			date: "2017-02-01",
			conditionText:
				"Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
			minTemperature: 19,
			maxTemperature: 27,
			rainProbability: 60,
			rainPrecipitation: 20,
			localeId: 2,
		},
		{
			date: "2017-02-02",
			conditionText:
				"Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
			minTemperature: 20,
			maxTemperature: 29,
			rainProbability: 60,
			rainPrecipitation: 15,
			localeId: 2,
		},
		{
			date: "2017-02-03",
			conditionText:
				"Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
			minTemperature: 21,
			maxTemperature: 30,
			rainProbability: 60,
			rainPrecipitation: 15,
			localeId: 2,
		},
		{
			date: "2017-02-04",
			conditionText:
				"Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
			minTemperature: 21,
			maxTemperature: 31,
			rainProbability: 60,
			rainPrecipitation: 11,
			localeId: 2,
		},
		{
			date: "2017-02-05",
			conditionText:
				"Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
			minTemperature: 22,
			maxTemperature: 31,
			rainProbability: 67,
			rainPrecipitation: 17,
			localeId: 2,
		},
		{
			date: "2017-02-06",
			conditionText:
				"Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
			minTemperature: 21,
			maxTemperature: 32,
			rainProbability: 60,
			rainPrecipitation: 8,
			localeId: 2,
		},
		{
			date: "2017-02-07",
			conditionText:
				"Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
			minTemperature: 22,
			maxTemperature: 33,
			rainProbability: 60,
			rainPrecipitation: 26,
			localeId: 2,
		},
	]

	prisma.locale.createMany({ data: locales })
	prisma.weather.createMany({ data: weather })
}

main()
	.catch(e => console.error(e))
	.finally(async () => await prisma.$disconnect())
