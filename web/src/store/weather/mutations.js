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
    setLocales (state, weather) {
        state.weather = weather;
    }
};

export default mutations
