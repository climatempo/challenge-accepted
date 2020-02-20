import { types, flow } from 'mobx-state-tree';

import Utils from '../utils/Utils';
import Actions from '../../data/Actions';
import { APIEndpoints } from '../../data/Constants';

export default types
  .model({
    loading: types.boolean,
    locale: types.frozen()
  })

  .actions(self => ({
    setAttribute: (attr, value) => (self[attr] = value),

    getLocale: flow(function* getLocale(search) {
      if (search) {
        self.loading = true;
        try {
          self.locale = yield Actions.get(APIEndpoints.WEATHER + '/' + search);
        } catch (err) {
          self.locale = {};
          Utils.showErrorMessage((yield err).message);
        }
        self.loading = false;
      } else {
        Utils.showErrorMessage('O campo Localidade deve ser preenchido.');
      }
    })
  }))
  .create({
    loading: false,
    locale: {}
  });
