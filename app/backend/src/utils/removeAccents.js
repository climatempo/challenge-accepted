// Reference: https://pt.stackoverflow.com/questions/237762/remover-acentos-javascript#:~:text=var%20the_title%20%3D%20retira_acentos(this.,os%20acentos%20devem%20ser%20removidos.

const removeAccents = (text) => {
  text = text.toLowerCase();
  text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
  text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
  text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
  text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
  text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
  text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
  return text;
};

module.exports = removeAccents;
