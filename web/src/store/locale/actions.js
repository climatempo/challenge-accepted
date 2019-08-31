import axios from 'axios';

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
    findAllLocales({commit}) {
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line
            axios.get('api/locales')
                .then(response => {
                    commit('setLocales', response.data);
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
};

export default actions
