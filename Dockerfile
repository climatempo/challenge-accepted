FROM node:18.12.0-alpine

USER root

RUN npm i -g yarn

USER node

RUN chown -R node ~/.config && chown -R node ~/.cache
