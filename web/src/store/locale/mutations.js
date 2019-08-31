/**
 * Mutações do store de localizações
 *
 * @type mixins
 */
const mutations = {
    /**
     * Seta localizações
     *
     * @param state
     * @param locales
     */
    setLocales (state, locales) {
        state.locales = locales;
    }
};

export default mutations
