import api from "./api"

const getWeather = async (localeId, period) =>
	api.get(
		`/weather/${localeId}?startDate=${period.startDate}&endDate=${period.endDate}`
	)

export default { getWeather }
