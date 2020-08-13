FROM node:12-alpine AS build
# Caso seja necessário o uso de dependências que necessitem de build, descomentar o código abaixo
# RUN apk add --no-cache alpine-sdk python3
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci --dev
COPY . /app/
RUN npx tsc

FROM node:12-alpine
# Caso seja necessário o uso de dependências que necessitem de build, descomentar o código abaixo
# RUN apk add --no-cache alpine-sdk python3
ENV NODE_ENV production
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci --prod
COPY --from=build /app/build/ /app/
COPY ormconfig.js /app/
COPY src/generated/integrations.schema.json /app/src/generated/
CMD ["node", "-r", "source-map-support/register", "/app/src/server.js"]
