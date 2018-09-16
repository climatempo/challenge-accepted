#bin/bash

rm -rf node_modules 
npm i 
cd api 
rm -rf node_modules 
npm i 
nohup npm start &>/dev/null & 
npm test 
cd ../ && yarn start