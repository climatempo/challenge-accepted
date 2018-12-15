class Format {
    /**
     * Remove acentos do texto
     * @param {String} text 
     */
    static formatChars(text) {
        text = text.toLowerCase()
            .replace(/[ÁÀÂÃ]/gi, 'a')
            .replace(/[ÉÈÊ]/gi, 'e')
            .replace(/[ÍÌÎ]/gi, 'i')
            .replace(/[ÓÒÔÕ]/gi, 'o')
            .replace(/[ÚÙÛ]/gi, 'u')
            .replace(/[Ç]/gi, 'c');

        return text;
    }

    /**
     * Remove espacos do texto
     * @param {String} text 
     */
    static removeSpace(text) {
        return text.replace(/\s/g, '');
    }

    /**
     * Remove espacos e acentos do texto
     * @param {String} text 
     */
    static clearText(text) {
        text = Format.removeSpace(text);
        return Format.formatChars(text);
    }
}

export default Format;