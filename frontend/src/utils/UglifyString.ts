const Uglify = (value: string) => {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll(" ", "_")
    .toLowerCase();
};

export default Uglify;
