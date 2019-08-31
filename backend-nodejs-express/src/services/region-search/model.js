let REGIONS = [];

try {
  REGIONS = require('./locales.json');
} catch (err) {
  global.console.error(err);
}

export const getAllRegions = async () => {
  return Promise.resolve(REGIONS);
};

export const getRegionsByName = async (name) => {
  return Promise.resolve(REGIONS.filter(region => region.name.match(new RegExp(name, 'gi'))));
};
