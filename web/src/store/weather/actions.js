import axios from 'axios';

/**
 * Actions do store de previsões
 *
 * @type mixins
 */
const actions = {
    /**
     * Busca todas as previsões na API
     *
     * @param commit
     * @returns {Promise<any>}
     */
    findAllByLocaleId({commit, localeId}) {
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line
            axios.get('api/locales/' + localeId + '/weather')
                .then(response => {
                    commit('setWeather', response.data);
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
};

export default actions
