export const isMeasureValid = (measures, measure) => {
  return measures.indexOf(measure) > -1;
};

export const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
