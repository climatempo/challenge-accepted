import mutations from './mutations'
import actions from './actions'
import getters from './getters'

/**
 * Store de localizaçeõs
 *
 * @type mixins
 */
const localeStore = {
    state: {
        locales: []
    },
    mutations: mutations,
    actions: actions,
    getters: getters
};

export default localeStore
