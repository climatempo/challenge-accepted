import { faker } from "@faker-js/faker"

const createLocales = (quantity: number = 1) => {
	const locales = []
	for (let i = 0; i < quantity; i++) {
		locales.push({
			id: parseInt(faker.random.numeric()),
			name: faker.random.locale(),
			state: faker.random.word(),
		})
	}

	return locales
}

export { createLocales }
