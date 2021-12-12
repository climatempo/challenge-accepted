const staticMeasures = [
  {
    id: 1,
    key: "mm",
    label: "mm",
  },
  {
    id: 2,
    key: "inch",
    label: "inch",
  },
];

export const getMeasures = () => {
  return staticMeasures;
};

export const getDefaultMeasure = () => {
  return staticMeasures[0];
};
