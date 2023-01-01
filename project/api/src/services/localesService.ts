import { NotFoundError } from "@/errors"
import { queryFactory } from "@/factories"
import { localesRepository } from "@/repositories"

const getLocales = async (query: string) => {
	return localesRepository.getLocalesByQuery(query)
}

const validateLocaleId = async (localeId: number) => {
	const id = await queryFactory.getById(localeId, "Locale")
	if (!id) throw new NotFoundError("Locale not found")
	return id
}

export default {
	getLocales,
	validateLocaleId,
}
