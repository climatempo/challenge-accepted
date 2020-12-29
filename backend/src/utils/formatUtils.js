export default class FormatUtils {
  /**
   * Normalizar o conteúdo do texto
   * @param {String} text
   */
  static normalizeText(text) {
    return text.toLowerCase()
               .replace(/\s/g, '')
               .replace(/[Ç]/gi, 'c')
               .replace(/[ÁÀÂÃ]/gi, 'a')
               .replace(/[ÉÈÊ]/gi, 'e')
               .replace(/[ÍÌÎ]/gi, 'i')
               .replace(/[ÓÒÔÕ]/gi, 'o')
               .replace(/[ÚÙÛ]/gi, 'u')
  }

}