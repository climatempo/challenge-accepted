import { NotFoundError } from "@/errors"
import { queryFactory } from "@/factories"
import { localesRepository } from "@/repositories"
import { localesService } from "@/services"
import { createLocales } from "../factories/localesFactory"

beforeEach(() => {
	jest.clearAllMocks()
})

describe("locales service", () => {
	describe("get Locales", () => {
		it("should return locales", async () => {
			const locales = createLocales()

			jest.spyOn(
				localesRepository,
				"getLocalesByQuery"
			).mockResolvedValue(locales[0])

			const response = await localesService.getLocales(locales[0].name)
			expect(response).toEqual(locales[0])
			expect(localesRepository.getLocalesByQuery).toHaveBeenCalledTimes(1)
		})

		it("should return an empty array", async () => {
			const locales = createLocales()
			jest.spyOn(
				localesRepository,
				"getLocalesByQuery"
			).mockResolvedValue([])
			const response = await localesService.getLocales(locales[0].name)
			expect(response).toEqual([])
			expect(localesRepository.getLocalesByQuery).toHaveBeenCalledTimes(1)
		})
	})

	describe("validate locale", () => {
		it("should return a locale", async () => {
			const locales = createLocales()
			jest.spyOn(queryFactory, "getById").mockResolvedValue(locales[0])
			const response = await localesService.validateLocaleId(
				locales[0].id
			)
			expect(response).toEqual(locales[0])
			expect(queryFactory.getById).toHaveBeenCalledTimes(1)
		})
		it("should return a not found error", async () => {
			const locales = createLocales()
			jest.spyOn(queryFactory, "getById").mockResolvedValue(undefined)

			await expect(
				localesService.validateLocaleId(locales[0].id)
			).rejects.toBeInstanceOf(NotFoundError)
			expect(queryFactory.getById).toHaveBeenCalledTimes(1)
		})
	})
})
