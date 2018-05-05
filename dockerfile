FROM node:latest

RUN npm install -g nodemon
RUN mkdir /app
WORKDIR /app
EXPOSE 3000
