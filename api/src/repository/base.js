const { promisify } = require('util');

const fs = require('fs');

const promisifiedRead = promisify(fs.readFile);

const basePath = './data';

const readFile = filename => {
  return promisifiedRead(`${basePath}/${filename}`);
};

const parseFile = content => {
  try {
    return JSON.parse(content);
  } catch (err) {
    return [];
  }
};

module.exports = {
  readFile,
  parseFile,
};
