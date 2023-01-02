import { faker } from "@faker-js/faker"

const createWeather = (quantity: number = 1) => {
	const weather = []
	for (let i = 0; i < quantity; i++) {
		weather.push({
			id: parseInt(faker.random.numeric()),
			date: faker.date.past(),
			conditionText: faker.random.words(),
			minTemperature: parseFloat(faker.random.numeric()),
			maxTemperature: parseFloat(faker.random.numeric()),
			rainProbability: parseFloat(faker.random.numeric()),
			rainPrecipitation: parseFloat(faker.random.numeric()),
		})
	}
	return weather
}

export { createWeather }
