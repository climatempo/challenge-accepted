const staticMeasures = [
  {
    id: 1,
    key: "c",
    label: "ºC",
  },
  {
    id: 2,
    key: "f",
    label: "ºF",
  },
];

export const getMeasures = () => {
  return staticMeasures;
};

export const getDefaultMeasure = () => {
  return staticMeasures[0];
};
