const isTest = () => {
  return process.env.NODE_ENV === 'test';
};

const isDev = () => {
  return process.env.NODE_ENV === 'development';
};

const isProduction = () => {
  return process.env.NODE_ENV === 'production';
};

module.exports = {
  isTest,
  isDev,
  isProduction,
};
