import path from 'path';
import fs from 'fs';

export default (app) => {
  try {
    const normalizedPath = path.join(__dirname);
    fs.readdirSync(normalizedPath).forEach(curr => {
      const pathToLoad = `${normalizedPath}/${curr}`;
      if (fs.statSync(pathToLoad).isDirectory()) {
        fs.readdirSync(pathToLoad).forEach(file => {
          if (file === 'index.js') require(`${pathToLoad}/${file}`).default(app);
        });
      }
    });
  } catch (err) {
    global.console.error(err);
  }
};
