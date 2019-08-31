/**
 * Mutações do store de previsões
 *
 * @type mixins
 */
import moment from "moment";

const mutations = {
    /**
     * Limpa as previsões
     *
     * @param state
     */
    clearWeather (state) {
        state.weather = {}
    },
    /**
     * Seta previsões
     *
     * @param state
     * @param weather
     */
    setWeather (state, weather) {
        if(weather)
            weather.map(w => {
                w.date = moment(w.date).utc().format('DD/MM/YYYY');
                return w;
            });

        state.weather = weather;
    }
};

export default mutations
