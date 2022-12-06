FROM node:alpine

WORKDIR /user/tayanne

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]