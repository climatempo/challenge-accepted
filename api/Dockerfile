FROM node:alpine

WORKDIR /user/tayanne

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]