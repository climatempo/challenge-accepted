import { localesRepository } from "@/repositories"

const getLocales = async (query: string) => {
	return localesRepository.getLocalesByQuery(query)
}

export default {
	getLocales,
}
