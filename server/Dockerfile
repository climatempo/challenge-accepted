FROM node:19.0.0
WORKDIR /climatempo
COPY ./package.json ./package.json
RUN npm install
COPY . .

RUN npm run build

EXPOSE 4000
CMD ["node", "build/index.js"]
