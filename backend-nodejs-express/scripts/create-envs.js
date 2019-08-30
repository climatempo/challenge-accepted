import fs from 'fs';
import path from 'path';

const files = [
  { of: '.env.example', to: '.env' },
  { of: '.env.test.example', to: '.env.test' },
];

for (let key in files) {
  fs.copyFile(
    path.resolve(`${process.cwd()}/${files[key].of}`),
    path.resolve(`${process.cwd()}/${files[key].to}`),
    (err) => {
    if (err) throw err;
  });
}

