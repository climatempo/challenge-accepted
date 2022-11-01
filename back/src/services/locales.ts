import locales from "../database/locales";
import removeSpecialChars from "../utils/removeSpecialChars";

class LocalesService {
  getLocales(query: string) {
    const formattedQuery = removeSpecialChars(query);

    const filteredLocales = locales.filter((locale) => {
      const formmattedLocale = removeSpecialChars(locale.name);
      return formmattedLocale.includes(formattedQuery);
    });

    return filteredLocales;
  }
}

export default new LocalesService();
