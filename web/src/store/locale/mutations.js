/**
 * Mutações do store de localizações
 *
 * @type mixins
 */
const mutations = {
    /**
     * Seleciona uma localização
     *
     * @param state
     * @param locale
     */
    selectLocale (state, locale) {
        if (locale)
            state.selected = locale
    },
    /**
     * Limpa localização selecionada
     *
     * @param state
     */
    clearSelectedLocale (state) {
        state.selected = {}
    },
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
