import fs from 'fs';

class ParseFile {

    /**
     * Retorna conteudo de um arquivo
     * @param {String} path 
     */
    static getFileContent(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, "utf-8", (err, data) => {
                if (err)
                    reject(err);
                else
                    resolve(data);
            });
        });
    }

    /**
     * Converte objeto para JSON
     * @param {Object} data 
     */
    static parseData(data) {
        return JSON.parse(data);
    }
}

export default ParseFile;