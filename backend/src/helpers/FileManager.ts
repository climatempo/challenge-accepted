import * as fs from "fs";

class FileManager {
  /**
   * Get JSON from file
   *
   * @param {string} filePath
   * @returns {Promise<T>}
   * @memberof FileManager
   */
  public async getJsonFromFile<T>(filePath: string): Promise<T> {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, "utf8", (err, fileContent) => {
        if (err) {
          reject(err);
        } else {
          const obj: T = JSON.parse(fileContent);

          resolve(obj);
        }
      });
    });
  }
}
export default new FileManager();
