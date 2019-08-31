/**
 * Mutações do store de previsões
 *
 * @type mixins
 */
const mutations = {
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
