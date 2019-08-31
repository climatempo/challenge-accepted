import axios from 'axios';

/**
 * Actions do store de previsões
 *
 * @type mixins
 */
const actions = {
    /**
     * Busca todas as previsões na API por uma localização
     *
     * @param commit
     * @returns {Promise<any>}
     */
    findAllWeatherByLocale({commit}, locale) {
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line
            if(locale && locale.id) {
                axios.get('api/locales/' + locale.id + '/weather')
                    .then(response => {
                        commit('setWeather', response.data);
                        resolve(response.data)
                    })
                    .catch(error => {
                        reject(error)
                    })
            } else {
                commit('clearWeather');
                resolve();
            }
        })
    }
};

export default actions
