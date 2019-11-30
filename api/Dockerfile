FROM node:alpine

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && \
  npm install --quiet node-gyp -g

WORKDIR /api

COPY package.json .
COPY package-lock.json .
COPY .babelrc .
COPY src/ ./src

RUN npm install
RUN ls -la

EXPOSE 3000

CMD [ "npm", "run", "start" ]