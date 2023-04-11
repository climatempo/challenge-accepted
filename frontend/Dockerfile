FROM node:16 as build 

WORKDIR /app
COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn install

COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.node.json ./tsconfig.node.json 
COPY ./vite.config.ts ./vite.config.ts

COPY ./public ./public
COPY ./src ./src
COPY ./index.html ./index.html

RUN yarn build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist .

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]