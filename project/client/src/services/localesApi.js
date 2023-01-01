import api from "./api"

const getLocales = async query => api.get(`/locales?search=${query}`)

export default { getLocales }
