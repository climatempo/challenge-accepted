FROM node:alpine

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && \
  npm install --quiet node-gyp -g

COPY package.json .
COPY package-lock.json .
COPY build ./build

RUN npm install -g serve

EXPOSE 3000

CMD [ "serve", "-p", "3000", "-s", "build" ]