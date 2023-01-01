import { NotFoundError } from "@/errors"
import { queryFactory } from "@/factories"
import { localesRepository } from "@/repositories"

const getLocales = async (query: string) => {
	return localesRepository.getLocalesByQuery(query)
}

const validateLocaleId = async (localeId: number) => {
	const locale = await queryFactory.getById(localeId, "Locale")
	if (!locale.id) throw new NotFoundError("Locale not found")
	return locale
}

export default {
	getLocales,
	validateLocaleId,
}
