import { Context } from "../Context";
import fileManager from "./../helpers/FileManager";
import { ILocale } from "./../types";

class LocaleService {
  /**
   * Import file content to database
   *
   * @memberof LocaleService
   */
  async importFileContentToDatabase() {
    const { PATH_LOCALES_JSON } = process.env;

    const locales = await fileManager.getJsonFromFile<ILocale[]>(PATH_LOCALES_JSON!);

    console.log("\nImportando cidades...");
    for (const locale of locales) {
      try {
        await Context.getInstance().db.locales.save({
          identification: locale.id,
          latitude: locale.latitude,
          longitude: locale.longitude,
          name: locale.name,
          state: locale.state,
        });

        console.log(`${locale.id} - ${locale.name}: OK`);
      } catch (err) {
        if (err.routine === "_bt_check_unique") {
          console.error(`${locale.id} ${locale.name} já inserida na base de dados.`);
        } else {
          console.error(err);
          throw err;
        }
      }
    }
  }
}
export default new LocaleService();
