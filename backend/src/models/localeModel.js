import data from "../../base/locales";

class LocaleModel {
  getLocaleByName(name) {
    return data.find(item => item.name.toLowerCase() == name.toLowerCase());
  }
}

const Model = new LocaleModel();
export default Model;
