import fs from 'fs';
import GlobalConfig from '../configs/config';
import LocaleModel from '../models/locale';

class ParseFile {
    static getFileLocales() {
        return new Promise((resolve, reject) => {
            fs.readFile(GlobalConfig.FILE_LOCALES, "utf-8", (err, data) => {
                if (err)
                    reject(err);
                else
                    resolve(data);
            });
        });
    }

    static parseData(data) {
        data = JSON.parse(data);
        let locales = [];

        data.forEach((el) => locales.push(new LocaleModel(el)));

        return locales;
    }

    /**
     * Mover para o controller
     */
    static async getLocales() {
        try {
            let data = await ParseFile.getFileLocales();
            return ParseFile.parseData(data);
        } catch (err) {
            return err.message
        }
    }

    /**
     * Mover para o controller
     */
    static async getLocale(name) {
        let locales = await ParseFile.getLocales();

        let response = {};

        locales.forEach((el) => {
            if (el.name.toUpperCase() == name.toUpperCase())
                response = el;
        });

        return response;
    }
}

export default ParseFile;