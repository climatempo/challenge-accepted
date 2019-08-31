/**
 * Actions do store de localizações
 *
 * @type mixins
 */
const actions = {
    /**
     * Busca todas as localizações na API
     *
     * @param commit
     * @returns {Promise<any>}
     */
    findAll({commit}) {
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line
            axios.get('api/locales')
                .then(response => { resolve(response.data) })
                .catch(error => { reject(error) })
        })
    }
};

export default actions
