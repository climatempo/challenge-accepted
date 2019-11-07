import api from './index';

class LocaleService {
  async getLocale(name) {
    return await api.get(`/locale`, {
      params: {
        name
      }
    });
  }
}

export default new LocaleService();