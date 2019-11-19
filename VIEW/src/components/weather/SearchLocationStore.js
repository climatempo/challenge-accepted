import { types, flow } from 'mobx-state-tree';

import Utils from '../utils/Utils';
import Actions from '../../data/Actions';
import { APIEndpoints } from '../../data/Constants';

/**
 * Store onde são guardados os modelos e os actions de acordo com o MOBX_STATE_TREE
 */
const Locale = types.model({
    "id": types.number,
    "latitude": types.number,
    "longitude": types.number,
    "name": types.string,
    "state": types.string
});

const ConditionWeather = types.model({
    period: types.model({
        begin: '2017-02-01',
        end: '2017-02-07',
    }),
    locale: types.model({
        "id": types.number,
        "latitude": types.number,
        "longitude": types.number,
        "name": types.string,
        "state": types.string
    }),
    weather: types.frozen()
});

export default types
    .model({
        locale: types.maybeNull(Locale),
        conditionWeather: types.maybeNull(ConditionWeather),
        loading: false
    })
    .actions(self => ({
        searchConditionWeather: flow(function* searchConditionWeather(id) {
            let conditionData = ''
            self.loading = true;
            try {
                conditionData = yield Actions.get(APIEndpoints.WEATHER + '/condition/' + id);
            } catch (error) {
                Utils.showErrorMessage((yield error).message);
                self.loading = false;
            }
            self.conditionWeather = conditionData;
            self.loading = false;
        }),
        searchLocale: flow(function* searchLocale(locationName) {
            let localeData = ''
            self.loading = true;
            try {
                localeData = yield Actions.post(APIEndpoints.WEATHER + '/location', { location: locationName });
            } catch (error) {
                Utils.showErrorMessage((yield error).message);
                self.loading = false;
            }

            self.locale = localeData;
            self.searchConditionWeather(localeData.id);
            self.loading = false;
        })
    }))
    .create({ loading: false, locale: null, conditionWeather: null });