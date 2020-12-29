import fs from 'fs'

export default class FileUtils {
  /**
   * Transformar conteúdo para JSON
   * @param {String} content
   */
  static parseContent(content) {
    return JSON.parse(content)
  }

  /**
   * Ler conteúdo de arquivo
   * @param {String} filepath
   */
  static async getContent(filepath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filepath, 'utf-8', (error, content) => {
        if(error)
          return reject(error)
        
        return resolve(content)
      })
    })
  }
}