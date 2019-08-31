import mutations from './mutations'
import actions from './actions'
import getters from './getters'

/**
 * Store de previsões
 *
 * @type mixins
 */
const weatherStore = {
    state: {
        weather: []
    },
    mutations: mutations,
    actions: actions,
    getters: getters
};

export default weatherStore
