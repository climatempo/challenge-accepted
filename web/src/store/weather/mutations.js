/**
 * Mutações do store de previsões
 *
 * @type mixins
 */
const mutations = {
    /**
     * Limpa as previsões
     *
     * @param state
     */
    clearWeather (state) {
        state.weather = {}
    },
    /**
     * Seta previsões
     *
     * @param state
     * @param weather
     */
    setWeather (state, weather) {
        state.weather = weather;
    }
};

export default mutations
