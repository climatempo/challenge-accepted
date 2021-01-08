import api from "../api";

class LocaleData {
  index() {
    return api.get("locales");
  }
}

export default new LocaleData();
