import { NotFoundError } from "@/errors"
import { weatherRepository } from "@/repositories"
import { localesService, weatherService } from "@/services"
import { Trowel } from "styled-icons/fa-solid"
import { createLocales } from "../factories/localesFactory"
import { createWeather } from "../factories/weatherFactory"

beforeEach(() => {
	jest.clearAllMocks()
})

describe("weather service", () => {
	describe("get weather by locale id", () => {
		it("should return weather", async () => {
			const weather = createWeather()
			const locale = createLocales()
			jest.spyOn(localesService, "validateLocaleId").mockResolvedValue(
				locale[0]
			)
			jest.spyOn(
				weatherRepository,
				"getWeatherByLocaleId"
			).mockResolvedValue(weather)

			const response = await weatherService.getWeatherByLocaleId(
				locale[0].id,
				{
					startDate: new Date(),
					endDate: new Date(),
				}
			)
			expect(response).toEqual({
				locale: {
					id: locale[0].id,
					name: locale[0].name,
					state: locale[0].state,
				},
				weather,
			})
			expect(localesService.validateLocaleId).toHaveBeenCalledTimes(1)
			expect(
				weatherRepository.getWeatherByLocaleId
			).toHaveBeenCalledTimes(1)
		})

		it("should throw a not found error when locale id is invalid", async () => {
			const locale = createLocales()
			jest.spyOn(localesService, "validateLocaleId").mockImplementation(
				() => {
					throw new NotFoundError("Locale not found")
				}
			)
			jest.spyOn(
				weatherRepository,
				"getWeatherByLocaleId"
			).mockResolvedValue([])

			await expect(
				weatherService.getWeatherByLocaleId(locale[0].id, {
					startDate: new Date(),
					endDate: new Date(),
				})
			).rejects.toBeInstanceOf(NotFoundError)
			expect(localesService.validateLocaleId).toHaveBeenCalledTimes(1)
			expect(
				weatherRepository.getWeatherByLocaleId
			).toHaveBeenCalledTimes(0)
		})
	})
})
