const fs = require('fs').promises;
const { join } = require('path');

const readFile = async (fileName) => {
  try {
    const readContent = await fs.readFile(join(__dirname, `../../base/${fileName}.json`), 'utf-8');
    return JSON.parse(readContent);
  } catch (e) {
    console.log(`Error on trying to read the file | Error: ${e.message}`);
  }
};

const jsonContent = async (fileName) => {
  const content = await readFile(fileName);
  return content;
};

module.exports = { jsonContent };