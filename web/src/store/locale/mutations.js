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
    select (state, locale) {
        if (locale)
            state.selected = locale
    },
    /**
     * Limpa localização selecionada
     *
     * @param state
     */
    clear (state) {
        state.selected = {}
    }
};

export default mutations
