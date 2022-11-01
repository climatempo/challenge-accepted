function removeSpecialChars(str: string) {
  const handledString = str
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return handledString;
}

export default removeSpecialChars;
